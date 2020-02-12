import { TemplateSpamer } from "./TemplateSpamer.js";

export class ViewSpamer{
    constructor(){
        this.template = TemplateSpamer;
    }
    renderSpamer(){
        this.dom.innerHTML = this.template.getSpamerHTML();
        this.select = document.querySelector('.users-select');
    }

    linkDOMElements(){
        this.dom = document.querySelector('.for-messages');
    }

    renderOptions(users){
        this.select.innerHTML = this.template.getOptions(users);
    }
}