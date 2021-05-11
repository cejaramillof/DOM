# Web Components
[WebComponents.org](https://www.webcomponents.org/)
Son primitivos de bajo nivel que te permiten definir tus propios elementos HTML
Encapsulados de código, que puedan cohexistir entre ellos usando las APIS ya existentes del browser.

### Beneficios
- Reutilización (Don't Repeat Yourself) (You only have to build it once)
- Legibilidad
- Mantenibilidad (Cada componente puede ser escrito y probado de forma individual)
- Interoperabilidad (Frameworks/librerias no estan hechos para coexistir/ los web components, si)
- Consistencia (no tienes que crear los mismos componentes en diferentes frameworks o librerias)

## API's:
### HTML Templates:
- Etiqueta / Api
- <template></template>)
- No funciona en HTML, (se oculta) ya que retorna un document fragment, tienes que clonarlo (en js) para renderizarlo
- Es opcional (recomendado cuando un componente tendrá muchos nodos) mejora performance, al no generar nodos de forma individual si no única con un template (#document-fragment) clonando todos los elementos.

### Custom Elements:
- Definir nuestra etiqueta, para hacerla standar.
- Regla: Minimo 2 palabras separadas por guion. (para que no entre en conflicto con las del standar)
  - No es obligatorio seguirla, pero es lo más recomendable

### Shadow DOM:
- Encapsular codigo (Encapsulado perfecto, para que el código de adentro NO coexista con el de afuera)
- Beneficios con styles
- Video (html5) tiene shadow dom. (adentro tiene **shadow root** (controls))

### ES Modules:
import (html imports (deprecated) ahora ESModules)

## Ciclo de Vida de un Componente
Ligado al DOM, parte fundamental del critical rendering path.
1. **constructor()** (Inicializar componente // llenar data en memoria)
2. **connectedCallback()** (Ya existe en un nodo del DOM // Renderizar HTML/CSS)
3. .
   1. **attributeChangedCallback()** (escuchar cambios en los attributos de la etiqueta HTML)
   2. **disconnectedCallback()** (Remover el elemento del DOM)
- **adoptedCallback()** (No usual, para adoptar / heredar un componente en un iframe)(iframes problems: performance, seguridad, user experience)