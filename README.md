# Proyecto Integración Continua — Politécnico Grancolombiano

Aplicación To-Do List con Angular (frontend) y NestJS (backend) contenerizada con Docker.

## Estructura

```
├── frontend/   # Angular 17 + Nginx
├── backend/    # NestJS API REST
└── docker-compose.yml
```

## Levantar los contenedores

```bash
docker-compose up --build
```

- Frontend: http://localhost:4200
- Backend API: http://localhost:3000/tasks

## Detener

```bash
docker-compose down
```
