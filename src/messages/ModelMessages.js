export class ModelMessages{
    constructor(){
        this.updates = null;
        this.urlBase = 'https://api.telegram.org/bot';
        this.users = JSON.parse(localStorage.getItem('users') || '{}');

    }
    getUpdates(){
        this.apiToken = localStorage.getItem('apiToken');
        return fetch(this.urlUpd).then(d => d.json()).then(data => {
            this.updates = data;
            this.saveUsers();
        });
    }

    saveUsers(){
        this.updates.result.forEach(upd => {
            if(!this.users.hasOwnProperty(upd.message.chat.id)){
                this.users[upd.message.chat.id] = upd.message.chat.id > 0? upd.message.chat.first_name: upd.message.chat.title;
            }
        });
        localStorage.setItem('users', JSON.stringify(this.users));
    }
    get msgs(){
        console.log(this.updates);
        return this.updates.result.map(upd => {
            return {
                time : (new Date(upd.message.date * 1000)).toString().match(/\d{2}:\d{2}/)[0],
                name : upd.message.from.first_name,
                text : upd.message.text
            }
        }).reverse();
    }
    get urlUpd(){
        return `${this.urlBase}${this.apiToken}/getUpdates`;
    }
}