#A la gran API Salúd
La API que nos proporciona Google para ver el mundo no nos muestra la misma información a todos y todas. Google Map varía dependiendo de nuestro idioma, de nuestra ubicación geográfica y dependiendo de quiénes seamos. Un argentino vería “Malvinas”, pero la misma consulta para un inglés, sería “Falkland Islands” y para una persona que vive en Estados Unidos sería “Falkland Islands (Islas Malvinas)”.
Ofrecer servicios globales significa tener que lidiar también con los conflictos políticos y bélicos de cada región. 
Argentina y Gran Bretaña tienen conflictos de soberanía sobre las islas, que en su punto más alto significó una guerra con cientos de muertos, por lo que no sería aceptable para un Argentino ver el nombre que le pusieron unos usurpadores a su isla y de la misma forma no sería aceptable para un inglés, ver ahí el nombre que le pusieron quienes mataron a sus compatriotas. 
Por eso, hay un criterio político en la forma en que se nos muestra la información, un criterio que también los desarrolladores podemos definir desde nuestro código. 

#A codear
Si bien la API mostrará la información dependiendo de lo que expliqué, también nosotros podemos decidir cómo queremos que se muestre.
Si queremos que la información se muestre en español podremos colocar language=es y para que se lea “Islas Malvinas” debemos mostrarlo desde la perspectiva de un argentino colocando region=AR: 

<script async src="https://maps.googleapis.com/maps/api/js?key=API_KEY&region=AR&language=es&callback=initMap"> </script>

Aparte de estas consultas a la API hay muchas otras, muy interesante que podrías consultar en la documentación de la API de google map. 
