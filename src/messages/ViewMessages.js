import { TemplateMessages } from "./TemplateMessages.js";

export class ViewMessages{
    constructor(){
        this.templater = TemplateMessages;
    }
    renderMessages(messages){
        const msgStr = messages.map(m => this.templater.getMsgs(m)).join('');
        const resulStr = `${this.templater.getTableHead()}${msgStr}${this.templater.getTableEnd()}`;
        this.dom.innerHTML = resulStr;
    }

    linkDOMElements(){
        this.dom = document.querySelector('.for-messages');
    }
}