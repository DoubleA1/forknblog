import * as rest from './rest';

const getUserName = () => {
    let x = window.location.hostname.split('.');
    return x[0];
}

let url = 'https://api.github.com/users/'+getUserName()+'/repos';

export let getProjects = (queryParms) => rest.get(url, queryParms);

let url2 = 'https://api.github.com/repos/'+getUserName()+'/';

export let getProjectReadme = name => rest.getHTML(url2 + name + '/readme');

let url4 = 'https://api.github.com/repos/'+getUserName()+'/forknblog/contents/articles/';

export let getArticleTextByPath = id => rest.getHTML(url4+id);

let url3 = 'https://api.github.com/repos/'+getUserName()+'/forknblog/contents/articles';

export let getArticles = (queryParms) => rest.get(url3, queryParms);

let url5 = 'https://api.github.com/users/'+getUserName();

export let getUserInfo = () => rest.get(url5);

let url6 = 'https://api.github.com/repos/'+getUserName()+'/forknblog/contents/intro.md';

export let getHomeIntro = () => rest.getHTML(url6);

let url7 = 'https://api.github.com/repos/'+getUserName()+'/forknblog/contents/about.md';

export let getAbout = () => rest.getHTML(url7);


