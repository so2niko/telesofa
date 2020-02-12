export class Publisher{
    constructor(){
        this.subscribes = {};
    }

    //Подписаться
    subscribe(eventName, func){
        if(!this.subscribes.hasOwnProperty(eventName)){//if subscribes has not event
            this.subscribes[eventName] = [];
        }

        this.subscribes[eventName].push(func);//add listener on custom event
    }

    //Отписка
    unsubscribe(eventName, func){
        if(this.subscribes.hasOwnProperty(eventName)){
            this.subscribes[eventName] = this.subscribes[eventName].filter(cback => cback != func);
        }
    }

    //Уведомление
    notify(eventName, data){
        if(this.subscribes.hasOwnProperty(eventName)){
           this.subscribes[eventName].forEach(func=> func(data));
        }
    }

    getMethods(){
        return {
            subscribe : this.subscribe.bind(this),
            unsubscribe : this.unsubscribe.bind(this),
            notify : this.notify.bind(this)
        }
    }
}