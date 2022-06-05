import { LitElement, html, css } from 'lit';

class BreweryApp extends LitElement {

    static get properties() {
        return {
            breweries: { type: Array }
        }
    }

    constructor() {
        super()
        this.breweries = []
    }

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        return html`
            <h1>KewlBrews</h1>

            <h2>Breweries</h2>

            <p>${this.breweries.length}</p>

            <ul>
                ${this.breweries.map(brewery => html `<li>${brewery.name}a</li>`)}
            </ul>
        `
    }
}

customElements.define('brewery-app', BreweryApp)
