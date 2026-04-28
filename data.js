// Datos centralizados de la Web
const Data = {
    obras: [
        {
            id: "fotogenesis", titulo: "Fotogénesis", color: "#5F82B0",
            sinopsis: "María recurre a su terapeuta cuando viejos fantasmas vuelven para cuestionarla. A partir de ahí, su imagen personal y pública se trastornan, se tensionan y entran en contradicción. La búsqueda de una imagen se vuelve una peripecia que la lleva a cuestionarlo todo. ¿Qué pasa cuando la imagen que nos devuelve el espejo no es la verdadera?",
            elenco: "Cintia Silveyra d'Avila",
            direccion: "Micaela Tristan",
            dramaturgia: "Lisandro Fernández",
            equipo: "Diseño sonoro: Sebastián Morán · Escenografía e iluminación: Juan Camargo · Fotografía: Concepto Visual Fotografía · Vestuario: Martina Cohen Imach · Producción: Lisandro Fernández y Micaela Tristan · Visuales: Micaela Tristan",
            duracion: "Aprox 60 min", imagen: "img/fotogenesis.jpg", link: "https://www.alternativateatral.com/obra96573-fotogenesis"
        },
        {
            id: "roja", titulo: "Roja", color: "#B83830",
            sinopsis: "En un pueblo del interior bonaerense una mujer de ochenta y tres años se prepara para recibir a sus hijas con una excusa doméstica: compartir una simple merienda. Pero bajo la aparente rutina late la feroz urgencia de revelarles un secreto que ha enterrado durante toda su vida.",
            elenco: "Verónica Caballero",
            direccion: "Magui Cabassi",
            dramaturgia: "Fabricio Castillo",
            duracion: "50 min aprox", imagen: "img/roja.jpg", link: "https://www.alternativateatral.com.ar/obra100778-roja"
        },
        {
            id: "desalojo", titulo: "Desalojo", subtitulo: "de la ley primera", color: "#7A9496",
            sinopsis: "Una casa, cinco hermanos y una herencia frustrada. Memorias y sueños compartidos derrumbados por la ambición y los intereses foráneos. \"Como estrellas en el cielo. Desde acá juntitos, desde allá a millones de años luz\".",
            elenco: "Tita Alvarez Arigoz · Ruber DI Renta · Silvina Gallina · Belén Otero · Julio César Traversa",
            direccion: "Perico Lascano",
            dramaturgia: "Perico Lascano",
            equipo: "Escenografía: Carola Mauriño · Iluminación y Sonido: Facundo Mauriño Lascano · Maquillaje: Guadalupe Garcia · Fotografía: Micaela Bruno · Asistencia de dirección: Ana Ines Marcos · Producción: Puesta En El Alma",
            duracion: "Aprox 60 min", imagen: "img/desalojo.jpg", link: "https://www.alternativateatral.com.ar/obra81331-el-desalojo-de-la-ley-primera"
        },
        {
            id: "soysola", titulo: "Soy sola", subtitulo: "de Gastón Chaumeil", color: "#7070B0",
            sinopsis: "Una destacada actriz de la escena nacional vuelve a su pueblo natal para ser declarada ciudadana Ilustre y dar una función a beneficio en el teatro de la ciudad. Durante su breve estadía...",
            elenco: "Eugenia Arigós · Lili Pérez Salas · Anahí Gómez Galán · Fabiana Ivanoff",
            direccion: "Perico Lascano", duracion: "Aprox 60 min", imagen: "img/soysola.jpg", link: "https://www.alternativateatral.com/obra97151-soy-sola"
        },
        {
            id: "lluviaverde", titulo: "Lluvia verde", color: "#5A9068",
            sinopsis: "En un país donde el dinero nunca duerme, un financista juega una partida desigual en un tablero marcado por la corrupción. Nadie es inocente, todos son reemplazables, y el sistema que los contiene es el mismo que, tarde o temprano, los devora.",
            elenco: "Adrián Carrudo · Gastón Chaumeil · Virginia García Boero · Florencia Selva · Nicolás Soldo",
            direccion: "Perico Lascano",
            dramaturgia: "Gastón Chaumeil y Julio Pipo Lleral",
            equipo: "Maquillaje: Guadalupe García · Sonido: Facundo Mauriño Lascano · Diseño de Iluminación: Alma Lascano · Concepto Estético: Carola Mauriño · Producción general: Puesta En El Alma",
            duracion: "Aprox 60 min", imagen: "img/lluvia_verde.jpg", link: "https://www.alternativateatral.com.ar/obra100686-lluvia-verde"
        },
        {
            id: "jubilacion", titulo: "Jubilación", color: "#C0A030",
            sinopsis: "En alguna posible realidad futura la superpoblación ha exigido al gobierno la toma de medidas extremas para aumentar la productividad. La edad de la jubilación se reduce a los 40 años...",
            elenco: "Malena Gerez, Julieta Pellitta, Mariana Piro", direccion: "Perico Lascano", duracion: "Aprox 60 min", imagen: "img/jubilacion.jpg", link: "https://www.alternativateatral.com/obra92755-jubilacion-grotesco-futurista",
            subtitulo: "Grotesco Futurista"
        },
        {
            id: "osadaescritura", titulo: "Osada escritura", color: "#B87840",
            sinopsis: "¿Quién es Clarice Lispector? ¿Quién soy yo? ¿Quién sos vos? ¿Estás dispuesto a descubrirlo? Un viaje íntimo por los misterios de lo cotidiano, por los momentos en los que ocurre todo pero no pasa nada.",
            elenco: "Victoria Cleve Terpay (narración) · María Eugenia Basili (violonchelo)",
            direccion: "Roxi Drucker",
            dramaturgia: "Victoria Cleve Terpay",
            equipo: "Música original: Juan Ignacio Ludueña · Diseño de luces: Ayelén Campagna · Asist. dirección: Guillermina Busquets",
            duracion: "50 min aprox", imagen: "", link: "https://www.alternativateatral.com/obra100759-osada-escritura"
        },
        {
            id: "flirteo", titulo: "Flirteo", color: "#B07888",
            sinopsis: "¿Qué sucede cuando la rutina de una oficina gris es interrumpida por el pulso de un deseo secreto? Damián habita un universo de pequeños rituales, silencios cargados y una obsesión que crece entre expedientes y cafés compartidos. En este monólogo, el flirteo no es solo un juego de seducción, sino la última frontera de un hombre que intenta, desesperadamente, ser visto. Una pieza que explora la fragilidad de nuestras fantasías y la soledad que se esconde detrás de la hipercomunicación.",
            elenco: "Julieta Pellitta",
            direccion: "Alberto Albesa",
            dramaturgia: "Alberto Albesa",
            equipo: "Asistencia de Dirección: Mariana Piro",
            duracion: "60 mins", imagen: "img/flirteo.jpg", link: "https://www.alternativateatral.com.ar/obra100756-flirteo"
        },
        {
            id: "cuandolasranas", titulo: "Cuando las ranas críen pelos", color: "#908860",
            sinopsis: "En un pueblo de la provincia, Eugenio, el modisto y Teresa, la costurera transitan sus vidas entre telas y charlas. Alrededor de ellos, el exterior irrumpe a través de Nicolás, un niño que desde su inocencia dice aquello que el resto habla a espaldas. La obra se recrea en tres momentos bisagra de la reciente historia argentina: 1980, 1983 y 2001.",
            elenco: "Adrián Carrudo · Ana Inés Marcos · Juan Rodríguez",
            direccion: "Perico Lascano",
            dramaturgia: "Walter Rodríguez",
            equipo: "Iluminación: Facundo Mauriño Lascano · Maquillaje: Carola Mauriño · Fotografía: Micaela Bruno · Producción: Puesta En El Alma",
            duracion: "Aprox 60 min", imagen: "img/cuandolascrien.jpg", link: "https://www.alternativateatral.com.ar/obra83586-cuando-las-ranas-crien-pelos"
        },
        {
            id: "lasesperas", titulo: "Las esperas de Juana", color: "#A08878",
            sinopsis: "¿Cuánto puede una mujer resistirse a aceptar una realidad que se le impone y que aleja sus deseos más profundos? Determinada a conseguir lo que anhela, Juana persistirá en su propósito de todas las formas posibles y hasta las últimas consecuencias, sabiendo que, en su espera, está la justificación de su existencia.",
            elenco: "Margarita Baudino Granda · Alejandra Favini",
            direccion: "Perico Lascano",
            dramaturgia: "Alejandra Favini",
            equipo: "Maquillaje: Guadalupe García · Sonido: Facundo Mauriño Lascano · Diseño de Iluminación: Alma Lascano · Concepto Estético: Carola Mauriño · Producción general: Puesta En El Alma",
            duracion: "Aprox 60 min", imagen: "", link: "https://www.alternativateatral.com.ar/obra100687-las-esperas-de-juana"
        }
    ],

    cronograma: [
        { dia: "viernes", fechaEtiqueta: "Viernes 5 de Junio",
          eventos: [
              { hora: "21:00 hs", titulo: "Fotogénesis", tipo: "obra" }
          ]
        },
        { dia: "sabados", fechaEtiqueta: "Sábado 6 de Junio",
          eventos: [
              { hora: "19:00 hs", titulo: "Osada Escritura", tipo: "obra" },
              { hora: "20:00 hs", titulo: "Interludio Musical y Buffet (Patio)", tipo: "interludio" },
              { hora: "21:00 hs", titulo: "Cuando las ranas críen pelos", tipo: "obra" }
          ]
        },
        { dia: "domingos", fechaEtiqueta: "Domingo 7 de Junio",
          eventos: [
              { hora: "18:00 hs", titulo: "Flirteo", tipo: "obra" },
              { hora: "20:00 hs", titulo: "Soy sola", tipo: "obra" }
          ]
        },
        { dia: "viernes", fechaEtiqueta: "Viernes 12 de Junio",
          eventos: [
              { hora: "21:00 hs", titulo: "Roja", tipo: "obra" }
          ]
        },
        { dia: "sabados", fechaEtiqueta: "Sábado 13 de Junio",
          eventos: [
              { hora: "19:00 hs", titulo: "Las esperas de Juana", tipo: "obra" },
              { hora: "20:00 hs", titulo: "Interludio Musical y Buffet (Patio)", tipo: "interludio" },
              { hora: "21:00 hs", titulo: "Desalojo", tipo: "obra" }
          ]
        },
        { dia: "domingos", fechaEtiqueta: "Domingo 14 de Junio",
          eventos: [
              { hora: "18:00 hs", titulo: "Jubilación, Grotesco Futurista", tipo: "obra" },
              { hora: "20:00 hs", titulo: "Lluvia verde", tipo: "obra" }
          ]
        }
    ],

    entradas: {
        "individuales": [
            { titulo: "Entrada Individual", precio: "$20.000", desc: "Válida para 1 función de tu elección.", cta: "Comprar Entrada" }
        ],
        "combos-dias": [
            { titulo: "Combo Sábado", precio: "$28.000", desc: "Incluye las 2 funciones del sábado.", ahorro: "Ahorrás $12.000", cta: "Comprar Pase Diario" },
            { titulo: "Combo Domingo", precio: "$28.000", desc: "Incluye las 2 funciones del domingo.", ahorro: "Ahorrás $12.000", cta: "Comprar Pase Diario" },
            { titulo: "Combo Viernes", precio: "$28.000", desc: "Los 2 viernes del festival (5 y 12 de junio).", ahorro: "Ahorrás $12.000", cta: "Comprar Pase Viernes" },
            { titulo: "Combo Fin De Semana", precio: "$45.000", desc: "Acceso a 5 funciones (Vie a Dom). Maratón completa.", ahorro: "Ahorrás $55.000", cta: "Comprar Combo Finde" }
        ],
        "promos": [
            { titulo: "2da al 50%", precio: "$30.000", desc: "Elegí 2 funciones diferentes y ahorrá en la segunda.", ahorro: "Ahorrás $10.000", cta: "Ver Promoción" },
            { titulo: "Promo 3x2", precio: "$40.200", desc: "Seleccioná 3 funciones de cualquier día.", ahorro: "Ahorrás $19.800", cta: "Armar 3x2" },
            { titulo: "Promo 4x2", precio: "$40.000", desc: "Seleccioná 4 funciones y pagá solo 2.", ahorro: "Ahorrás $40.000", cta: "Armar 4x2" }
        ],
        "combos-épicos": [
            { titulo: "Pase Festival Completo", precio: "$70.000", desc: "Modo Maratón Teatral. Acceso irrestricto a las 10 obras del festival.", ahorro: "Ahorrás $130.000", cta: "Modo Teatlón (10x)", isEpic: true }
        ]
    }
};
