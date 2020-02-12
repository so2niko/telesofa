export class TemplateSpamer{
    static getSpamerHTML(){
        return `<div class="for-messages">
        <div class="input-group mt-2">
            <select class="custom-select users-select" aria-label="Select users">
                
            </select>
            <div class="input-group-append">
                <button class="btn btn-outline-primary btn-send-msg" type="button"><i class="far fa-paper-plane"></i> Send</button>
            </div>
        </div>
        <div class="form-group mt-2">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" autofocus></textarea>
        </div>
    </div>`;
    }

    static getOptions(users){
        return `<option selected value="To All">To All</option>
            ${users.map(us => `<option value="${us.id}">${us.name}</option>`).join('')}`;
    }
}