export class ModelSpamer{
    constructor(){
        this.urlBase = 'https://api.telegram.org/bot';
        this.apiToken = localStorage.getItem('apiToken');
    }
    getOptions(){
        this.users = JSON.parse(localStorage.getItem('users') || '{}');
        return (Object.entries(this.users)).map(([key, value]) => {
            return{
                name : value, 
                id: key
            }
        });
    }
    
    get urlSendMsg(){
        return `${this.urlBase}${this.apiToken}/sendMessage?`;
    }

    sendMsg(receiver, text = 'Hello, user! This is test message.'){
        fetch(`${this.urlSendMsg}chat_id=${receiver}&text=${text}`);
    }
}