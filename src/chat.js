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

      if(messages != "Dove si trova il cane? (abbaia)"){
        var yummyrow  = document.createElement("div");
        yummyrow.setAttribute("class", "rowsx");
        //creo l'immagine di YummY
        var yummyavatar = document.createElement("div");
        //creare una classe con gli stili dell'immagine
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
      }else{
        var yummyrow  = document.createElement("div");
        yummyrow.setAttribute("class", "rowsx");
        //creo l'immagine di YummY
        var yummyavatar = document.createElement("div");
        //creare una classe con gli stili dell'immagine
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
        
        var yummyBox = document.createElement("div");
        yummyBox.setAttribute("class", "container");

        var button1 = document.createElement("BUTTON");
        var button2 = document.createElement("BUTTON");
        var button3 = document.createElement("BUTTON");
        var button4 = document.createElement("BUTTON");

        button1.setAttribute("class", "dog");
        button2.setAttribute("class", "dog");
        button3.setAttribute("class", "dog");
        button4.setAttribute("class", "dog");

        var img1 = document.createElement("IMG");
        var img2 = document.createElement("IMG");
        var img3 = document.createElement("IMG");
        var img4 = document.createElement("IMG");

        img1.setAttribute("src", "images/DogPissing.png");
        img2.setAttribute("src", "images/DogEating.png");
        img3.setAttribute("src", "images/DogPlaying.png");
        img4.setAttribute("src", "images/DogPoo.png");

        img1.setAttribute("class", "dimension");
        img2.setAttribute("class", "dimension");
        img3.setAttribute("class", "dimension");
        img4.setAttribute("class", "dimension");

        button1.appendChild(img1);
        button2.appendChild(img2);
        button3.appendChild(img3);
        button4.appendChild(img4);

        yummyBox.appendChild(button1);
        yummyBox.appendChild(button2);
        yummyBox.appendChild(button3);
        yummyBox.appendChild(button4);

        this.appendChild(yummyBox);

      }
  }

  childRequest(text) {
    const promise = webApp.apiaiClient.textRequest(text);

    promise
        .then(this.handleResponse.bind(this))
        .catch(this.handleError);

  }

}

customElements.define('my-chat', Chat);
