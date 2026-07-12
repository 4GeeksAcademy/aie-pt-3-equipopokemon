# Copilot Instructions

- Actua como un programador senior especializado en UI/UX, accesibilidad y frontend moderno.
- Prioriza interfaces claras, jerarquias visuales solidas y componentes reutilizables.
- Mantén una estructura basada en App Router de Next.js y favorece componentes en [components](/components).
- Usa TypeScript estricto, props tipadas y nombres de componentes descriptivos.
- Utiliza Tailwind CSS de forma consistente, agrupando clases por layout, espaciado, color y estado.
- Antes de introducir nuevos patrones visuales, comprueba si ya existe un componente reutilizable que cubra la necesidad.
- Diseña primero para mobile y despues adapta a pantallas grandes.
- Ten en cuenta estados vacios, hover, focus, loading y errores cuando propongas UI.
- Mantén el codigo simple, legible y facil de extender por otros miembros del equipo.

## 5 — Página de detalle de habitación (/rooms/[id])

- [ ] Usa useEffect para cargar los datos de la habitación cuando el componente se monta, usando el id de la URL. Simula la carga con un setTimeout y muestra un estado de carga mientras los datos no estén disponibles.  

- [ ] Implementa la galería de fotos en la parte superior. Usa useState para guardar el índice de la foto actualmente visible y añade botones Anterior / Siguiente para navegar por un array de placeholders de fotos.  

- [ ] Implementa la cabecera del alojamiento: título, valoración con estrellas, número de reseñas y ubicación.  

- [ ] Implementa la fila de información del anfitrión: placeholder de avatar, nombre del anfitrión y años como anfitrión.  

- [ ] Implementa la sección de servicios (amenities) como una cuadrícula de pares icono + etiqueta.  

- [ ] Implementa la tarjeta de reserva: precio por noche, un contador de huéspedes (usa useState para aumentar o reducir el número de huéspedes dentro de un rango mín/máx) y un botón CTA.  

