//Integration wih DialogFlow Gerbatix agent

import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: '982c1debdcc64933ae56fe87202e7430'})

.textRequest('Hello!')
    .then((response) => {print("Prova effettuata con successo")})
    .catch((error) => {print("...Error...")})
    
