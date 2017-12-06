// La classe Request viene estesa da EventRequest e textRequest
//import { ApiAiRequestError } from "../Errors";
//import XhrRequest from "../XhrRequest";

/* Costruttore di Request che riceve come parametri ApiAiClient e options,
   Inizializza la richiesta con tutti i dati presenti nella classe ApiAiClient*/
class Request {
    constructor(apiAiClient, options) {
        this.apiAiClient = apiAiClient;
        this.options = options;
        this.uri = this.apiAiClient.getApiBaseUrl() + "query?v=" + this.apiAiClient.getApiVersion();
        this.requestMethod = XhrRequest.Method.POST;
        this.headers = {
            Authorization: "Bearer " + this.apiAiClient.getAccessToken(),
        };
        this.options.lang = this.apiAiClient.getApiLang();
        this.options.sessionId = this.apiAiClient.getSessionId();
    }
    /* Metodo che prende in ingresso una istanza della classe XhrRequest e
       gestisce il successo della richiesta.
       Promise.resolve(...)
       Restituise un oggetto Promise che è risolto con il valore dato.
       Se il valore é un thenable (es. ha un metodo then), la promise restituita
       "seguirà" quel thenable, usando il suo stato; altirmenti la promise
       restituita sarà soddisfatta con il valore.  Generalmente, se vuoi sapere
       se è una promise o no - Promise.resolve(value) invece e lavora con il
       valore restituisce come una promise */
    static handleSuccess(xhr) {
        return Promise.resolve(JSON.parse(xhr.responseText));
    }
    /* Metodo che prende in ingresso una istanza della classe XhrRequest e
       gestisce gli errori della richiesta*/
    static handleError(xhr) {
        let error = new ApiAiRequestError(null);
        try {
            const serverResponse = JSON.parse(xhr.responseText);
            if (serverResponse.status && serverResponse.status.errorDetails) {
                error = new ApiAiRequestError(serverResponse.status.errorDetails, serverResponse.status.code);
            }
            else {
                error = new ApiAiRequestError(xhr.statusText, xhr.status);
            }
        }
        catch (e) {
            error = new ApiAiRequestError(xhr.statusText, xhr.status);
        }
        return Promise.reject(error);
    }
    /* Ritorna la funzione della classe XhrRequest, .ajax(...), e "definisce" la
       parte then e catch della promise.

       Promise.prototype.catch(onRejected)

       Promise.prototype.then(onFulfilled, onRejected)
    */
    perform(overrideOptions = null) {
        const options = overrideOptions ? overrideOptions : this.options;
        return XhrRequest.ajax(this.requestMethod, this.uri, options, this.headers)
            .then(Request.handleSuccess.bind(this))
            .catch(Request.handleError.bind(this));
    }
}
//export default Request;
