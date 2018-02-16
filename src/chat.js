class Chat extends HTMLElement {
  constructor() {
        super();
  }

  //Funzione che aggiunge alla chat il messaggio creato dalla serverResponse
  handleResponse(serverResponse) {
    //serverResponse.result.fulfillment.messages entra nel JSON
    this.appendYummyMessages(serverResponse.result.fulfillment.speech, serverResponse.result.action);
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

      this.scrollTop = this.scrollHeight;
/*
      if(messages == "il cane abbaia"){

        var yummyBox = document.createElement("div");
        yummyBox.setAttribute("class", "container");
        var button1 = document.createElement("BUTTON");
        button1.setAttribute("class", "dog");
        button1.addEventListener('click', this.playAudio.bind(this, button1));
        var img1 = document.createElement("IMG");
        img1.setAttribute("src", "images/dog6M.png");
        img1.setAttribute("class", "dimension");
        button1.appendChild(img1);
        yummyBox.appendChild(button1);
        this.appendChild(yummyBox);
        this.scrollTop = this.scrollHeight;


      }
*/
      //errore da controllare il this.$.display
      //this.$.display.appendChild(childrow);
  }
  //aggiunta l'azione per semplificare il codice
  appendYummyMessages(messages, actions) {
      //manda il messaggio al log
      console.log(messages);
      console.log(actions);
      //creo html
      //creo la riga yummy;
      if(actions == "Luoghi"){

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

        //Bagno
        var subtitleBox = document.createElement("div");
        subtitleBox.setAttribute("class", "container");

        var subtitleRow  = document.createElement("div");
        subtitleRow.setAttribute("class", "subtitle");
        subtitleRow.innerHTML = "Bagno"
        /*
        var subtitleText  = document.createElement("p");
        //subtitleText.setAttribute("class", "paddingSubtitle");

        subtitleText.innerHTML = "Piange"
        subtitleRow.appendChild(subtitleText);*/
        subtitleBox.appendChild(subtitleRow);

        //Portone
        var subtitleRow1  = document.createElement("div");
        subtitleRow1.setAttribute("class", "subtitle");
        subtitleRow1.innerHTML = "Portone"

        subtitleBox.appendChild(subtitleRow1);
        //cucina
        var subtitleRow2  = document.createElement("div");
        subtitleRow2.setAttribute("class", "subtitle");
        subtitleRow2.innerHTML = "Cucina"

        subtitleBox.appendChild(subtitleRow2);
        //sala
        var subtitleRow3  = document.createElement("div");
        subtitleRow3.setAttribute("class", "subtitle");
        subtitleRow3.innerHTML = "Sala"

        subtitleBox.appendChild(subtitleRow3);


        //button1.setAttribute("id", "bath");
        button1.addEventListener('click', this.clickButton.bind(this, '0', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));
        button2.addEventListener('click', this.clickButton.bind(this, '1', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));
        button3.addEventListener('click', this.clickButton.bind(this, '2', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));
        button4.addEventListener('click', this.clickButton.bind(this, '3', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));

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
        this.appendChild(subtitleBox);
        this.scrollTop = this.scrollHeight;

      }else if(actions == "ciao"){
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

        console.log(yummyrow);

        this.appendChild(yummyrow);
        this.scrollTop = this.scrollHeight;

      }else if(actions == "Giretto"){

          var yummyBox = document.createElement("div");
          yummyBox.setAttribute("class", "container");
          var button1 = document.createElement("BUTTON");
          button1.setAttribute("class", "dog");
          button1.addEventListener('click', this.playAudio.bind(this, button1));
          var img1 = document.createElement("IMG");
          img1.setAttribute("src", "images/dog6M.png");
          img1.setAttribute("class", "dimension");
          button1.appendChild(img1);
          yummyBox.appendChild(button1);
          this.appendChild(yummyBox);

          var yummyrow1  = document.createElement("div");
          yummyrow1.setAttribute("class", "rowsx");
          //creo l'immagine di YummY
          var yummyavatar1 = document.createElement("div");
          //creare una classe con gli stili dell'immagine
          yummyavatar1.setAttribute("style", "margin-left: 20px; margin-bottom: -19px;");
          var img1 = document.createElement("IMG");
          img1.setAttribute("src", "images/HalfMonster.png");
          img1.setAttribute("width", "60.48");
          img1.setAttribute("height", "41.3");
          //creo il messaggio del bimbo
          var yummymsg1  = document.createElement("div");
          yummymsg1.setAttribute("class", "yummychat");
          var yummytext1  = document.createElement("p");
          yummytext1.setAttribute("class", "paddingtesto");

          //append
          yummytext1.innerHTML = messages;
          yummymsg1.appendChild(yummytext1);
          yummyavatar1.appendChild(img1);
          yummyrow1.appendChild(yummyavatar1);
          yummyrow1.appendChild(yummymsg1);

          console.log(yummyrow1);
          this.appendChild(yummyrow1);
          this.scrollTop = this.scrollHeight;

        }else if(actions == "Premio"){

          var yummyBox = document.createElement("div");
          yummyBox.setAttribute("class", "container");

          var img1 = document.createElement("IMG");

          img1.setAttribute("src", "images/TrofeoUno.png");

          img1.setAttribute("class", "dimCong");

          yummyBox.appendChild(img1);
          this.appendChild(yummyBox);

          var yummyPath = document.createElement("div");
          yummyPath.setAttribute("class", "container");

          var img2 = document.createElement("IMG");

          img2.setAttribute("src", "images/Uno.png");

          img2.setAttribute("class", "path");

          yummyPath.appendChild(img2);

          this.appendChild(yummyPath);
          this.scrollTop = this.scrollHeight;
        }else if(actions == "Comportamento"){

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
          //this.$.display.appendChild(yummyrow);
          console.log(yummyrow);
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

          //Piange
          var subtitleBox = document.createElement("div");
          subtitleBox.setAttribute("class", "container");

          var subtitleRow  = document.createElement("div");
          subtitleRow.setAttribute("class", "subtitle");
          subtitleRow.innerHTML = "Piange"
          /*
          var subtitleText  = document.createElement("p");
          //subtitleText.setAttribute("class", "paddingSubtitle");

          subtitleText.innerHTML = "Piange"
          subtitleRow.appendChild(subtitleText);*/
          subtitleBox.appendChild(subtitleRow);

          //Bisogni
          var subtitleRow1  = document.createElement("div");
          subtitleRow1.setAttribute("class", "subtitle");
          subtitleRow1.innerHTML = "Bisogni"

          subtitleBox.appendChild(subtitleRow1);
          //scodinzola
          var subtitleRow2  = document.createElement("div");
          subtitleRow2.setAttribute("class", "subtitle");
          subtitleRow2.innerHTML = "Feste"

          subtitleBox.appendChild(subtitleRow2);
          //abbaia
          var subtitleRow3  = document.createElement("div");
          subtitleRow3.setAttribute("class", "subtitle");
          subtitleRow3.innerHTML = "Abbaia"

          subtitleBox.appendChild(subtitleRow3);

          //button1.setAttribute("id", "bath");
          button1.addEventListener('click', this.clickButtonBehaviour.bind(this, '0', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));
          button2.addEventListener('click', this.clickButtonBehaviour.bind(this, '1', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));
          button3.addEventListener('click', this.clickButtonBehaviour.bind(this, '2', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));
          button4.addEventListener('click', this.clickButtonBehaviour.bind(this, '3', button1, button2, button3, button4, subtitleRow, subtitleRow1, subtitleRow2, subtitleRow3));

          var img1 = document.createElement("IMG");
          var img2 = document.createElement("IMG");
          var img3 = document.createElement("IMG");
          var img4 = document.createElement("IMG");

          img1.setAttribute("src", "images/DogCry.png");
          img2.setAttribute("src", "images/DogPissing.png");
          img3.setAttribute("src", "images/DogPlaying.png");
          img4.setAttribute("src", "images/DogStanding.png");

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

          this.appendChild(subtitleBox);


          this.scrollTop = this.scrollHeight;
        }else{
          if(messages != "Dove si trova il cane? (abbaia)" && messages != "Ciao!" &&
           messages != "Buongiorno!" && messages != "WeWe!" && messages != "Buondì!"){
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

            console.log(yummyrow);
            this.appendChild(yummyrow);

            /* Aggiungere immagine punto di domanda!
            if(actions = "input.unknown"){
              var yummyBox = document.createElement("div");
              yummyBox.setAttribute("class", "container");

              var img1 = document.createElement("IMG");

              img1.setAttribute("src", "images/imageDubt.png");

              img1.setAttribute("class", "dubt");
            }*/
              /*
              yummyBox.appendChild(img1);
              this.appendChild(yummyBox);*/
              this.scrollTop = this.scrollHeight;
              console.log("this.scrollTop = this.scrollHeight; called");
          }
          //this.scrollTop = this.scrollHeight;
      }
      this.scrollTop = this.scrollHeight;
    }


  clickButton(type, bt1, bt2, bt3, bt4, sub1, sub2, sub3, sub4){
    switch(type) {
    case '0':
      this.childRequest("in bagno");
      bt1.disabled = true;
      bt2.remove();
      bt3.remove();
      bt4.remove();
      sub2.remove();
      sub3.remove();
      sub4.remove();
      break;
    case '1':
      this.childRequest("davanti alla porta");
      bt1.remove();
      bt2.disabled = true;
      bt3.remove();
      bt4.remove();
      sub1.remove();
      sub3.remove();
      sub4.remove();
      break;
    case '2':
      this.childRequest("in cucina");
      bt1.remove();
      bt2.remove();
      bt3.disabled = true;
      bt4.remove();
      sub1.remove();
      sub2.remove();
      sub4.remove();
      break;
    case '3':
      this.childRequest("sul divano");
      bt1.remove();
      bt2.remove();
      bt3.remove();
      sub1.remove();
      sub2.remove();
      sub3.remove();
      bt4.disabled = true;
    default:
      console.log("entrato");

    }
  }

  clickButtonBehaviour(type, bt1, bt2, bt3, bt4, sub1, sub2, sub3, sub4){
    switch(type) {
    case '0':
      this.childRequest("piange");
      bt1.disabled = true;
      sub2.remove();
      sub3.remove();
      sub4.remove();
      bt2.remove();
      bt3.remove();
      bt4.remove();
      break;
    case '1':
      this.childRequest("urina");
      bt1.remove();
      bt2.disabled = true;
      bt3.remove();
      bt4.remove();
      sub1.remove();
      sub3.remove();
      sub4.remove();
      break;
    case '2':
      this.childRequest("scodinzola");
      bt1.remove();
      bt2.remove();
      bt3.disabled = true;
      bt4.remove();
      sub1.remove();
      sub2.remove();
      sub4.remove();
      break;
    case '3':
      this.childRequest("abbaia");
      bt1.remove();
      bt2.remove();
      bt3.remove();
      sub1.remove();
      sub2.remove();
      sub3.remove();
      bt4.disabled = true;
    default:
      console.log("entrato");

    }
  }

  playAudio(button) {
    var audio = new Audio('images/dogsOutShort.mp3');
      audio.play();
      button.disabled = true;
      button.remove();

  }

  childRequest(text) {
    const promise = webApp.apiaiClient.textRequest(text);

    promise
        .then(this.handleResponse.bind(this))
        .catch(this.handleError);

  }

}

customElements.define('my-chat', Chat);
