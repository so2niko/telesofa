export class TemplateMessages{
    static getMsgs({time, name, text}){
        return `<tr>
                <td>${time}</td>
                <td>${name}</td>
                <td>${text}</td>
            </tr>`;
    }
    static getTableHead(){
        return `<table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Time</th>
            <th scope="col">Author</th>
            <th scope="col">Message</th>
            </tr>
        </thead>
        <tbody>`;
    }
    static getTableEnd(){
        return `</tbody></table>`;
    }
}