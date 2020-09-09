/// <reference types="cypress" />
import {PetStoreApiClient} from "../clients/petApiClient";
import {StateGeneratorApiClient} from "../clients/testStateGeneratorClient";

describe('page', () => {
  it('works', async () => {
    this.apiClient = new StateGeneratorApiClient()
    await this.apiClient.createApplication({})
    const pet = new PetStoreApiClient()
    pet.deletePet(123)
    cy.log(pet)
    cy.visit('https://example.cypress.io')
  })
})
