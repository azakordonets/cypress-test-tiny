import StateGeneratorServiceApiDocumentation from 'dummy-test-generator-service'

export class StateGeneratorApiClient {
    constructor() {
        this.maxNumberOfRetries = 60
        this.intervalBetweenRetries = 200 // milliseconds
        let apiClient = StateGeneratorServiceApiDocumentation.ApiClient.instance
        apiClient.defaultHeaders = {
            Authorization: `SuperSecretToken`,
        }
        apiClient.requestAgent = `cypress-tests-123123`
        this.stateGeneratorApiClient = new StateGeneratorServiceApiDocumentation.StateGeneratorServiceApi(
            apiClient
        )
    }
}
