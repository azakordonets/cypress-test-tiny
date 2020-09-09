import SwaggerPetstore from 'swagger-petstore'
export class PetStoreApiClient {
    constructor() {
        let apiClient = SwaggerPetstore.ApiClient.instance
        apiClient.defaultHeaders = {
            Authorization: `Basic MySuperSecretToken`,
        }
        apiClient.basePath = "https://bla.com"
        apiClient.requestAgent = `cypress-tests-123123`
        this.petStoreApiClient = new SwaggerPetstore.PetApi(
            apiClient
        )
    }

    deletePet(id) {
        this.petStoreApiClient.deletePet(id)
    }
}