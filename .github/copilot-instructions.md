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

### 5 — Página de detalle de habitación (/rooms/[id])

- [ ] Usa useEffect para cargar los datos de la habitación cuando el componente se monta, usando el id de la URL. Simula la carga con un setTimeout y muestra un estado de carga mientras los datos no estén disponibles.  

- [ ] Implementa la galería de fotos en la parte superior. Usa useState para guardar el índice de la foto actualmente visible y añade botones Anterior / Siguiente para navegar por un array de placeholders de fotos.  

- [ ] Implementa la cabecera del alojamiento: título, valoración con estrellas, número de reseñas y ubicación.  

- [ ] Implementa la fila de información del anfitrión: placeholder de avatar, nombre del anfitrión y años como anfitrión.  

- [ ] Implementa la sección de servicios (amenities) como una cuadrícula de pares icono + etiqueta.  

- [ ] Implementa la tarjeta de reserva: precio por noche, un contador de huéspedes (usa useState para aumentar o reducir el número de huéspedes dentro de un rango mín/máx) y un botón CTA.  

#### 5.1 — Reto opcional
- [ ] Añade campos funcionales de fecha de entrada / salida con una librería de date picker y calcula el precio total en función del número de noches seleccionadas.


### 6 — Navegación

- [ ] Al hacer clic en una tarjeta de alojamiento en la Home o en el Catálogo, debe navegar a la página de detalle.  

- [ ] Usa el componente <Link> de Next.js para toda la navegación entre páginas.  

- [ ] Incluye un botón de volver o un breadcrumb en la página de detalle que regrese al Catálogo.

⚠️ IMPORTANTE: Nunca uses una etiqueta <a href="..."> plana para la navegación interna en una aplicación Next.js.  

### 7 — Calidad de código

- [ ] Cada componente vive en su propio archivo dentro de /components.

- [ ] Ningún componente supera las ~80 líneas de JSX + lógica. Si lo hace, divídelo.

- [ ] Todos los componentes están definidos como const (componentes funcionales). Sin componentes de clase.

## Qué vamos a evaluar

- [ ] Existe un archivo context.md en la raíz con una descripción clara de la interfaz, sus componentes y su usuario.

- [ ] El proyecto fue configurado con Next.js 16, TypeScript, Tailwind CSS y el App Router (sin usar plantilla de inicio).

- [ ] Tres rutas están implementadas y son navegables: /, /catalog y /rooms/[id].

- [ ] Toda la navegación interna usa <Link> — sin recargas completas de página entre vistas.

- [ ] El diseño es mobile-first: el viewport de 375px está correcto antes de aplicar ningún breakpoint de escritorio.

- [ ] El componente de tarjeta de alojamiento se reutiliza en la Home y en el Catálogo.

- [ ] useState se usa en al menos tres casos distintos: filtrado por búsqueda, categoría activa, orden de resultados, contador de huéspedes o índice de la galería de fotos.

- [ ] useEffect se usa para simular la carga de datos al montar el componente en al menos dos páginas, con un estado de carga visible mientras los datos no están disponibles.

- [ ] La página de detalle incluye las cinco secciones: galería con navegación, cabecera del alojamiento, info del anfitrión, amenities y tarjeta de reserva.

- [ ] Los componentes están divididos en archivos individuales, cada uno con una única responsabilidad.

- [ ] Sin componentes de clase — todos los componentes son funcionales y usan const.

- [ ] Se definen tipos o interfaces de TypeScript para las estructuras de datos principales (alojamiento, habitación).

- [ ] Las clases de utilidad de Tailwind se usan para todos los estilos — sin objetos style={{}} en línea.

- [ ] El flujo de visión a especificación es visible: las especificaciones derivadas de las capturas están documentadas en context.md o en comentarios del código.