export class TemplateMenu{
    getHTML(){
        return `<ul class="nav nav-pills mb-2">
        <li class="nav-item btn-messages">
            <a class="nav-link active" href="#">Messages</a>
        </li>
        <li class="nav-item btn-send-msg">
            <a class="nav-link" href="#">Send</a>
        </li>
        <li class="nav-item ml-auto btn-log-out">
            <a class="nav-link" href="#"><i class="fas fa-skull"></i> LogOut</a>
        </li>
    </ul>
    <div class="for-messages">
    </div>`;
    }
}