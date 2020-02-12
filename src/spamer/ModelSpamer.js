export class ModelSpamer{
    constructor(){

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
}