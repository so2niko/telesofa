import { TemplateAuthorization } from "./TemplateAuthorization.js";
//special class for returning html code of component

export class ViewAuthorization{
    constructor(tokenInfo){
        this.template = new TemplateAuthorization();
        this.main = document.querySelector('.main');//dom link to div.main element
        this.renderMenu(tokenInfo);
        this.input = this.main.querySelector('.inp-api');//dom link to input:text element
        this.mem = this.main.querySelector('.inp-mem-pass');//dom link to input:checkbox element
    }

    //add listener:click on btn
    addListeners(func){//получаю ссылку на метод обработки клика на кнопку
        this.main.querySelector('.btn-log').addEventListener('click', func);
    }

    renderMenu(tokenInfo){
        this.main.innerHTML = this.template.getMenuHTML(tokenInfo);
    }

    //return 
    getInpValue(){
        return {
            token : this.input.value,
            isChecked : this.mem.checked
        }
    }
}