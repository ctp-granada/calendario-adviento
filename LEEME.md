# Calendario de Adviento · Bioquímica Enfermería (versión con Firebase)

## Qué hay en la carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El calendario que juegan los alumnos |
| `profesor.html` | Tu panel: alumnos, puntos, % de acierto por día y descarga en CSV |
| `firebase-config.js` | **El único archivo que tienes que editar** (datos del proyecto y ajustes) |
| `firestore.rules` | Reglas de seguridad de la base de datos |
| `firebase.json` | Configuración para publicar con Firebase Hosting |

## Puesta en marcha (unos 20 minutos)

### 1. Crea el proyecto
1. Entra en <https://console.firebase.google.com> con tu cuenta de Google y pulsa **Crear un proyecto** (por ejemplo, `adviento-bioquimica`). Google Analytics no hace falta.
2. En la página del proyecto, pulsa el icono **`</>`** (Web) para añadir una app web. Ponle un nombre y regístrala.
3. Te mostrará un bloque `const firebaseConfig = { ... }`. Copia esos valores en `firebase-config.js`.

### 2. Activa el inicio de sesión
**Compilación → Authentication → Comenzar → Método de acceso**
- Activa **Google** (es la opción recomendada: `acceso: "google"`).
- Si prefieres que los alumnos solo escriban su nombre y correo, activa también **Anónimo** y pon `acceso: "nombre"` en `firebase-config.js`.

### 3. Crea la base de datos
**Compilación → Firestore Database → Crear base de datos**
- Ubicación: **europe-southwest1 (Madrid)**, para que los datos queden en la UE.
- Elige el modo de producción.
- En la pestaña **Reglas**, borra lo que haya, pega el contenido de `firestore.rules`, **cambia `TU_CORREO@go.ugr.es` por tu correo** y pulsa **Publicar**.

### 4. Revisa los ajustes en `firebase-config.js`
- `profesores`: tu correo (el mismo que pusiste en las reglas).
- `dominios`: los dominios de correo que admites. Comprueba con qué cuenta entran tus alumnos (`@go.ugr.es`, `@correo.ugr.es`…).
- `grupos`: tus grupos de prácticas, o `[]` si no quieres preguntarlo.
- `ranking`: `true` para mostrar la clasificación de la clase (solo el nombre y la inicial del apellido).

### 5. Publica la web
**Opción A, Firebase Hosting** (recomendada; el dominio se autoriza solo):
```bash
npm install -g firebase-tools
firebase login
cd carpeta-del-calendario
firebase use --add          # elige tu proyecto
firebase deploy
```
Te dará una dirección como `https://adviento-bioquimica.web.app`. Esa es la que compartes con los alumnos en PRADO. Tu panel estará en `https://adviento-bioquimica.web.app/profesor.html`.
Con `firebase deploy` también se publican las reglas de `firestore.rules`.

**Opción B, sin instalar nada:** arrastra la carpeta a <https://app.netlify.com/drop>. Después, en Firebase, ve a **Authentication → Configuración → Dominios autorizados** y añade el dominio que te dé Netlify.

> ⚠️ El calendario no funciona con Firebase si abres `index.html` con doble clic, porque necesita estar publicado en una web.
> Si `firebase-config.js` está sin rellenar, el juego funciona igualmente, pero solo guarda las respuestas en el navegador de cada alumno.

## Cómo se guardan los datos
- **`alumnos/{uid}`**: nombre, correo, grupo, respuestas de cada día (acierto y puntos), total, racha y fecha de la última actividad. Cada alumno solo puede leer y escribir su propia ficha; tú puedes leerlas todas.
- **`ranking/{uid}`**: alias y puntos, visibles para la clase.
- Las reglas impiden borrar respuestas ya dadas (no se puede repetir un día), cambiar el correo o poner más de 3.750 puntos.

## Antes de compartirlo
- Cambia el código del modo profesor (`TEACHER_CODE`, en `index.html`). Ahora es `UGR2026`.
- Protección de datos: guardas el nombre y el correo de los alumnos. Avísales en PRADO de para qué se usan (seguimiento de la actividad) y borra los datos al terminar el curso: en la consola, **Firestore → alumnos → Eliminar colección**.
- El plan gratuito de Firebase (Spark) sobra para una o varias clases.
