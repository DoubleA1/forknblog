import '@babel/polyfill';
import '../assets/css/main.css';
import * as helperservice from '../services/helper';
import * as cacheservice from '../services/cache_service';
import HomePage from '../components/homepage';
import MultPage from '../components/multpage';
import SinglePage from '../components/singlepage';
import AboutPage from '../components/about';


const menuClick = (menuID, isPopState) => {
  let m = document.getElementById('modal');
  if (m.classList.contains('show')) {
    return;
  }

  let id;
  let page;
  if (menuID.split('=')) {
    id = menuID.split('=')[1];
    page = menuID.split('=')[0];
  }

  switch (page) {
      case 'menu-articles': {
        let ma = new MultPage('article');
        helperservice.loadElement(ma);
        break;
      }
      case 'menu-projects': {
        let mp = new MultPage('project');
        helperservice.loadElement(mp);
        break;
      }
      case 'menu-about': {
        let c = new AboutPage();
        helperservice.loadElement(c);
        break;
      }
      case 'articleid': {
        cacheservice.returnCache('single-article='+ id).then(function(results) {
          if (!results.errorMessage) {
            let mainwrapper = document.
            getElementsByClassName('main-wrapper')[0];
            mainwrapper.innerHTML = '';
            mainwrapper.appendChild(new SinglePage('', results).el, '');
            document.getElementById('site-wrapper').scrollTop = 0;
          } else {
              console.log(results.errorMessage);
          }
        });
        break;
      }
      case 'projectid': {
        cacheservice.returnCache('single-project='+ id).then(function(results) {
          if (!results.errorMessage) {
            let mainwrapper = document.
            getElementsByClassName('main-wrapper')[0];
            mainwrapper.innerHTML = '';
            mainwrapper.appendChild(new SinglePage('', results).el, '');
            document.getElementById('site-wrapper').scrollTop = 0;
          } else {
              console.log(results.errorMessage);
          }
        });
        break;
      }

      default: {
        let hp = new HomePage();
        helperservice.loadElement(hp);
        break;
        }
    }

     // Remove selected css from menu item
     let menuitemselected = document.getElementsByClassName('menu-selected')[0];
     if (menuitemselected) {
         menuitemselected.classList.remove('menu-selected');
     }

     // Add selected css to menu item
     let menuitemnext = document.getElementById(menuID);
     if (menuitemnext) {
       if (menuitemnext.id == 'menu-home') {
        menuitemnext.lastChild.firstChild.classList.add('menu-selected');
       } else {
         menuitemnext.firstChild.firstChild.classList.add('menu-selected');
       }
     }

     if (menuID == 'init') {
      let menuitemnext = document.getElementById('menu-home');
      menuitemnext.lastChild.firstChild.classList.add('menu-selected');
    }

    if (isPopState) {
      return;
    }
    if (menuID !== 'init') {
      window.history.pushState(menuID, menuID, '#' + menuID);
    } else {
      window.history.pushState('menu-home', '', '#menu-home');
    }
};

const main = async () => {
  let menuitems = document.getElementsByClassName('menu-link');
  for (let mi of menuitems) {
    mi.addEventListener('click', (e) => {
    e.preventDefault();
    menuClick(mi.id);
  });
  }

  window.addEventListener('popstate', function(e) {
    if (window.location.hash) {
      menuClick(window.location.hash.substring(1,
        window.location.hash.length), true);
    }
  });


  if (window.location.hash) {
    menuClick(window.location.hash.substring(1,
      window.location.hash.length));
  } else {
    menuClick('init');
  }
};

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
      return this.reduce(function(previous, current) {
          let chunk;
          if (previous.length === 0 ||
                  previous[previous.length -1].length === chunkSize) {
              chunk = [];
              previous.push(chunk);
          } else {
              chunk = previous[previous.length -1];
          }
          chunk.push(current);
          return previous;
      }, []);
  },
});

main();
