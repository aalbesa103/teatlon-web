// Datos centralizados de la Web
const Data = {
    obras: [
        { 
            id: "fotogenesis", titulo: "Fotogénesis", 
            sinopsis: "María recurre a su terapeuta cuando viejos fantasmas vuelven para cuestionarla. Lo que hasta ese momento fue una sospecha, poco a poco empieza a revelarse como las fotografías...", 
            elenco: "Cintia Silveyra D'avila", direccion: "Micaela Tristan", duracion: "Aprox 60 min", imagen: "img/fotogenesis.jpg", link: "https://www.alternativateatral.com/obra96573-fotogenesis" 
        },
        { 
            id: "roja", titulo: "Roja", 
            sinopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder text para sinopsis.", 
            elenco: "1 Intérprete", direccion: "A confirmar", duracion: "Aprox 60 min", imagen: "", link: "#entradas" 
        },
        { 
            id: "desalojo", titulo: "Desalojo", 
            sinopsis: "Una casa, cinco hermanos y una herencia frustrada. Memorias y sueños compartidos derrumbados por la ambición y los intereses foráneos.", 
            elenco: "Mabel Alanis, Tita Alvarez Arigoz, Rubén DI Renta, Silvina Gallina, Julio César Traversa", direccion: "Perico Lascano", duracion: "Aprox 60 min", imagen: "img/desalojo.jpg", link: "https://www.alternativateatral.com/obra80776-desalojo" 
        },
        { 
            id: "soysola", titulo: "Soy sola", 
            sinopsis: "Una destacada actriz de la escena nacional vuelve a su pueblo natal para ser declarada ciudadana Ilustre y dar una función a beneficio en el teatro de la ciudad. Durante su breve estadía...", 
            elenco: "Eugenia Arigós, Anahí Gómez Galán, Fabiana Ivanoff, Liliana Pérez Salas", direccion: "Perico Lascano", duracion: "Aprox 60 min", imagen: "img/soysola.jpg", link: "https://www.alternativateatral.com/obra97151-soy-sola" 
        },
        { 
            id: "lluviaverde", titulo: "Lluvia verde", 
            sinopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder text para sinopsis.", 
            elenco: "5 Intérpretes", direccion: "Perico", duracion: "Aprox 60 min", imagen: "", link: "#entradas" 
        },
        { 
            id: "jubilacion", titulo: "Jubilación, Grotesco Futurista", 
            sinopsis: "En alguna posible realidad futura la superpoblación ha exigido al gobierno la toma de medidas extremas para aumentar la productividad. La edad de la jubilación se reduce a los 40 años...", 
            elenco: "Malena Gerez, Julieta Pellitta, Mariana Piro", direccion: "Perico Lascano", duracion: "Aprox 60 min", imagen: "img/jubilacion.jpg", link: "https://www.alternativateatral.com/obra92755-jubilacion-grotesco-futurista" 
        },
        { 
            id: "osadaescritura", titulo: "Osada escritura", 
            sinopsis: "\"Osada Escritura\" nace de la pasión por los misterios de lo cotidiano, por los momentos en los que ocurre todo pero no pasa nada, expresados en la literatura de Clarice Lispector.", 
            elenco: "Victoria Cleve Terpay (narración), María Eugenia Basili (violonchelo).", direccion: "Roxi Drucker", duracion: "Aprox 60 min", imagen: "", link: "#entradas" 
        },
        { 
            id: "flirteo", titulo: "Flirteo", 
            sinopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder text para sinopsis.", 
            elenco: "1 Intérprete", direccion: "Alberto", duracion: "Aprox 60 min", imagen: "", link: "#entradas" 
        },
        { 
            id: "cuandolascrien", titulo: "Cuando las ranas críen pelos", 
            sinopsis: "En un pueblo de la provincia, Eugenio, el modisto y Teresa, la costurera transitan sus vidas entre telas y charlas. Alrededor de ellos, el exterior irrumpe a través de Nicolás, un niño...", 
            elenco: "Adrián Carrudo, Ana Ines Marcos, Juan Rodriguez", direccion: "Perico Lascano", duracion: "Aprox 60 min", imagen: "img/cuandolascrien.jpg", link: "https://www.alternativateatral.com/obra83586-cuando-las-ranas-crien-pelos" 
        },
        { 
            id: "lasesperas", titulo: "Las esperas de Juana", 
            sinopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder text para sinopsis.", 
            elenco: "2 Intérpretes", direccion: "Perico", duracion: "Aprox 60 min", imagen: "", link: "#entradas" 
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
              { hora: "19:00 hs", titulo: "Desalojo", tipo: "obra" },
              { hora: "20:00 hs", titulo: "Interludio Musical y Buffet (Patio)", tipo: "interludio" },
              { hora: "21:00 hs", titulo: "Osada Escritura", tipo: "obra" }
          ]
        },
        { dia: "domingos", fechaEtiqueta: "Domingo 7 de Junio",
          eventos: [
              { hora: "18:00 hs", titulo: "Soy Sola", tipo: "obra" },
              { hora: "19:00 hs", titulo: "Interludio Musical y Buffet (Patio)", tipo: "interludio" },
              { hora: "20:00 hs", titulo: "Flirteo", tipo: "obra" }
          ]
        },
        { dia: "viernes", fechaEtiqueta: "Viernes 12 de Junio",
          eventos: [
              { hora: "21:00 hs", titulo: "Roja", tipo: "obra" }
          ]
        },
        { dia: "sabados", fechaEtiqueta: "Sábado 13 de Junio",
          eventos: [
              { hora: "19:00 hs", titulo: "Lluvia Verde", tipo: "obra" },
              { hora: "20:00 hs", titulo: "Interludio Musical y Buffet (Patio)", tipo: "interludio" },
              { hora: "21:00 hs", titulo: "Las Esperas de Juana", tipo: "obra" }
          ]
        },
        { dia: "domingos", fechaEtiqueta: "Domingo 14 de Junio",
          eventos: [
              { hora: "18:00 hs", titulo: "Jubilación, Grotesco Futurista", tipo: "obra" },
              { hora: "19:00 hs", titulo: "Interludio Musical y Buffet (Patio)", tipo: "interludio" },
              { hora: "20:00 hs", titulo: "Cuando las ranas críen pelos", tipo: "obra" }
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
            { titulo: "Combo Viernes", precio: "$28.000", desc: "Promo especial para las funciones del viernes.", ahorro: "Ahorrás $12.000", cta: "Comprar Pase Diario" },
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
