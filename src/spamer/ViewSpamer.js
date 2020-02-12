import { TemplateSpamer } from "./TemplateSpamer.js";

export class ViewSpamer{
    constructor(){
        this.template = TemplateSpamer;
    }
    renderSpamer(){
        this.dom.innerHTML = this.template.getSpamerHTML();
        this.select = document.querySelector('.users-select');
        this.btnSend = document.querySelector('.btn-send-msg-to');
        this.textArea = document.querySelector('.text-area-msg');
    }

    linkDOMElements(){
        this.dom = document.querySelector('.for-messages');
    }

    renderOptions(users){
        this.select.innerHTML = this.template.getOptions(users);
    }

    addListeners(listeners){
        this.btnSend.addEventListener('click', listeners.sendMsg);
    }

    getSelectMenu(){
        return this.select.value;
    }

    getText(){
        return this.textArea.value;
    }
}