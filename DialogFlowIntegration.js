//Integration wih DialogFlow Gerbatix agent

import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: 'bea666998ce9493db5f3c1099a4c97d8'})

.textRequest('Hello!')
    .then((response) => {print("Prova effettuata con successo")})
    .catch((error) => {print("...Error...")})
