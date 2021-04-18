# DOM

## Critical Rendering Path (4 ó 5 steps)
DOM -> CSSOM -> (JS) -> Render Tree -> Layout -> Paint
Arboles (estructuras de datos que representan)

Document Object Model (DOM)
Representación del HTML
Estructura en forma de nodos (Cada hoja, o arista es un Nodo)
Modelo que puede ser modificado


CSS Object Model (CSSOM)


API (PUENTE)
DOM + Javascript = WebAPI (Existen más de 70 Web APIS)
DOM es una Web Api que nos permite conectar el HTML con Javascript

### Leer nodos
```javascript
document.getElementyById()
parent.getElementByTagName()
parent.getElementByClassName()

node.parentElement
```

más modernos, más flexibles, y mayores beneficios
```javascript
querySelector() // (only returns the first element, accept any css selector)
querySelectorAll() // (return NodeList) (length, forEach) (no map, some, filter, reduce, every) toArray  […nodeList] v8 is optimized to work with arrays (no nodeLists)
```

### Crear nodos (crear no significa aNadir al dom)
```javascript
document.createElement('h1') // elemento
document.createTextContent('text') // texto
document.createTextNode('text') // texto
```

### Agregar nodos (document or parentElement)
```javascript
parentElement.appendChild(node) // append to the end
parentElement.insertBefore(node, reference) // the reference need be direct children of baseNode
parentElement.insertAdjacentElement(position, node) // (beforebegin, afterbegin, beforeend, afterend)
```

más moderno:
```javascript
parentElement.append(nodes) // (no soportado IE11, puede agregar más de un nodo, puede agregar texto)
```

### Eliminar Nodo
```javascript
parentElement.removeChild()
document.replaceChild(newNode, nodeToReplace)
```

```javascript
document.remove() // (evolución de removeChild, lo hace por debajo) not supported by IE11
// like:
node.parentElement.removeChild(node)
```

### Nodos como strings (security issues XSS -> need be sanitized)
```javascript
node.outerHTML // leer como texto
node.innerHTML // retorna texto actual
node.innerHTML = newContent // escribir en el
```


## Propiedades
Son ventana para modificar lo que tiene un elemento en el DOM

Inspector de elementos, seleccionar item y $0 en consola para imprimirlo
$0.type, .className, .value

Propiedad vs Attribute (cambia de acuerdo al lenguaje de programación)
HTML:
Atributos son usados al inicio para inicializar el html
Las propiedades pueden cambiar en cualquier momento (cuando la página ya está viva - cambiando)

```javascript
// agregar 100 inputs

// worse performance
for (let i = 0; i < 100; i++) {
  const node = document.createElement('input')
  document.body.appendChild(node)
}

// Is better less operations modify DOM
// better performance
const nodes = [];
for (let i = 0; i < 100; i++) {
  const node = document.createElement('input')
  nodes.push(node)
}
document.body.append(…nodes)
```

## Eventos
Reaccionar a lo que sucede en el DOM
```javascript
const action = () => { };
node.addEventListener('eventInput', action)
// can create multiples eventListener, for the same EventInput
node.removeEventListener('eventInput', action) // need the reference to the action to remove it
```

### Propagación de Eventos
DOM renderiza Nodos de forma jerarquica, al disparar un evento, será propagado en cada uno de los padres **bubbling** hasta la raiz el document
```javascript
event.currentTarget.nodeName // get name of current node
event.stopPropagation(); // stop Event bubbling
```

### Delegación de eventos
Pattern: Events + How to be Propagate in DOM.
Delegar a un nodo, usualmente padre que se encargue de manejar todos los eventos en esa zona.
Used by (React, Angular, Svelte)



# Snowpack Tailwind

> ✨ Bootstrapped with Create Snowpack App (CSA).

Ready-to-go template to create awesome websites using Tailwind on top of Snowpack and autopublish to GitHub pages using GitHub Actions.

- [Quick start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)

## Quick start

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky
```

✨ Optional: [Enable autopublish](#q-how-do-i-enable-auto-publish-to-github-pages) to get your site deployed on GitHub Pages on every commit you push.

#### Optional install using Yarn:

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind --use-yarn

# Enable Prettier on git-commit
cd my-app
yarn install:husky
```

## Features

- Snowpack, of course.
- Tailwind.
- Prettier.
- Force prettier on git-commit.
- Autopublish on Github Pages.

### Q: How do I enable auto publish to GitHub Pages?

1. Update the value of `homepage` in `package.json`. It should look like `https://<your-username>.github.io/<your-repo-name>` (no trailing slash).
1. Push your changes into a new GitHub repository.
1. You should see an Action running on `https://github.com/<your-username>/<repo-name>/actions`
1. Make sure to [enable GitHub pages for your repo](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) and select the `gh-pages` branch
1. Give GH Pages some minutes, your site should be live on `https://<your-username>.github.io/<your-repo-name>`
1. Enjoy :)

### Q: How do I disable auto publish to GitHub Pages?

Remove the `.github/workflows/publish.yml` file.

### Q: How do I check my code syntax (Prettier) on git-commit?

Run `npm run install:husky`.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
