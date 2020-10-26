
import {getData} from "./dataUtilities.js";
import {url, navButtons} from "./environment.js";
import {setShownTable} from "./formBuilder.js";


getData(url + 'posts');


navButtons.addEventListener('click', (e) => {
    const target = e.target.textContent;
    setShownTable(target);
    if (target == 'Posts') {
        getData(url + 'posts');
    } else if (target == 'Comments') {
        getData(url + 'comments');
    } else {
        console.log('You clicked the NAV.');
    } 
});



