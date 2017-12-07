/* La parola let permette che AVAILABLE_LANGUAGES venga solamente vista all'
   interno del blocco racchiuso.
   funzione anonima: (function (ApiAiConstants))
                     (function (AVAILABLE_LANGUAGES).
   Vengono utilizzate due IIFE Immediately Invoked function expression,
   passandogli come parametri (ApiAiConstants || (ApiAiConstants = {})
   Se proviamo ad assegnare un valore ad una proprietà non definita creiamo di
  fatto questa proprietà inizializzandola con il valore assegnato:
  ApiAiConstants.VERSION ecc... */
//export

var ApiAiConstants;
(function (ApiAiConstants) {
    let AVAILABLE_LANGUAGES;
    (function (AVAILABLE_LANGUAGES) {
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["EN"] = "en"] = "EN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["DE"] = "de"] = "DE";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ES"] = "es"] = "ES";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT_BR"] = "pt-BR"] = "PT_BR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_HK"] = "zh-HK"] = "ZH_HK";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_CN"] = "zh-CN"] = "ZH_CN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_TW"] = "zh-TW"] = "ZH_TW";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["NL"] = "nl"] = "NL";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["FR"] = "fr"] = "FR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["IT"] = "it"] = "IT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["JA"] = "ja"] = "JA";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["KO"] = "ko"] = "KO";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT"] = "pt"] = "PT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["RU"] = "ru"] = "RU";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["UK"] = "uk"] = "UK";
    })(AVAILABLE_LANGUAGES = ApiAiConstants.AVAILABLE_LANGUAGES || (ApiAiConstants.AVAILABLE_LANGUAGES = {}));
    ApiAiConstants.VERSION = "2.0.0-beta.20";
    ApiAiConstants.DEFAULT_BASE_URL = "https://api.dialogflow.com/v1/";
    ApiAiConstants.DEFAULT_API_VERSION = "20150910";
    ApiAiConstants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.IT;
})(ApiAiConstants || (ApiAiConstants = {}));
