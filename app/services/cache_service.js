import * as githubservice from '../services/github_service';
import lscache from './lscache';

export let returnCache = async(query, queryParms) => {

    var json = lscache.get(query);
    if(json) {
        return json;
    } else {
        //Get Single ID
        let id;
        let page;
        if(query.split('=')) {
          id = query.split('=')[1];
          page = query.split('=')[0];
        }
        switch (page) {
            case 'article': {
              json = await githubservice.getArticles(queryParms);
              json = JSON.parse(json);
              break;
            }
            case 'project': {
              let foo = await githubservice.getProjects(queryParms);
              json = JSON.parse(foo[0]);
              if(foo.length === 2) { 
                json.push({'link' : foo[1]})
              }
              
              break;
            }
            case 'single-article': {
              json = await githubservice.getArticleTextByPath(id);
              break;
            }
            case 'single-project': {
              json = await githubservice.getProjectReadme(id);
              break;
            }
            case 'intro': {
              json = await githubservice.getHomeIntro();
              break;
            }
            case 'about': {
              json = await githubservice.getAbout();
              break;
            }
            default: {
                json = await githubservice.getArticles(8);
                break;
            }
          }

          if (json) {
            lscache.set(query, json, 10);
          }
    }

    return json;
};