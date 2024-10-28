# 如何修改模型

1. 新增 secrets 
   1. 记得加上 表关联
2. 运行 `alembic revision --autogenerate -m "add secrets"`
3. 运行 `alembic upgrade head`
4. 可以看到多了一个表
5. 下载 http://127.0.0.1:8000/api/v1/openapi.json
6. `yarn generate-client` 重新生成 client


## 生成代码

```
cd <project>/
cd backend
poetry shell
nvm use 20
cd ..
source scripts/generate-client.sh > 1.txt 2>&1
```






# Mac can not install psycopg-binary==3.2.1 (MAC 13.5.1 (22G90) M1) #2600

from `psycopg[binary]<4.0.0,>=3.1.13` to `psycopg[binary]==3.1.9`

dependencies = [
    ...
    "psycopg[binary]==3.1.9",
    ...
]


# PROJECT_NAME\POSTGRES_SERVER\POSTGRES_USER\FIRST_SUPERUSER\FIRST_SUPERUSER_PASSWORD
pydantic_core._pydantic_core.ValidationError: 5 validation errors for Settings
PROJECT_NAME
  Field required [type=missing, input_value={}, input_type=dict]
    For further information visit https://errors.pydantic.dev/2.9/v/missing
POSTGRES_SERVER
  Field required [type=missing, input_value={}, input_type=dict]
    For further information visit https://errors.pydantic.dev/2.9/v/missing
POSTGRES_USER
  Field required [type=missing, input_value={}, input_type=dict]
    For further information visit https://errors.pydantic.dev/2.9/v/missing
FIRST_SUPERUSER
  Field required [type=missing, input_value={}, input_type=dict]
    For further information visit https://errors.pydantic.dev/2.9/v/missing
FIRST_SUPERUSER_PASSWORD
  Field required [type=missing, input_value={}, input_type=dict]
    For further information visit https://errors.pydantic.dev/2.9/v/missing

## sqlalchemy.exc.OperationalError: (psycopg.OperationalError) connection failed: :1), port 5432 failed: FATAL:  database "app" does not exist

```
source scripts/init.sh
```


## CORS error

前端启动时不是使用的 5173，
```
BACKEND_CORS_ORIGINS="http://localhost,http://localhost:5173,http://localhost:5174,https://localhost,https://localhost:5173,http://localhost.tiangolo.com"
```

修改为*即可