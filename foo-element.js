import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `foo-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FooElement extends HTMLElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'foo-element',
      },
    };
  }
}

window.customElements.define('foo-element', FooElement);
