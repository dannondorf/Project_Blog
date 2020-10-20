import {url} from "./environment.js";
import {populateHeaders, populateTableBody} from "./tableBuilder.js";
export let headers;

export function getData(url) {
    fetch(url)
        .then(request => request.json())
        .then(processData);
    }

 function processData(data) {
    headers = Object.keys(data[0]);  
    populateHeaders(headers);
    populateTableBody(data, headers);
}

export function deletePost(id) {
    fetch(url + 'posts/' + id, {
        method: 'DELETE'
    })
    .then(getData(url + 'posts'));
}

export function deleteComment(id) {
    fetch(url + 'comments/' + id, {
        method: 'DELETE'
    })
    .then(getData(url + 'comments'));
}