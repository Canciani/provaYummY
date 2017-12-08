class Chat extends HTMLElement {
  constructor() {
        super();
  }

  //Funzione che aggiunge alla chat il messaggio creato dalla serverResponse
  handleResponse(serverResponse) {
    //serverResponse.result.fulfillment.messages entra nel JSON
    this.appendYummyMessages(serverResponse.result.fulfillment.speech);
  }

  //funzione che manda gli errori al console.log
  handleError(serverError) {
      console.log(serverError);
  }

  appendChildMessages(messages) {

      console.log(messages);
      //creo html
      var childrow  = document.createElement("div");
      childrow.setAttribute("class", "rowdx");
      //creo il messaggio del bimbo
      var childmsg  = document.createElement("div");
      childmsg.setAttribute("class", "childchat");
      //creo il testo
      var childtext  = document.createElement("p");
      childtext.setAttribute("class", "paddingtesto");
      //append
      childtext.innerHTML = messages;
      childmsg.appendChild(childtext);
      childrow.appendChild(childmsg);

      console.log(childrow);
//PORCO IL CLERO FUNZIONA!
      this.appendChild(childrow);

      //errore da controllare il this.$.display
      //this.$.display.appendChild(childrow);
  }

  appendYummyMessages(messages) {
      //manda il messaggio al log
      console.log(messages);
      //creo html
      //creo la riga yummy;
      var yummyrow  = document.createElement("div");
      yummyrow.setAttribute("class", "rowsx");
      //creo l'immagine di YummY
      var yummyavatar = document.createElement("div");
      yummyavatar.setAttribute("style", "margin-left: 20px; margin-bottom: -19px;");
      var img = document.createElement("IMG");
      img.setAttribute("src", "images/HalfMonster.png");
      img.setAttribute("width", "60.48");
      img.setAttribute("height", "41.3");
      //creo il messaggio del bimbo
      var yummymsg  = document.createElement("div");
      yummymsg.setAttribute("class", "yummychat");
      var yummytext  = document.createElement("p");
      yummytext.setAttribute("class", "paddingtesto");

      //append
      yummytext.innerHTML = messages;
      yummymsg.appendChild(yummytext);
      yummyavatar.appendChild(img);
      yummyrow.appendChild(yummyavatar);
      yummyrow.appendChild(yummymsg);
      //errore da controllare
      //this.$.display.appendChild(yummyrow);
      console.log(yummyrow);
//PORCO IL CLERO FUNZIONA!
      this.appendChild(yummyrow);
  }

  childRequest(text) {
    const promise = webApp.apiaiClient.textRequest(text);

    promise
        .then(this.handleResponse.bind(this))
        .catch(this.handleError);

  }

}

customElements.define('my-chat', Chat);
