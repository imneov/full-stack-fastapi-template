import uuid
from typing import Any

from fastapi import APIRouter, HTTPException
from sqlmodel import func, select

from app.api.deps import CurrentUser, SessionDep
from app.models import Secret, SecretCreate, SecretPublic, SecretsPublic, SecretUpdate, Message

router = APIRouter()


@router.get("/", response_model=SecretsPublic)
def read_secrets(
    session: SessionDep, current_user: CurrentUser, skip: int = 0, limit: int = 100
) -> Any:
    """
    Retrieve secrets.
    """

    if current_user.is_superuser:
        count_statement = select(func.count()).select_from(Secret)
        count = session.exec(count_statement).one()
        statement = select(Secret).offset(skip).limit(limit)
        secrets = session.exec(statement).all()
    else:
        count_statement = (
            select(func.count())
            .select_from(Secret)
            .where(Secret.owner_id == current_user.id)
        )
        count = session.exec(count_statement).one()
        statement = (
            select(Secret)
            .where(Secret.owner_id == current_user.id)
            .offset(skip)
            .limit(limit)
        )
        secrets = session.exec(statement).all()

    return SecretsPublic(data=secrets, count=count)


@router.get("/{id}", response_model=SecretPublic)
def read_secret(session: SessionDep, current_user: CurrentUser, id: uuid.UUID) -> Any:
    """
    Get secret by ID.
    """
    secret = session.get(Secret, id)
    if not secret:
        raise HTTPException(status_code=404, detail="Secret not found")
    if not current_user.is_superuser and (secret.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    return secret


@router.post("/", response_model=SecretPublic)
def create_secret(
    *, session: SessionDep, current_user: CurrentUser, secret_in: SecretCreate
) -> Any:
    """
    Create new secret.
    """
    secret = Secret.model_validate(secret_in, update={"owner_id": current_user.id})
    session.add(secret)
    session.commit()
    session.refresh(secret)
    return secret


@router.put("/{id}", response_model=SecretPublic)
def update_secret(
    *,
    session: SessionDep,
    current_user: CurrentUser,
    id: uuid.UUID,
    secret_in: SecretUpdate,
) -> Any:
    """
    Update an secret.
    """
    secret = session.get(Secret, id)
    if not secret:
        raise HTTPException(status_code=404, detail="Secret not found")
    if not current_user.is_superuser and (secret.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    update_dict = secret_in.model_dump(exclude_unset=True)
    secret.sqlmodel_update(update_dict)
    session.add(secret)
    session.commit()
    session.refresh(secret)
    return secret


@router.delete("/{id}")
def delete_secret(
    session: SessionDep, current_user: CurrentUser, id: uuid.UUID
) -> Message:
    """
    Delete an secret.
    """
    secret = session.get(Secret, id)
    if not secret:
        raise HTTPException(status_code=404, detail="Secret not found")
    if not current_user.is_superuser and (secret.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    session.delete(secret)
    session.commit()
    return Message(message="Secret deleted successfully")
