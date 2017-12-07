/* Sostituito App, con WebApp e alla variabile app -> webApp*/
class WebApp {
    constructor(name) {

        this.name = name;

        this.options = {
            "accessToken": "b0ae17fcc4264c5ca234291847fa3609",
            "lang": "IT",
            "baseUrl": "https://api.dialogflow.com/v1/"

        };

        this.apiaiClient = new ApiAiClient(this.options);

    }
}

var webApp = webApp || new WebApp("test");
