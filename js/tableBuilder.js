import {tHead, tBody} from "/environment.js";



export function populateHeaders(headers) {
    tHead.innerHTML = '';
    headers.forEach(header => {
        tHead.innerHTML += `<th>${header.toUpperCase()}</th>`;
    })
    tHead.innerHTML += '<th>ACTIONS</th>';
}

export function populateTableBody(data, headers) {
    let final = ' ';
    data.forEach(row => {
        let output = '';
        headers.forEach(header => {
            output += `<td>${row[header]}</td>`;
        })
        final += `<tr>${output}<td><button class="form-buttons">Edit</button><button class="form-buttons">Delete</button></td></tr>`;
    })
    tBody.innerHTML = final;
    
 }