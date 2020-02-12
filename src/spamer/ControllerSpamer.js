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
    }
}