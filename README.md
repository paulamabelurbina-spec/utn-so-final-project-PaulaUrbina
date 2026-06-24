# utn-so-final-project

Proyecto final de "Arquitectura y Sistemas Operativos"

## Servicios

- Node.js (Express)
- PostgreSQL
- Nginx (proxy inverso)

## 🚀 Para comenzar:

0. Asegurate de tener instalado Git!

```bash
   winget install --id Git.Git -e --source winget
```

1. Asegurate de tener Docker y Docker Compose instalados en tu máquina. Consulta la [Guía de Instalación de Docker](docs/0.InstalacionDocker.md) si necesitas ayuda.
2. Opcional: copia `.env.example` a `.env` si querés cambiar los valores de la base de datos.
3. Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para construir e iniciar los contenedores:
   ```bash
   docker compose up --build
   ```
4. Espera a que todos los servicios (backend, base de datos y nginx) estén levantados correctamente.
5. Abre tu navegador web y accede a [http://localhost](http://localhost) para ver la aplicación funcionando.
6. Si necesitas detener los servicios, presiona `Ctrl+C` en la terminal y luego ejecuta:
   ```bash
   docker compose down
   ```

> Nota: `docker-compose` era el comando usado por Docker Compose v1. En instalaciones actuales se usa `docker compose` como subcomando de Docker.

## URLs de prueba

- Frontend: [http://localhost](http://localhost)
- Ping del backend: [http://localhost/api/ping](http://localhost/api/ping)
- Lista de estudiantes: [http://localhost/api/students](http://localhost/api/students)
- Saludo: [http://localhost/api/greet?name=TuNombre](http://localhost/api/greet?name=TuNombre)

## Persistencia de datos

PostgreSQL guarda sus datos en un volumen nombrado de Docker.

- `docker compose down` detiene y elimina los contenedores, pero conserva el volumen con los datos.
- `docker compose down -v` también elimina los volúmenes; al volver a levantar el proyecto, PostgreSQL ejecuta de nuevo `postgres/init.sql` y recrea los datos iniciales.
- Si no existe `.env`, Docker Compose usa valores por defecto simples: usuario `student`, contraseña `studentpass` y base `school`.

---

## 📝 Pasos para entregar el Proyecto Final

### 1️⃣ Clona el proyecto base

Abrir la terminal o Git Bash y ejecuta:

```bash
git clone https://github.com/JereFassi/utn-so-final-project.git
cd utn-so-final-project
```

---

### 2️⃣ Crea un nuevo repositorio en GitHub

- Ir a [GitHub](https://github.com).
- Hacer clic en **Nuevo repositorio**.
- Elegir un nombre, por ejemplo: `utn-so-final-project-tu-nombre`.
- NO lo inicialices con README (ya tienes uno).
- Hacer clic en **Crear repositorio**.

---

### 3️⃣ Conecta tu carpeta local con tu nuevo repositorio

En la terminal, ejecuta:

```bash
git remote remove origin
git remote add origin https://github.com/tuusuario/utn-so-final-project-tu-nombre.git
```

---

### 4️⃣ Hacé commit de los cambios

Mientras o después de completar las tareas:

```bash
git add .
git commit -m "Proyecto final de Docker completado"
```

---

### 5️⃣ Subí el proyecto a GitHub

```bash
git push -u origin main
```

(Si te da error, probá con: `git push -u origin master`)

---

### 6️⃣ Enviar el enlace

Copia el enlace de tu repositorio:

```
https://github.com/tuusuario/utn-so-final-project-tu-nombre
```

Y envíalo por correo y con copia a:

- jeremiasfassi@gmail.com
- javierekinter@gmail.com

---

## ✅ Notas adicionales:

🔹 Hacer commits frecuentes con mensajes claros (“Agregada ruta greet”, “Conectado caché Redis”).  
🔹 Probar tu proyecto con `docker compose up --build` antes de subirlo.  
🔹 Revisa que tu `.env` no tenga datos sensibles antes de hacer push.  
🔹 Si tienen dudas, pregunten lo que necesiten!
