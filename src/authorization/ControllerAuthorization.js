import { ViewAuthorization } from "./ViewAuthorization.js";
import { ModelAuthorization } from "./ModelAuthorization.js";

export class ControllerAuthorization{
    constructor({subscribe, notify}){
        this.notify = notify;
        this.subscribe = subscribe;
        this.model = new ModelAuthorization();
        this.view = new ViewAuthorization(this.model.getInitTokenInfo());
        this.bindListeners();
        this.subscribe('log-out', this.logOut.bind(this));
        //TODO: дописать логику галочки "Оставаться онлайн"
    }

    bindListeners(){
        this.view.addListeners(this.clickBtnWork.bind(this));//Передаю ссылку на метод как аргумент для обработки клика
    }

    clickBtnWork(){
        this.model.setTokenInfo(this.view.getInpValue());
        this.notify('log-in');
    }

    logOut(){
        this.model.clearTokenInfo();
        this.view.renderMenu(this.model.getInitTokenInfo());
        this.bindListeners();
    }

}