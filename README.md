# Interactive Storytelling – Mi Camino de Santiago

## Descripción
Este proyecto consiste en un recorrido interactivo por el Camino de Santiago realizado a finales del verano de 2023. 
El itinerario se centra en el Camino Francés, con inicio en León y final en Santiago de Compostela, estructurado en 14 etapas que funcionan como capítulos narrativos. 
El desarrollo combina soporte geoespacial con un dataset propio para construir una experiencia de storytelling interactivo. 
Cada etapa se representa sobre el mapa y se complementa con información técnica y contextual mostrada mediante popups, permitiendo al usuario explorar tanto la dimensión geográfica como la experiencia del recorrido.
El objetivo es ofrecer una guía técnica y experiencial del viaje, proporcionando una visualización clara del trayecto y de las características de cada etapa.
La aplicación permite al usuario seguir el itinerario de forma progresiva, recorriendo el mapa mientras accede a información detallada sobre distancias, puntos clave y contenido visual asociado.

---

## Demo

Enlace a la versión publicada en GitHub Pages:

🔗 https://anaferarias.github.io/storytelling-mapbox-caminosantiago/

---

## Contexto del proyecto

Este proyecto constituye el Desafío 2 del programa académico del curso de Visualización de Datos de RTVE Instituto.
El desarrollo parte de una plantilla de storytelling disponible en GitHub y referenciada en el tutorial oficial del curso. A partir de esa base inicial, el proyecto ha sido adaptado y personalizado para representar un recorrido propio del Camino de Santiago, incorporando contenido narrativo, material visual y configuración geoespacial específica.
El alcance inicial del desafío consistía en implementar una visualización interactiva basada en mapas utilizando la estructura propuesta en la plantilla. Sin embargo, el proyecto ha evolucionado más allá de los requisitos mínimos, integrando modificaciones en la configuración, ajustes de estilo y reestructuración del repositorio para su despliegue público.

---

## Objetivos

El objetivo principal del proyecto fue integrar herramientas de representación geoespacial en una narrativa interactiva tipo storytelling, construyendo una visualización coherente y funcional del recorrido.

A nivel técnico, el trabajo permitió:

- Configurar y personalizar estilos de mapa en Mapbox Studio.
- Construir y depurar un dataset geoespacial en formato GeoJSON.
- Integrar datos, narrativa e imágenes en una estructura web funcional.
- Gestionar la arquitectura del repositorio y el despliegue en GitHub Pages.

Desde una perspectiva de aprendizaje, el proyecto supuso un reto al abordar simultáneamente aspectos de visualización de datos, estructura web y configuración técnica, consolidando bases en desarrollo front-end aplicado a datos geográficos.

---

## Tecnologías utilizadas

- Excel
- HTML5  
- CSS3  
- JavaScript  
- Mapbox Studio
- Location Helper Mapbox 
- GeoJSON.io
- Visual Studio Code
- Git & GitHub
- ChatGPT

---

## Estructura del repositorio

Desafio2-MiCaminoSantiago/
├── assets/ # Imágenes utilizadas en el storytelling
├── DataSet Propio_Camino.csv
├── index.html # Estructura principal de la aplicación
├── config.js # Configuración narrativa y geográfica
├── README.md
└── LICENSE


---

## Personalizaciones y mejoras realizadas

- Adaptación completa del contenido narrativo a una experiencia personal del Camino de Santiago.
- Creación de un dataset propio para la posterior importación en formato CSV a Mapbox. 
- Diseño de validaciones de datos y listas auxiliares para garantizar coherencia en etapas, distancias y puntos de interés.
- Obtención de las geolocalizaciones de todas los puntos de las etapas del recorrido mediante la herramienta Location Helper Mapbox.
- Generación de archivos en formato GeoJSON para pruebas iniciales y posterior integración definitiva del dataset en formato CSV en Mapbox.
- Importación y configuración de los datos en Mapbox Studio para su representación geoespacial.
- Modificación del estilo base de Mapbox para ajustarlo a una estética más acorde con el proyecto.
- Ajustes en la configuración de capas, popups y comportamiento del mapa en el storytelling.
- Ajuste de parámetros técnicos como zoom, bearing y pitch para mejorar la experiencia visual en cada etapa. 
- Edición y personalización del diseño de la página (HTML y CSS), incluyendo: header, footer, popups, chapters, imágenes, textos.
- Configuración avanzada del archivo `config.js` para la integración de imágenes propias y contenido textual personalizado en cada capítulo del storytelling.
- Creacion del repositorio y organización del proyecto en GitHub para su posterior despliegue en GitHub Pages.
- Optimización de rutas y organización de archivos para evitar errores de carga.


---

## Retos encontrados

- Problemas de actualización para la visualización de estilos personalizados en Mapbox.
- Gestión de rutas relativas y estructura de carpetas durante el despliegue.
- Coordinación entre narrativa, datos geográficos y comportamiento interactivo del mapa.
- Programación web avanzada para el diseño y la construcción de la página de storytelling. 

---

## Aprendizajes

- Comprensión práctica del funcionamiento de Mapbox Studio y su configuración.
- Trabajo con datos en formato GeoJSON y su integración en una aplicación web.
- Gestión básica de arquitectura de proyecto y buenas prácticas en repositorios.
- Resolución de problemas técnicos relacionados con rutas, despliegue y estilos.
- Desarrollo de criterio técnico al adaptar y ampliar una plantilla existente.

---


## Posibles mejoras futuras

- Optimización de la interacción en dispositivos móviles, adaptando el comportamiento de los popups para entornos táctiles.
- Mejora adicional del diseño responsive para garantizar una experiencia completamente homogénea en todos los tamaños de pantalla.


## Autoría

Proyecto desarrollado por Ana Fernández Arias.
