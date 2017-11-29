/* Sostituito App, con WebApp e alla variabile app -> webApp*/
class WebApp {
    constructor(name) {
        //Create an abstaction to map from all locations to the right path!

        // var options = JSON.parse("../copnfig/apiai.json")
        // console.log(options);
        this.name = name;

        this.options = {
            "accessToken": "c684ae05d13a4e3fa2a823b2ca86b9a1",
            "lang": "IT",
            //Non credo sia corretto il baseUrl inserito!
            "baseUrl": "https://console.dialogflow.com/api-client/#/editAgent/24667f0c-80d2-4871-8d13-62e10b4fc45e/"
        };

        this.apiaiClient = new ApiAiClient(this.options);
        // console.log(this.apiaiClient);
    }
}

/**Trigger the class instance */
var webApp = webApp || new WebApp("test");
