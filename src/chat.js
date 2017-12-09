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

      if(messages != "Dove si trova il cane? (abbaia)" && messages != "Ciao!" && messages != "Buongiorno!"){
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
      }else if(messages == "Dove si trova il cane? (abbaia)"){
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

        button1.setAttribute("onclick", this.clickButton('0'));
        /*button2.setAttribute("on-tap", this.clickButton('1'));
        button3.setAttribute("on-tap", this.clickButton('2'));
        button4.setAttribute("on-tap", this.clickButton('3'));*/
        //utton1.onclick = this.childRequest("in bagno");

        //button1.setAttribute("onclick", "clickButton();");
      /*  button2.onclick = function(){
          this.childRequest("davanti alla porta")
        }
        button3.onclick = function(){
          childRequest("in cucina");
        }
        button4.onclick = function(){
          childRequest("sul divano");
        }*/

        var img1 = document.createElement("IMG");
        var img2 = document.createElement("IMG");
        var img3 = document.createElement("IMG");
        var img4 = document.createElement("IMG");

        img1.setAttribute("src", "images/bath.png");
        img2.setAttribute("src", "images/door.png");
        img3.setAttribute("src", "images/kitchen.png");
        img4.setAttribute("src", "images/sofa.png");

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

      }else if(messages == "Ciao!" || messages == "Buongiorno!"){
        var yummyrow  = document.createElement("div");
        yummyrow.setAttribute("class", "rowsx");
        //creo l'immagine di YummY
        var yummyavatar = document.createElement("div");
        //creare una classe con gli stili dell'immagine
        yummyavatar.setAttribute("style", "margin-left: 20px; margin-bottom: -19px;");
        var img = document.createElement("IMG");
        img.setAttribute("src", "images/Hi.gif");
        img.setAttribute("width", "63.75");
        img.setAttribute("height", "54");
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
  }

  clickButton(type){
    switch(type) {
    case '0':
      this.childRequest("in bagno");
      break;
    case '1':
      this.childRequest("davanti alla porta");
      break;
    case '2':
      this.childRequest("in cucina");
      break;
    case '3':
      this.childRequest("sul divano");
    default:
      console.log("entrato");

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
