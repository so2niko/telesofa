import { TemplateMenu } from "./TemplateMenu.js";

export class ViewMenu{
    constructor(){
        this.main = document.querySelector('.main');
        this.templater = new TemplateMenu();
    }

    renderMenu(lstnrs){
        this.main.innerHTML = this.templater.getHTML();
        document.querySelector('.btn-messages').addEventListener('click', lstnrs.clickMessages);
        document.querySelector('.btn-send-msg').addEventListener('click', lstnrs.clickSendMsg);
        document.querySelector('.btn-log-out').addEventListener('click', lstnrs.clickLogOut);
    }

}