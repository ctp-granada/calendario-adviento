# Calendario de Adviento · Bioquímica Enfermería (versión con Firebase)

Prof. Francisco Hernández Torres y Carolina Torres Perales · Departamento de Bioquímica y Biología Molecular III e Inmunología · UGR

## Qué hay en la carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El calendario que juegan los alumnos |
| `profesor.html` | Tu panel: alumnos, puntos, % de acierto por día, visitas, valoración y descarga en CSV |
| `firebase-applet-config.json` | Datos del proyecto de Firebase (**adviento-483c6**), ya rellenos |
| `firebase-config.js` | Ajustes del juego: profesores, dominios de correo, grupos y clasificación |
| `firestore.rules` | Reglas de seguridad de la base de datos |
| `firebase.json` | Configuración para publicar con Firebase Hosting y desplegar las reglas |
| `server.js`, `package.json`, `metadata.json`, `firebase-blueprint.json`… | Archivos de Google AI Studio. Solo hacen falta si publicas desde AI Studio |

## Lo que ya está hecho
- El proyecto de Firebase existe y su configuración está en `firebase-applet-config.json`.
- La base de datos es una base con nombre propio creada por AI Studio:
  `ai-studio-calendariodeadvi-b5e0aa28-8f20-469d-b8b2-fb70185aaa61`.
- Tu correo (`ctp@go.ugr.es`) figura como profesor en `firebase-config.js` y en `firestore.rules`.
  Para añadir a otro profesor, pon su correo **en los dos archivos**.

## Comprobaciones en la consola de Firebase (<https://console.firebase.google.com>, proyecto adviento-483c6)
1. **Authentication → Método de acceso:** **Google** tiene que estar activado.
2. **Firestore Database:** elige arriba la base `ai-studio-calendariodeadvi-…` y, en la pestaña **Reglas**, comprueba que está el contenido de `firestore.rules`. Si no, pégalo y pulsa **Publicar**. Ojo: no lo pegues en la base `(default)`.
3. **Authentication → Configuración → Dominios autorizados:** añade el dominio desde el que vayas a publicar el calendario (mira abajo).

## Publicar la web
**Opción A, GitHub Pages** (el repositorio ya es público):
1. En GitHub, ve a **Settings → Pages**. En «Source» elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**.
2. La dirección será `https://ctp-granada.github.io/calendario-adviento/` y el panel, `…/profesor.html`.
3. Añade `ctp-granada.github.io` a los **Dominios autorizados** de Firebase.
4. Las reglas tienes que publicarlas a mano en la consola (paso 2 de arriba).

**Opción B, Firebase Hosting** (publica la web y las reglas a la vez, en la base correcta):
```bash
npm install -g firebase-tools
firebase login
cd calendario-adviento
firebase use adviento-483c6
firebase deploy
```
La dirección será `https://adviento-483c6.web.app`. Ese dominio ya está autorizado.

**Opción C, Vercel:** importa el repositorio en <https://vercel.com/new>. No cambies nada: `vercel.json` ya indica que es una web estática (sin instalar dependencias y publicando la carpeta `dist`). Después añade el dominio que te dé Vercel (por ejemplo, `calendario-adviento.vercel.app`) a los **Dominios autorizados** de Firebase. Las reglas tienes que publicarlas a mano en la consola.

**Opción D, Google AI Studio:** sigue funcionando como hasta ahora, con `server.js`.

> ⚠️ El calendario necesita estar publicado en una web. Si abres `index.html` con doble clic no conecta con Firebase.

## Cómo se guardan los datos
- **`alumnos/{uid}`**: nombre, correo, grupo, respuestas de cada día (acierto y puntos), total, racha y última actividad. Cada alumno solo puede leer y escribir su propia ficha; tú puedes leerlas todas.
- **`ranking/{uid}`**: alias (nombre e inicial del apellido) y puntos, visibles para la clase.
- **`estadisticas/general`**: contador de visitas. Suma 1 por cada sesión de navegador de un alumno que ha iniciado sesión.
- **`valoraciones/{uid}`**: la nota del 0 al 5 de cada alumno (una por alumno, que puede cambiar).
- Las reglas impiden borrar respuestas ya dadas (no se puede repetir un día), cambiar el nombre o el correo y poner más de 3.750 puntos.

## Antes de compartirlo
- Cambia el código del modo profesor (`TEACHER_CODE`, en `index.html`). Ahora es `UGR2026` y, como el repositorio es público, cualquiera puede verlo.
- Protección de datos: guardas el nombre y el correo de los alumnos. Avísales en PRADO de para qué se usan y borra los datos al terminar el curso (en la consola, **Firestore → alumnos → Eliminar colección**).
