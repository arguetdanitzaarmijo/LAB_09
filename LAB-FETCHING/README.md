<div align="center">
  <a href="https://github.com/CharlesMangwa/react-data-fetching" target="\_parent">
    <img 
      alt="React Data Fetching logo"
      src="src/img/logo.png"
      width="900"
    />
  </a>
</div>

<br />

<div align="center">
  <strong>Declarative data fetching for React 🎣</strong>
  <br />
  <br />
  <a href="https://circleci.com/gh/CharlesMangwa/react-data-fetching">
    <img
      alt="build: CircleCI"
      src="https://circleci.com/gh/CharlesMangwa/react-data-fetching.svg?style=shield"
    />
  </a>
  <a href="https://coveralls.io/github/CharlesMangwa/react-data-fetching?branch=master">
    <img
      alt="coverage: Coveralls"
      src="https://coveralls.io/repos/github/CharlesMangwa/react-data-fetching/badge.svg?branch=master&t=v4mvo8"
    />
  </a>
  <a href="https://www.npmjs.com/package/react-data-fetching">
    <img
      alt="version: next"
      src="https://img.shields.io/badge/npm-next-orange.svg"
    />
  </a>
  <img 
    alt="gzip size"
    src="https://img.shields.io/badge/gzip%20size-7.58%20kB-brightgreen.svg"
  />
  <a href="https://github.com/prettier/prettier">
    <img
      alt="code style"
      src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"
    />
  </a>
  <img
    alt="module formats: umd, cjs, esm"
    src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-7020f5.svg"
  />
</div>

#

`react-data-fetching` proporciona una forma muy intuitiva de realizar cualquier llamada a la API REST sin problemas, a través de un único componente de React. También le ayuda a controlar los tiempos de espera, los estados de carga, el manejo de errores, el guardado de datos, el progreso de carga/descarga, etc. ¡Obtener datos y al mismo tiempo informar al usuario lo que está sucediendo nunca ha sido tan fácil!

El paquete es bastante liviano (~7 kB comprimidos con gzip) y se creó desde cero teniendo en cuenta las aplicaciones universales: puedes usarlo dondequiera que se esté renderizando React, lo que significa que funciona perfectamente con React (web) y React Native.
 
   ***En este read me veremos como trabajar con jsx luego con tsx expliacndo los cambios que se hace en ambos casos***

   --Iniciando con el getdata.jsx
```js
( async () => {

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomProductId = getRandomInt(1, 101);

  (async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${randomProductId}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al obtener los datos del producto:', error);
    }
  })();

})();

```
1. Funciones Asíncronas:
      *  Las funciones asíncronas son importantes en JavaScript debido a la naturaleza de un solo subproceso en el lenguaje.
      *  Permiten que el bucle de eventos de JavaScript maneje otras tareas mientras la función espera recursos externos, como obtener datos de una API, acceder a una base de datos o transmitir video desde una cámara web.
      *  En ell código, la función anónima async () => { ... } es una función asíncrona.
  2. Promesas:
      *  Una promesa en JavaScript representa una operación asíncrona que eventualmente se completará o fallará.
      *  Puede estar en uno de tres estados:
         *   Pendiente: Estado inicial, ni cumplida ni rechazada.
          *  Cumplida: La operación se completó con éxito.
          *  Rechazada: La operación falló.
     *   Las promesas se crean con un ejecutor que contiene las funciones resolve y reject. Cuando la operación se completa, se llama a una de estas funciones.
3. Async/Await:
     *   La expresión await se utiliza dentro de funciones asíncronas para esperar a que una promesa se resuelva o se rechace.
    *    Cuando se encuentra un await, la ejecución de la función se pausa hasta que la promesa se resuelva o se rechace.
    *    Si la promesa se resuelve, el valor de la expresión await es el valor cumplido de la promesa.
    *    Si la promesa se rechaza, la expresión await arroja el valor rechazado.
    *    El uso de await permite desenrollar promesas y simplificar el manejo de código asíncrono.
  
 ***Ahora veremos como se trataba esa funcion con tsx***
```ts
async function fetchData() {
  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomProductId = getRandomInt(1, 101);

  try {
    const response = await fetch(`https://dummyjson.com/products/${randomProductId}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al obtener los datos del producto:', error);
  }
}

fetchData();

```
Practicamente podemos ver que el codigo realiza lo mismo que el anterior pero al ser codigo typeScript este requiere que se adapte a su propio lenguaje.
 
 ***En que se diferencian***

Ambos códigos logran el mismo objetivo: realizar una solicitud a una API y obtener datos.
El primer código utiliza una función anónima, mientras que el segundo utiliza una función nombrada.
El uso de async/await hace que el código sea más legible y fácil de entender.

   1. Ahora analizaremos para el componente App
```js
import './App.css'
import './async/services/getData'
import { Card } from './ui/components/Card'
import  './Card.css';

function App() {

  return (
    <>
      <h2>LAB DATA - FETCHING</h2>
      <Card/> 
    </>
  )
}

export default App

```
1. Importación de Archivos CSS:
   * Las líneas import './App.css' y import './Card.css' importan archivos CSS en la aplicación.
    * Estos archivos contienen estilos que se aplicarán a los componentes en la interfaz.
2. Importación de Componentes:
    * La línea import { Card } from './ui/components/Card' importa el componente Card desde el archivo Card.js ubicado en la carpeta ui/components.
    * El componente Card se utiliza más adelante en la función App.
3. Función App:
    * La función App es un componente de nivel superior en la aplicación.
    * Renderiza un encabezado <h2> con el texto LAB DATA - FETCHING.
    * Luego, renderiza el componente Card.
  

***Este codigo se diferencia por:***

Utiliza una función anónima llamada App.
Renderiza el componente Card dentro de la función.
El componente Card se encuentra fuera de la función anónima.
  
***Ahora veremos  los cambios que se realizan para tsx***

```ts
import React from 'react';
import './App.css';
import { Card } from './ui/components/Card';
import './Card.css';

function App(): JSX.Element {
  return (
    <>
      <h2>LAB DATA - FETCHING</h2>
      <Card />
    </>
  );
}

export default App;

```
 ***En cambio este codigo:***

Define una función nombrada llamada App.
Renderiza el componente Card dentro de la función nombrada.
El componente Card se encuentra dentro de la función nombrada.


***Bien ahora trabajaremos  en el componente Card de igual amanera que los anteriores casos***

```js
import  {useEffect, useState } from "react"

export const  Card = ( ) => {

    const [product, setProduct] = useState ({ });

 useEffect ( ( )=> {
         fetch ( `https://dummyjson.com/products/2`)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    },[ ]);
    return (
        <div className="card-container">
            <p>{product.title}</p>
            <p>Descripcion: {product.description} </p>
            <p>USD$: {product.price}</p>
        </div>

    )
};

```
***Explicando un poco de lo que realiza en codigo***
1. Importación de Hooks:
     * La línea import { useEffect, useState } from "react" importa los hooks useEffect y useState desde la biblioteca React.
    * Estos hooks se utilizan para manejar el estado y los efectos secundarios en componentes funcionales.
2. Componente Card:
    * El componente Card es una función que devuelve elementos JSX (interfaz de usuario).
    * Utiliza el hook useState para definir una variable de estado llamada product con un valor inicial vacío ({}).
    * Utiliza el hook useEffect para realizar una solicitud a la URL 'https://dummyjson.com/products/2' cuando el componente se monta.
    * Cuando la respuesta se completa, se actualiza el estado con los datos obtenidos.
    * Renderiza un contenedor con los detalles del producto, como el título, la descripción y el precio.

***Ahora veremos el codigo del componente Card tsx y las modifocaciones que se realizan en este lenguaje***
```ts
import React, { useEffect, useState } from "react";

interface Product {
  title: string;
  description: string;
  price: string;
}

export const Card: React.FC = () => {
  const [product, setProduct] = useState<Product>({ title: "", description: "", price: "" });

  useEffect(() => {
    fetch(`https://dummyjson.com/products/2`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="card-container">
      <p>{product.title}</p>
      <p>Descripcion: {product.description}</p>
      <p>USD$: {product.price}</p>
    </div>
  );
};
```
En resumen, ambos fragmentos de código logran lo mismo: obtienen datos de productos y muestran los detalles en un componente llamado Card. La diferencia radica en cómo se definen las propiedades del producto y cómo se tipifican utilizando la interfaz en el segundo fragmento de código.



##  Impotancia

1. Interacción con Servidores y APIs:
    El data fetching permite que las aplicaciones se comuniquen con servidores y fuentes de datos externas, como APIs (Interfaces de Programación de Aplicaciones).
    Las APIs proporcionan acceso a recursos como datos, imágenes, autenticación y más.
2. Actualización de Contenido Dinámico:
    Las aplicaciones modernas requieren contenido dinámico que se actualice en tiempo real.
    El data fetching permite cargar datos nuevos o actualizados sin necesidad de recargar toda la página.
3. Actualización de Contenido Dinámico:
    Las aplicaciones modernas requieren contenido dinámico que se actualice en tiempo real.
    El data fetching permite cargar datos nuevos o actualizados sin necesidad de recargar toda la página.
4. Manejo de Errores y Excepciones:
    El data fetching también implica manejar errores y excepciones, como respuestas incorrectas del servidor o problemas de conectividad.
    El manejo adecuado de errores garantiza una experiencia de usuario más robusta.
5.  Optimización de Rendimiento:
    El data fetching puede optimizarse utilizando técnicas como el almacenamiento en caché, la paginación y la precarga de datos.
    Estas estrategias mejoran el rendimiento general de la aplicación.

En resumen, el data fetching es esencial para crear aplicaciones web interactivas, dinámicas y eficientes. Permite que las aplicaciones obtengan y actualicen datos de manera efectiva, lo que mejora la experiencia del usuario y la funcionalidad de la aplicación


## About

`react-data-fetching` is currently developed and maintained by yours truly, [@Charles_Mangwa](https://twitter.com/Charles_Mangwa). Feel free to get in touch if you want to contribute!


