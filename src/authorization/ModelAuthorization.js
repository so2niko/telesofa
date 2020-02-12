export class ModelAuthorization{
    constructor(){
        this.apiToken = localStorage.getItem('apiToken') || '';
        this.isOnline = localStorage.getItem('isOnline') == 'true'? true: false;
    }

    getInitTokenInfo(){
        return {
            token: this.apiToken, 
            isChecked: this.isOnline
        };
    }

    setTokenInfo({token, isChecked}){
        this.apiToken = token;
        this.isOnline = isChecked;
        localStorage.setItem('apiToken', this.apiToken);
        localStorage.setItem('isOnline', this.isOnline);
    }

    clearTokenInfo(){
        localStorage.setItem('apiToken', '');
        localStorage.setItem('isOnline', '');
        this.apiToken = '';
        this.isOnline = '';
    }


}