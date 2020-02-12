export class TemplateAuthorization{
    getMenuHTML({token, isChecked}){
        return ` <div class="menu-wrapper d-flex vh-100 justify-content-center align-items-center">
        <div class="auth-menu">
            <div class="input-group mb-3">
                <input type="text" class="form-control inp-api" placeholder="API Token" aria-label="API Token" aria-describedby="button-addon2" value="${token}">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary btn-log" type="button" id="button-addon2">Work!</button>
                </div>
            </div>
            <label class="ml-3">
                <input type="checkbox" aria-label="Checkbox for following text input"  class="inp-mem-pass" ${isChecked? 'checked': ''}>
                Stay online
            </label>
        </div>
    </div>`;
    }
}