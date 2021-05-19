class templateElement extends HTMLElement {
  // all info in memory to later inject to DOM
  constructor() { // because extends of another class needs a constructor
    super(); // to get methods of HTMLElement class

    // shadowDom
    this.attachShadow({ mode: 'open' }); // open to see the internal content
    // when is 'closed' can't see internal content, or intectact with it.

    // Shadow DOM, Light DOM, Shadow ROOT (from this node to inside is ShadowDOM )

    this.title = this.getAttribute('title');
    this.paragraph = this.getAttribute('paragraph');
    this.img = this.getAttribute('img');
  }

  // new custom method to generate templates tag
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>
          Hello world! From template!
          <slot name="title"></slot>
          <br/>
          ${this.title}
        </h2>
        <div>
          <img src="${this.img}" />
          <p>
            <slot name="paragraph"></slot>
            <br/>
            ${this.paragraph}
          </p>
          <p>
            <slot></slot>
          </p>
        </div>
      </section>
      ${this.getStyles()}
    `
    return template;
  }

  // new custom method to add styles
  getStyles() {
    return `
      <style>
        h2 {
          color: orange
        }
        p {
          color: gray;
        }
      </style>
    `
  }

  // new custom method to render
  render() {
    // this.appendChild(this.getTemplate().content.cloneNode(true)); // true to make deep clone
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // true to make deep clone
  }

  // method inherit from HTMLElement
  connectedCallback() { // append the elements to DOM
    this.render();
  }
}

customElements.define('template-element', templateElement);