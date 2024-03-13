export class  HomePage {
    constructor() {
        this.closeModalButton = '.close > span'
        this.suscribeButtonModal = '¡Suscribite aquí! '
        this.searchInput = '.nav-actions > .search > .search-container > #search-form > #search-field-text'
        this.modal = '.modal-content'


    };

    closeModal(){
    cy.get(this.closeModalButton).click()
    };

    getSuscribeButton() {
        return cy.contains(this.suscribeButtonModal)
    };

    getModal () {
    return    cy.get(this.modal);
    };

    searchInputProduct() {
    return cy.get(this.searchInput)
        };



}