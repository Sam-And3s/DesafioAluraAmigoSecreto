<h1 align="center" class="InicioReadme">Desafio del Amigo Secreto</h1
                                                                   
![Badge terminado](https://img.shields.io/badge/STATUS-TERMINADO-green)

<p align="center">
  <img src="https://github.com/user-attachments/assets/af78aa75-7880-4af9-9c29-973637db1c2a">
</p>

## Índice

* [Inicio](#InicioReadme)
* [Índice](#Índice)
* [Descripción del proyecto](#descripción-del-proyecto)
* [Funcionalidades del proyecto](#funcionalidades-del-proyecto)
* [Acceso al proyecto](#acceso-proyecto)
* [Tecnologías utilizadas](#tecnologías-utilizadas)

## Descripción del proyecto
<p class="descripción-del-proyecto">
  El proyecto está compuesto por Front-End y Back-End, en el Front se le pide al usuario que ingrese, uno por uno, el nombre de los amigos, cada amigo que ingrese se va a ver en una
  lista justo debajo del input, cuando el usuario acabe de ingresar el nombre de todos sus amigos, debe dar al botón "Sortear amigo" y por medio de una funcion, le aparecerá de forma       pseudo-aleatoria el nombre de un amigo de los que ingresó.
  
  Este proyecto nace a partir de los desafios que emplea Alura para evaluar el progreso y las habilidades de los que hacen parte de los cursos. En este caso, se busca evaluar las
  habilidades con el lenguaje de programación JavaScript, donde se usa la logica de progamación, se crean funciones, se usa Git y GitHub para trabajar desde un repositorio local,
  entre otras.
</p>

## :hammer:Funcionalidades del proyecto

- `Funcion agregarAmigo` : Al dar clic en el botón "añadir", agrega a un array el nombre dispuesto en el input, tambien ejecuta: `Funcion mostrarAmigos` y `Funcion limpiarCaja`.
- `Funcion mostrarAmigos` : Por cada elemento en el array crea una nueva etiqueta li con el respectivo elemento de la lista.
- `Funcion sortearAmigo` : Al dar clic en el botón "Sortear amigo", primero verifica que el input no esté vacio, luego genera un indice pseudo-aleatorio del array y muestra el elemento que tenga este indice.
- `Funcion limpiarCaja` : Al dar clic en el botón "añadir" se limpia el input automaticamente.

## 📂 Acceso al proyecto

El código fuente de este proyecto está disponible en este repositorio. Puedes clonarlo o descargarlo para ejecutarlo localmente en tu equipo.

### 🔽 Descargar y ejecutar el proyecto

### Opción 1:  Clonar el repositorio. 
Si tienes **Git** instalado, puedes clonar el repositorio con el siguiente comando:  
```sh 
git clone https://github.com/Sam-And3s/DesafioAluraAmigoSecreto.git
```
### Opción 2: descargar el ZIP desde la opción "Code" en GitHub y extraerlo en tu equipo.

1. Abre **Visual Studio Code**.  
2. En el menú superior, selecciona **Archivo → Abrir carpeta...**.  
3. Busca y selecciona la carpeta del proyecto.

## ⚙️ Tecnologías utilizadas

- html.
- css.
- JavaScript.
