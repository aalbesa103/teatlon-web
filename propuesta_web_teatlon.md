# 🎭 Propuesta Web: TEATLÓN – Ciclo de Teatro Platense

## 🧭 1. Sitemap del Sitio

La estructura del sitio será **One-Page (Single Page Application)** o un sitio estático minimalista con navegación por anclas (`#`), ideal para conversiones rápidas en eventos, alojable fácilmente en **GitHub Pages**.

1. **[#Home]** – Hero section con impacto visual (fechas, logo, CTA principal).
2. **[#Obras]** – Grilla visual de las 10 obras participantes.
3. **[#Cronograma]** – Grilla de programación por día y horarios.
4. **[#Entradas]** – Tipos de entradas, combos y sistema de reserva/compra.
5. **[#Nosotros]** – Sobre el festival y su identidad.
6. **[#Contacto]** – Redes, prensa y pie de página.

---

## 🎨 2. Propuesta Visual y UI/UX

* **Estética General:** Minimalista, contemporánea y de alto contraste. Inspirada en las características geométricas de la ciudad de La Plata (diagonales, cuadrados perfectos, rombos) combinadas con el estilo de teatro independiente.
* **Paleta de Colores (Basada en el material visual):**
  * **Fondo:** Violeta oscuro casi negro (#18101E) - Aporta elegancia de sala teatral (luces apagadas).
  * **Textos principales / "Luz de escenario":** Crema suave (#FDF6E3) o Blanco hielo.
  * **Acentos (Botones y destacados):** Rojo ladrillo (#C4302B) y Verde petróleo/Lluvia verde (#1A8C8C), Dorado/Mostaza (#D4AF37) para jerarquizar combos especiales.
* **Tipos de Letra (Google Fonts):**
  * *Títulos (Display/Hero):* `Bebas Neue` o `Oswald` (Condensadas, altas, remiten a marquesinas y cartelería geométrica).
  * *Cuerpo de texto / Detalles:* `Inter` o `Montserrat` (Lectura impecable en mobile, con pesos variados para los datos duros como fechas y precios).
* **Forma y Estructura:** Elementos asimétricos, divisores diagonales sutiles y tarjetas rectangulares rígidamente estructuradas (como las manzanas platenses).

---

## 🧱 3. Secciones Detalladas y Copy Listo para Usar

### 3.1 Hero Section (Home)
* **Objetivo:** Impacto y conversión a los 3 segundos.
* **Visual:** Fondo oscuro con iluminación de tacho teatral. Formas diagonales cruzando el fondo suavemente. El logo en tamaño importante.
* **Copy (Textos):**
  * *Sobretítulo:* Espacio 44 presenta
  * *Título:* **TEATLÓN**
  * *Subtítulo:* Festival de Teatro Platense. 10 Obras. 6 Días. Un escenario y toda la ciudad.
  * *Fechas destacadas:* **5, 6, 7, 12, 13 y 14 de JUNIO**
  * *CTA (Call to Action) principal:* [🎟️ Ver Programación y Entradas]

### 3.2 Sección Sobre el Festival (#Nosotros)
* **Objetivo:** Contexto cultural sin saturar.
* **Visual:** Bloque de texto a dos columnas en desktop, una en mobile.
* **Copy:**
  * *Título:* **MÁS QUE UN CICLO, UNA MARATÓN TEATRAL**
  * *Texto descriptivo:* El teatro independiente tiene su propio pulso, y en La Plata late más fuerte. TEATLÓN nace como un punto de encuentro para elencos locales, dramaturgias diversas y públicos curiosos. Durante dos fines de semana, **Espacio 44** se transforma en el epicentro de la creación escénica contemporánea. Un panorama vibrante de lo que está sucediendo hoy en el teatro de nuestra ciudad.

### 3.3 Sección de Obras (#Obras)
* **Objetivo:** Mostrar variedad y generar interés profundo.
* **Visual:** Grid tipo mampostería o tarjetas cuadradas (masonry), revelando información en hover (en desktop) o clic (mobile). Con la diagonal platense como patrón de fondo en las tarjetas.

#### 🧩 Estructura de Datos para cada Obra (Ejemplo tipo Alternativa Teatral):
```json
{
  "titulo": "Fotogénesis",
  "sinopsis": "Descubra qué sucede cuando el revelado no sale como se espera y los recuerdos toman vida propia...",
  "elenco": "Nombre Actor 1, Nombre Actriz 2",
  "direccion": "Dirección General",
  "dramaturgia": "Autor de la obra",
  "duracion": "60 minutos",
  "imagen": "/assets/obras/fotogenesis.webp",
  "etiqueta": "Drama contemporáneo",
  "link_compra": "https://alternativateatral.com/obras/..."
}
```
*Las obras a incluir en esta estructura son: Fotogénesis, Roja, Desalojo, Soy sola, Lluvia verde, Jubilación, Osada escritura, Flirteo, Cuando las críen pelos, Las esperas de Juana.*

### 3.4 Sección de Programación (#Cronograma)
* **Objetivo:** Organización clara e intuitiva para que el usuario arme su combo.
* **Visual:** Filtros interactivos por día (`Viernes` | `Sábados` | `Domingos`). Diseño en lista de tiempo (timeline).
* **Copy / Estructura por Día:**

  * **Viernes 5 y 12 de Junio**
    * 19:00 hs — *[Obra a confirmar]*
    * 21:00 hs — *[Obra a confirmar]*

  * **Sábados 6 y 13 de Junio**
    * 19:00 hs — *[Obra a confirmar]*
    * 📍 *Interludio Musical y Buffet en el Patio* (Entre medio de las funciones)
    * 21:00 hs — *[Obra a confirmar]*

  * **Domingos 7 y 14 de Junio**
    * 18:00 hs — *[Obra a confirmar]*
    * 📍 *Interludio Musical y Buffet en el Patio*
    * 20:00 hs — *[Obra a confirmar]*

### 3.5 Sección de Entradas (#Entradas)
* **Objetivo:** Conversión directa. Mostrar ventajas económicas de comprar combos.
* **Visual:** Tarjetas de precios "Pricing tables". Las individuales más discretas, los combos destacados en tamaño y color.

#### Copys y Datos Integrados (Del archivo Excel)
* *Título de Sección:* **TU ENTRADA AL TEATLÓN**
* *Texto intro:* Asegurá tu lugar. Cupos limitados por función en Espacio 44. Cuantas más obras ves, menos pagás.

**🎫 Tickets y Combos:**

1. **Entrada Individual**
   * Precio: **$20.000**
   * CTA: [Comprar General]

2. **Pases por Día (Bloque de 2 funciones consecutivas)**
   * *Ideal para hacerte una maratón exprés.*
   * Precio: **$28.000** ~(Ahorrás $12.000)~
   * Opciones: `Combo Viernes`, `Combo Sábado`, `Combo Domingo`.
   * CTA: [🎟️ Comprar Pase Diario]

3. **Promos Progresivas (Elegí diferentes días y horarios)**
   * **2 Funciones:** 2da entrada al 50% ($30.000)
   * **3 Funciones:** 3x2 ($40.200)
   * **4 Funciones:** 4x2 ($40.000)
   * CTA: [✨ Armar mi propia ruta]

4. **Los Pases Épicos**
   * **Pase Fin de Semana (5 funciones):** **$45.000** *(Un fin de semana a puro teatro)*
   * **Pase Festival Completo (10 funciones):** **$70.000** *(No te perdés absolutamente nada)*
   * CTA: [👑 Modo Teatrón] *(Diseño enorado/destacado)*

**🧩 Estructura Lógica (Ticket System):**
```javascript
const entradasData = [
  { tipo: "Individual", price: 20000, desc: "Para una sola obra", link: "..." },
  { tipo: "Combo Día", price: 28000, desc: "Incluye las 2 obras de Sábado, Domingo o Viernes", link: "..." },
  { tipo: "Festival Full", price: 70000, desc: "Acceso a las 10 obras", link: "...", highlight: true }
]
```

### 3.6 Sección Contacto y Prensa (#Contacto)
* **Visual:** Footer oscuro y sobrio con links.
* **Copy:**
  * *Dirección:* Espacio 44, La Plata.
  * *Redes:* [Icono IG] @teatlon.laplata
  * *Consultas Generales:* hola@teatlon.com.ar
  * *Contacto para Medios / Prensa:* Para entrevistas, acreditaciones de cobertura escénica y material fotográfico de las obras, contáctenos a prensa@teatlon.com.ar

---

## ⚙️ 4. Funcionalidades Recomendadas

1. **Filtros de Cartelera:** Botones para ver obras por "Etiquetas (Drama, Comedia)", o por "Día".
2. **Sticky "Buy" Button en Mobile:** Un botón de "Comprar Entradas" siempre visible en la parte inferior de la pantalla en vista de teléfonos.
3. **Plataforma Tecnológica:**
   * Al estar pensado para **GitHub Pages**, el sitio se construirá utilizando HTML/CSS/JS plano o un generador estático moderno como **Astro**, **Next.js (Export estático)** o **Vite+React**. 
   * Esto garantiza carga hiper veloz, nulo costo de servidor y sin caídas por tráfico masivo de compra de tickets.
   * Los botones de compra llevarán directamente mediante URL estructuradas a **Alternativa Teatral** o a un formulario de pago / pasarela de MercadoPago vinculado a un Google Forms si manejan ventas por transferencia (como sugiere la flexibilidad del Excel).

---
> *Diseñar la web como si fuera a publicarse realmente, no como un ejemplo teórico. Priorizar claridad, usabilidad y atractivo visual.*
