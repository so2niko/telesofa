import { ViewMenu } from "./ViewMenu.js";

export class ControllerMenu{
    constructor({notify, subscribe}){
        this.subscribe = subscribe;
        this.notify = notify;
        this.view = new ViewMenu();
        this.subscribe('log-in', this.init.bind(this));
    }

    init(){
        this.view.renderMenu(this.getListeners());
        this.notify('show-messages');
    }

    clickMessages(){
        this.notify('show-messages');
        console.log('show-messages');
    }

    clickSendMsg(){
        this.notify('show-send-msg');
        console.log('show-send-msg');
    }

    clickLogOut(){
        this.notify('log-out');
        console.log('log-out');
    }

    getListeners(){
        return {
            clickMessages : this.clickMessages.bind(this),
            clickSendMsg : this.clickSendMsg.bind(this),
            clickLogOut : this.clickLogOut.bind(this)
        }
    }
}