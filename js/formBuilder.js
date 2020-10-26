import {
    headers,
    deletePost,
    deleteComment
} from "./dataUtilities.js";
import {
    editForm,
    tBody,
} from "./environment.js";

let shownTable = '';
editForm.style.display = "none";


export function setShownTable(tableName) {
    shownTable = tableName;
};


function populateForm(row) {
    buildForm();
    for (let i = 0; i < headers.length; i++) {
        document.forms[0].elements[headers[i]].value = row[i].textContent;
    }
};


tBody.addEventListener('click', (x) => {
    const button = x.target.textContent;
    if (button === 'Edit') {
        editForm.style.display = 'flex';
        document.querySelector('.greyGridTable').style.display = "none";
        document.querySelector('.blog-buttons').style.display = "none";
        populateForm(x.target.parentNode.parentNode.children);
    }
});


tBody.addEventListener('click', (y) => {
    const dButton = y.target.textContent;
    if (dButton === 'Delete') {
        if (shownTable === 'Posts') {
            deletePost(y.target.parentNode.parentNode.children[headers.indexOf('id')].textContent);
        } else {
            deleteComment(y.target.parentNode.parentNode.children[headers.indexOf('id')].textContent);
        }
    }
});



function buildForm() {
    const formContent = document.forms[0].querySelector('div');
    formContent.innerHTML = '';
    headers.forEach(header => {
        const editPost = document.createElement('label');
        const newContent = document.createTextNode(header);
        let postInputs = '';
        if (header === 'body') {
            postInputs = document.createElement('textarea');
            postInputs.setAttribute('cols', 30);
            postInputs.setAttribute('rows', 10);
        } else {
            postInputs = document.createElement('input')
        }
        postInputs.setAttribute('name', header);
        editPost.appendChild(newContent);
        formContent.appendChild(editPost);
        formContent.appendChild(postInputs);
    })
};