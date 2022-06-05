import { LitElement, html, css } from 'lit';

class BreweryApp extends LitElement {

    static get properties() {
        return {
            loading: { type: Boolean },
            breweries: { type: Array }
        }
    }

    constructor() {
        super()
        this.breweries = []
    }

    connectedCallback() {
        super.connectedCallback()

        if (!this.breweries.length) {
            this.fetchBreweries()
        }
    }

    async fetchBreweries() {
        this.loading = true
        const response = await fetch('https://api.openbrewerydb.org/breweries?by_city=minneapolis')
        const jsonResponse = await response.json()
        this.breweries = jsonResponse
        this.loading = false
    }

    render() {
        if (this.loading) {
            return html`<p>loading...</p>`
        }

        const totalVisited = this.breweries.filter(b => b.visited).length
        const totalUnvisited = this.breweries.filter(b => !b.visited).length

        return html`
            <h1>KewlBrews</h1>

            <h2>Breweries</h2>

            <p>Visited ${totalVisited}, ${totalUnvisited} remaining</p>

            <ul>
                ${this.breweries.map(brewery => html `
                    <li>${brewery.name}
                        <button @click="${() => this.toggleVisitedStatus(brewery)}">
                            ${brewery.visited ? 'Mark un-visited' : 'Mark visited'}
                        </button>
                    </li>`)}
            </ul>
        `
    }

    toggleVisitedStatus(breweryToUpdate) {
        this.breweries = this.breweries.map(brewery => brewery === breweryToUpdate ?
            { ...brewery, visited: !brewery.visited } :
            brewery);
    }
}

customElements.define('brewery-app', BreweryApp)
