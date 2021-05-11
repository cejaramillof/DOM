const template = document.createElement('div');
template.innerHTML = `
  <style>
    p {
      color: blue;
    }
    .example {
      color: red;
    }
  </style>
  <p> Hello world 2 </p>
  <p class="example"> example </p>
`

class myElement extends HTMLElement {
  // all info in memory to later inject to DOM
  constructor() { // because extends of another class needs a constructor
    super(); // to get methods of HTMLElement class
    console.log('Hi');
    this.p = document.createElement('p');
  }

  connectedCallback() { // append the elements to DOM
    this.p.textContent = "Hola mundo!!";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}

customElements.define('my-element', myElement);