/// <reference types="cypress" />
import {PetStoreApiClient} from "../clients/petApiClient";
import {StoreApi} from "../clients/api-client";

describe('page', () => {
  it('works', async () => {
    const apiClient = new StoreApi()
    await apiClient.getInventory()
    const pet = new PetStoreApiClient()
    pet.deletePet(123)
    cy.log(pet)
    cy.visit('https://example.cypress.io')
  })
})
