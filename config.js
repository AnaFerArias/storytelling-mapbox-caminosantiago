var config = {
    style: 'mapbox://styles/anaferarias/cmldp3ddo00by01qxcvha7mtj',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW5hZmVyYXJpYXMiLCJhIjoiY21sYmE0bWxqMHBzZTNncGt6cjc2MzcyMCJ9.bxufUGAH8jGtuaUU4CkVLA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mi Camino de Santiago',
    subtitle: 'Un recorrido interactivo por el Camino Francés, combinando experiencia personal con datos técnicos de cada etapa',
    byline: 'Ana  F  Arias',
    footer: '© 2026 Ana F Arias. Proyecto de storytelling personal. Todos los textos, imágenes y visualizaciones son originales.',
    chapters: [
        {
            id: '0',
            alignment: 'left',
            hidden: false,
            title: 'Inicio: Etapa 0 - León',
            image: './assets/0.jpg',
            description: 'Llegada y primera toma de contacto con el Camino. Día de aclimatación y paseo por el centro histórico: la Calle Ancha conectando la Catedral con el Barrio Húmedo, la Rúa como eje comercial clásico y el ambiente animado de bares y tapas que marcan la vida social leonesa. Un inicio tranquilo, entre casco histórico y Ensanche moderno, antes de que empezara realmente la aventura.',
            location: {
                center: [-5.56707, 42.59847],
                zoom: 12,
                pitch: 50,
                bearing: -5,
                speed: 0.24
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'etapas-camino',
                     opacity: 1
                   // duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'etapas-camino',
                     opacity: 1
                 }
            ]
        },
        {
            id: '1',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 1: León - San Martín del Camino',
            image: './assets/1.jpg',
            description: 'Primera etapa exigente. El cuerpo aún no estaba adaptado y el peso de la mochila se hacía notar en cada paso, aunque la ilusión del inicio compensaba el esfuerzo. El Camino, perfectamente señalizado, avanzaba entre tramos largos y solitarios. La llegada a San Martín fue dura, con un último tramo de carretera que se hizo eterno. Recuerdo el cansancio extremo en piernas y espalda al terminar la jornada.',
            location: {
                center: [-5.80481, 42.49733],
                zoom: 11.5,
                pitch: 77.50,
                bearing: -123.50,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.19, // make the flying slow
                //curve: 7.5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 2: San Martín del Camino - Murias de Rechivaldo',
            image: './assets/2.jpg',
            description: 'Etapa llana y de secano, atravesando pequeñas localidades hasta Astorga. Decidí continuar más allá de la parada habitual y terminar en Murias de Rechivaldo, en una casa rural sencilla y acogedora, donde el ritmo parecía detenerse. Allí, el dueño del albergue me dijo algo que se quedó conmigo: el dolor, las ampollas, las rozaduras… forman parte del Camino. No se evitan, se atraviesan. Como en la vida. Esa fue, quizá, la verdadera enseñanza de la etapa.',
            location: {
                center: [-6.10768, 42.45918],
                zoom: 13.5,
                pitch: 67.30,
                bearing: -80.85,
                speed: 0.21, // make the flying slow
                //curve: 0.25,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 3: Murias de Rechivaldo - Foncebadón ',
            image: './assets/3.jpg',
            description: 'El ascenso hacia Foncebadón marcó un cambio de terreno y de exigencia. El Camino comenzó a ganar altura y el esfuerzo se hizo evidente, especialmente en el tramo final. Ese día aparecieron las ampollas: el calzado no ayudó y cada paso dolía más que el anterior. Llegué al albergue Monte Irago exhausta. Refugio de montaña auténtico, sencillo y áspero, donde el cansancio se transformó en alivio tras una de las etapas más duras hasta entonces.',
            location: {
                center: [-6.34243, 42.49111],
                zoom: 13.9,
                pitch: 47.53,
                bearing: -54.43,
                speed: 0.17,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 4: Foncebadón - Ponferrada',
            image: './assets/4.jpg',
            description: 'La etapa desciende desde la montaña leonesa hacia el Bierzo, con un tramo exigente para las rodillas por el impacto constante de la bajada. El paisaje cambia progresivamente y la sensación de altura se transforma en apertura de valle. Molinaseca aparece como uno de los puntos más bellos del recorrido, con sus casas de piedra y tejados de pizarra, antes de llegar a Ponferrada, donde la montaña queda atrás y el Camino entra en un nuevo paisaje. Ya en la ciudad, visitar el Castillo de los Templarios conecta el presente del Camino con su historia medieval. Tras el desgaste del descenso, el ambiente auténtico y local de El Bodegón fue un pequeño homenaje, de esos que recuerdan que el Camino también se celebra.',
            location: {
                center: [-6.59208, 42.54289],
                zoom: 13.19,
                pitch: 74.13,
                bearing: -96.37,
                speed: 0.21,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: '5',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 5: Ponferrada - Villafranca del Bierzo',
            image: './assets/5.jpg',
            description: 'La salida de Ponferrada es urbana y progresiva, dejando atrás el entorno más industrial para adentrarse poco a poco en un paisaje cada vez más abierto. A medida que avanza la etapa, el valle se llena de viñedos y campos de cultivo, con una estética casi toscana que marca el carácter vinícola del Bierzo. Villafranca del Bierzo aparece encajada entre montañas y vegetación abundante, atravesada por el río Burbia. Se percibe claramente el cambio hacia un paisaje más atlántico: el secano queda atrás y el verde gana protagonismo, anunciando la proximidad de Galicia.',
            location: {
                center: [-6.81159, 42.60501],
                zoom: 14,
                pitch: 82.50,
                bearing: -43.18,
                speed: 0.24,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 6: Villafranca del Bierzo - La Laguna',
            image: './assets/6.jpg',
            description: 'A medida que se abandona el valle del Bierzo y se gana altura, el paisaje se vuelve más húmedo y la niebla empieza a acompañar el ascenso hacia la montaña. La etapa gana exigencia técnica: subida constante, terreno irregular y tramos de piedra que obligan a medir cada paso. Decidí detenerme en La Laguna, una pequeña aldea de montaña situada ya en la frontera entre León y Galicia, antes del ascenso final a O Cebreiro. Un lugar sencillo, sin artificios, que refleja el carácter más rural y abrupto de este tramo del Camino.',
            location: {
                center: [-7.02213, 42.70137],
                zoom: 13.8,
                pitch: 63.50,
                bearing: -82.40,
                speed: 0.19,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Reflexión',
            alignment: 'center',
            hidden: false,
            title: '✋ Un alto en el camino',
            image: '',
            description: 'Más allá del esfuerzo físico, el Camino está sostenido por la generosidad de quienes lo habitan. En pueblos y aldeas, nadie niega agua, un baño o una palabra de ánimo. La hospitalidad y la gentileza forman parte de la experiencia desde el primer día. Ese espíritu local y genuino de cuidado hace que el recorrido, por duro que sea, nunca se sienta completamente solitario.',
            location: {
                center: [-7.02213, 42.70137],
                zoom: 13.8,
                pitch: 63.50,
                bearing: -82.40,
                speed: 0.19,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        
        {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 7: La Laguna - Triacastela',
            image: './assets/7.jpg',
            description: 'La etapa transcurre en altitud, entre praderas verdes y humedad constante. Tras alcanzar la zona de O Cebreiro y el Alto do Poio, el recorrido avanza entre pequeñas aldeas gallegas, con paisaje abierto, niebla intermitente y una sensación de montaña más suave pero persistente. La llegada a Triacastela marca el ecuador del viaje. Como muchos advertían, lo más duro queda en la primera semana. Con esta etapa superada, el cuerpo empieza a adaptarse y el esfuerzo deja de ser sorpresa: ya no es resistencia puntual, es constancia acumulada.',
            location: {
                center: [-7.24080, 42.75590],
                zoom: 13.20,
                pitch: 78.50,
                bearing: -90,
                speed: 0.19,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 8: Triacastela - Vilei, Barbadelo (Sarria)',
            image: './assets/8.jpg',
            description: 'La etapa avanza entre bosques húmedos y senderos gallegos estrechos, con pequeñas aldeas dispersas y tramos de tierra que invitan a caminar sin prisa. Es un recorrido más íntimo, de montaña suave y vegetación cerrada. Sarria marca un punto estratégico del Camino: desde aquí comienzan los últimos 100 kilómetros hasta Santiago, lo que incrementa notablemente la afluencia de peregrinos. El casco antiguo, elevado y atravesado por escaleras y callejuelas empedradas, conserva ese aire medieval de transición. Decidí continuar un poco más allá, hasta Vilei, una pequeña aldea rural adherida a Sarria, buscando un entorno más rural y tranquilo. ',
            location: {
                center: [-7.44439, 42.76914],
                zoom: 12.8,
                pitch: 75.75,
                bearing: -50.63,
                speed: 0.23,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 9: Vilei, Barbadelo (Sarria) - Portomarin',
            image: './assets/9.jpg',
            description: 'A partir de esta etapa el Camino cambia de escala. La afluencia de peregrinos aumenta notablemente y los senderos, entre bosques y pequeñas aldeas como Ferreiros, adquieren un ritmo más colectivo. Tras los primeros días de introspección y exigencia física, el contraste se hace evidente: el Camino se vuelve más transitado, casi masivo en algunos tramos. El recorrido alterna subidas y bajadas suaves hasta la llegada a Portomarín, reconstruido tras quedar el antiguo pueblo bajo las aguas del río Miño con la construcción del embalse de Belesar. La imponente iglesia-fortaleza domina la plaza principal y marca el carácter del lugar. En esta parte de Galicia, la gastronomía se convierte en protagonista: vieiras, pulpo y producto local de primera calidad acompañan el final de cada jornada.',
            location: {
                center: [-7.61817, 42.80745],
                zoom: 13.1,
                pitch: 77.20,
                bearing: -75.04,
                speed: 0.25,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 10: Portomarin - Palas de Rei',
            image: './assets/10.jpg',
            description: 'Etapa de perfil ondulado y ritmo irregular, con continuas subidas y bajadas cortas que generan un desgaste progresivo. No hay grandes puertos, pero el terreno rompepiernas exige constancia. Los senderos atraviesan pequeñas aldeas y tramos de pista que conectan núcleos dispersos, en un paisaje abierto que mantiene el verde gallego como telón de fondo. Palas de Rei funciona como punto de paso y regulación antes de entrar en uno de los tramos con mayor afluencia del Camino.',
            location: {
                center: [-7.86788, 42.87416],
                zoom: 12.65,
                pitch: 82.5,
                bearing: -60.60,
                speed: 0.22,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 11: Palas de Rei - Arzúa',
            image: './assets/11.jpg',
            description: 'La etapa mezcla senderos rurales y pequeñas subidas suaves entre bosques y aldeas dispersas. En el recorrido se atraviesa Melide, uno de los puntos más conocidos del Camino en Galicia, tradicional parada para degustar pulpo y recuperar fuerzas antes de continuar. El paisaje mantiene el verde constante hasta la llegada a Arzúa, tierra de queso con denominación de origen. La localidad, tranquila y funcional para el peregrino, marca la cercanía del destino final y el inicio de los últimos kilómetros hacia Santiago.',
            location: {
                center: [-8.16234, 42.92641],
                zoom: 12.4,
                pitch: 77.50,
                bearing: -99.60,
                speed: 0.21,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 12: Arzúa - O Pedrouzo',
            image: './assets/12.jpg',
            description: 'Etapa de transición, con perfil suave y kilómetros asumibles antes de la llegada final. El recorrido avanza entre senderos forestales y tramos ondulados sin grandes exigencias, permitiendo caminar con ritmo constante. A medida que se aproxima O Pedrouzo, el entorno adquiere un carácter más periurbano y aparecen referencias al aeropuerto de Santiago. No es una etapa especialmente escénica, pero sí estratégica: una parada clave para recargar fuerzas antes del sprint final hacia Santiago. Los nervios y la emoción comienzan a hacerse más presentes. La llegada, proyectada desde el primer día, deja de ser una idea lejana y empieza a materializarse.',
            location: {
                center: [-8.36350, 42.90425],
                zoom: 13.0,
                pitch: 77.50,
                bearing: -103.60,
                speed: 0.20,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 13: O Pedrouzo - Santiago de Compostela',
            image: './assets/13.jpg',
            description: 'Etapa final, ligera en lo físico y desbordante en lo emocional. El recorrido avanza entre zonas boscosas y tramos en descenso hasta aproximarse progresivamente al entorno urbano. A medida que se entra en Santiago, los caminos confluyen y el número de peregrinos aumenta: cada uno con su historia, su mochila y su propio recorrido interior. La llegada a la Catedral transforma el cansancio en euforia. La entrada a la plaza se vive como un momento épico: música de gaitas, abrazos, aplausos y esa sensación nítida de haber sido capaz. Los últimos metros se recorren casi sin sentirlos. Tras culminar el Camino, la ciudad se llena de vida peregrina. Es recomendable permanecer uno o dos días para asimilar la experiencia y recoger la Compostela en la Oficina del Peregrino. Santiago no es solo un destino; es el espacio donde el viaje cobra sentido.',
            location: {
                center: [-8.54939, 42.87993],
                zoom: 14.2,
                pitch: 89.5,
                bearing: -111,
                speed: 0.19,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'Final',
            alignment: 'fully',
            hidden: false,
            title: 'Reflexión Final',
            image: './assets/final.jpeg',
            description: 'El Camino marcó un antes y un después. Es una experiencia auténtica, exigente y transformadora que merece vivirse al menos una vez en la vida. Y quizás, ¿porqué no? repetirse; porque cada Camino es distinto y único.',
            location: {
                center: [-8.54939, 42.87993],
                zoom: 14.2,
                pitch: 89.5,
                bearing: -111,
                speed: 0.19,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
