class Chat extends HTMLElement {
  constructor() {
        super();
        //Once templates initialized start API.ai interaction
        const promise = app.apiaiClient.eventRequest("Ciao Bimbo");
        //The element instance is bound to the promise
        promise
            .then(this.handleResponse.bind(this))
            .catch(this.handleError);
  }

  handleResponse(serverResponse) {

        //console.log("--> handleResponse");
        // console.log(serverResponse);
        // console.log(serverResponse.result.fulfillment.messages);
        this.appendMessages(serverResponse.result.fulfillment.messages)
        // var resp = JSON.parse(response);
        // console.log(resp);
  }

  handleError(serverError) {
      console.log(serverError);
  }

  appendMessages(messages) {
      /* NOTE: DEN
      console.log(messages);
      // console.log(x);
      // console.log(messages[0].speech);

      // Get the link element that references the templates.html file.
      var templateLink = document.getElementById('template-conversation');
      // Retrieve the loaded templates.
      var template = templateLink.import;
      this.elementBot = template.getElementById('conversation-bot');
      this.elementUser = template.getElementById('conversation-user');
      console.log(this);
      console.log(this.elementBot);

      for (let i = 0; i < messages.length; i++) {
          let msg = messages[i];
          switch (msg.type) {
              case 0:
                  var cloneBot = document.importNode(this.elementBot.content, true);
                  var dialog = document.createElement("p");
                  // console.log(msg.speech);
                  dialog.textContent = msg.speech;
                  cloneBot.querySelector('#bot').appendChild(dialog);
                  this.appendChild(cloneBot);
                  break;
              case 4:
                  //Need a map that holds the type of the req, the type of speaker (bot or user) and the possible elements to render
                  var cloneUser = document.importNode(this.elementUser.content, true);
                  var contentElement = msg.payload.element;
                  var buttons = msg.payload.buttons;
                  console.log(buttons);

                  for (let j = 0; j < buttons.length; j++) {
                      let dialog = document.createElement(contentElement);
                      dialog.textContent = buttons[j].text;
                      dialog.addEventListener('click', this.buttonListener.bind(this, dialog));
                      cloneUser.querySelector('#user').appendChild(dialog);
                  }
                  this.appendChild(cloneUser);

                  break;
              default:
                  console.log("unknown message type");
          }
      }
      */
  }


    homeRequest(text) {
        var requestOutput = app.apiaiClient.textRequest(text);
        console.log(requestOutput);
    }

    //da vedere a cosa attacca il listener: con handle handleTap
    buttonListener(dialog, cloneUser) {
        console.log(dialog);
        console.log(this);

        console.log(dialog.parentNode);

        var query = dialog.textContent;

        //Set the button as response
        dialog.parentNode.innerHTML = query;

        //Trigger API.ai interaction
        const promise = app.apiaiClient.textRequest(query);
        // //The element instance is bound to the promise
        promise
            .then(this.handleResponse.bind(this))
            .catch(this.handleError);

    }

}

customElements.define('chat', Chat);
