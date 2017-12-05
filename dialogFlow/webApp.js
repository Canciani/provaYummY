/* Sostituito App, con WebApp e alla variabile app -> webApp*/
class WebApp {
    constructor(name) {
        //Create an abstaction to map from all locations to the right path!

        // var options = JSON.parse("../copnfig/apiai.json")
        // console.log(options);
        this.name = name;

        this.options = {
            "accessToken": "b0ae17fcc4264c5ca234291847fa3609",
            "lang": "IT",
            //Non credo sia corretto il baseUrl inserito!
            "baseUrl": "https://api.dialogflow.com/v1/"
        };

        this.apiaiClient = new ApiAiClient(this.options);
        // console.log(this.apiaiClient);
    }
}

/**Trigger the class instance */
var webApp = webApp || new WebApp("test");
