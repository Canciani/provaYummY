/* Constuctor(message) crea un'istanza della classe ApiAiBaseError che
   estende la classe Error, passandogli come parametro message, che è
   un parametro opzionale della classe Error, this si riferisce all'instanza
   della classe e viene chiamata la funzione stack (Export utilizzato per poter
   utilizzare import in altri files)*/
//export
class ApiAiBaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = new Error().stack;
    }
}

/* Estende la classe ApiAiBaseError creando un errore con i campi message e
   name posto come ApiAiClientConfigurationError*/
//export
class ApiAiClientConfigurationError extends ApiAiBaseError {
    constructor(message) {
        super(message);
        this.name = "ApiAiClientConfigurationError";
    }
}

/* Estende la classe ApiAiBaseError e crea una istanza a cui vengono passati
   i parametri message e code = null e vengono settati in aggiunta al parametro
   name = ApiAiRequestError*/
//export
class ApiAiRequestError extends ApiAiBaseError {
    constructor(message, code = null) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = "ApiAiRequestError";
    }
}
