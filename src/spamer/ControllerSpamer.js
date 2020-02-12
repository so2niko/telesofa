import { ViewSpamer } from "./ViewSpamer.js";
import { ModelSpamer } from "./ModelSpamer.js";

export class ControllerSpamer{
    constructor({subscribe}){
        this.subscribe = subscribe;
        this.view = new ViewSpamer();
        this.model = new ModelSpamer();
        this.subscribe('show-send-msg', this.renderSpamer.bind(this));
    }

    renderSpamer(){
        this.view.linkDOMElements();
        this.view.renderSpamer();
        this.view.renderOptions(this.model.getOptions());
        this.view.addListeners({sendMsg : this.handleClickSendMessage.bind(this)});
    }

    handleClickSendMessage(ev){
        console.log('click to send message');
        //get user from select menu(view)
        const receiver = this.view.getSelectMenu();
        //get data from textarea(view)
        const text = this.view.getText();
        //send data to address(model)
        this.model.sendMsg(receiver, text);
    }
}