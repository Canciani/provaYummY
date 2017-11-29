
import { ApiAiConstants } from "./ApiAiConstants";
import { ApiAiClientConfigurationError } from "./Errors";
import { EventRequest } from "./Request/EventRequest";
import TextRequest from "./Request/TextRequest";
export * from "./Interfaces";
export { ApiAiConstants } from "./ApiAiConstants";

/* Viene dichiarata la classe ApiAiClient, il costruttore riceve in ingresso
   come parametro options che dovrebbe contenere per un corretto funzionamento
   l'acess token a DialogFlow*/
export class ApiAiClient {
    constructor(options) {
        if (!options || !options.accessToken) {
            throw new ApiAiClientConfigurationError("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || ApiAiConstants.DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || ApiAiConstants.DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || ApiAiConstants.DEFAULT_BASE_URL;
        this.sessionId = options.sessionId || this.guid();
    }
    /*Metodo textRequest che crea una nuova TexRequest e la esegue tramite
      .perform().
      TextRequest estende la classe Request*/
    textRequest(query, options = {}) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        options.query = query;
        return new TextRequest(this, options).perform();
    }
    /*Metodo eventRequest che crea una nuovo EventRequest lo esegue tramite
      .perform().
      EventRequest estende la classe Request*/
    eventRequest(eventName, eventData = {}, options = {}) {
        if (!eventName) {
            throw new ApiAiClientConfigurationError("Event name can not be empty");
        }
        options.event = { name: eventName, data: eventData };
        return new EventRequest(this, options).perform();
    }
    // @todo: implement local tts request
    /*public ttsRequest(query) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        return new TTSRequest(this).makeTTSRequest(query);
    }*/
    /*public userEntitiesRequest(options: IRequestOptions = {}): UserEntitiesRequest {
        return new UserEntitiesRequest(this, options);
    }*/
    getAccessToken() {
        return this.accessToken;
    }
    getApiVersion() {
        return (this.apiVersion) ? this.apiVersion : ApiAiConstants.DEFAULT_API_VERSION;
    }
    getApiLang() {
        return (this.apiLang) ? this.apiLang : ApiAiConstants.DEFAULT_CLIENT_LANG;
    }
    getApiBaseUrl() {
        return (this.apiBaseUrl) ? this.apiBaseUrl : ApiAiConstants.DEFAULT_BASE_URL;
    }
    setSessionId(sessionId) {
        this.sessionId = sessionId;
    }
    getSessionId() {
        return this.sessionId;
    }
    /**
     * generates new random UUID
     * @returns {string}
     */
    guid() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    }
}
