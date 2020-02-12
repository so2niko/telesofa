import { ModelMessages } from "./ModelMessages.js";
import { ViewMessages } from "./ViewMessages.js";

export class ControllerMessages{
    constructor({subscribe}){
        this.model = new ModelMessages();
        this.view = new ViewMessages();
        this.subscribe = subscribe;
        this.subscribe('show-messages', this.showMessages.bind(this));
        this.subscribe('show-send-msg', this.stopRender.bind(this));
        this.subscribe('log-out', this.stopRender.bind(this));
    }

    showMessages(){
        this.view.linkDOMElements();
        this.isShow = true;
        this.renderMessages();
        this.timer = setInterval(this.renderMessages.bind(this), 3000);
        
    }

    renderMessages(){
        if(this.isShow){
            this.model.getUpdates().then(_ => this.view.renderMessages(this.model.msgs));
        }        
    }

    stopRender(){
        this.isShow = false;
        clearInterval(this.timer);
    }
}
