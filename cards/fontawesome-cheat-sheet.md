# Font Awesome Icon Management

Instalacion de iconos en React:
[Guía oficial](https://docs.fontawesome.com/web/use-with/react)
```Node
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```
Cómo utilizar los iconos en React: 
[Referencia](https://docs.fontawesome.com/web/use-with/react)

```React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon={faStar} />
```