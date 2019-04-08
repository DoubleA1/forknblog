let fadeIn = (el) => {
  el.style.opacity = 0;

  let last = +new Date();
  let fadetick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(fadetick)) || setTimeout(fadetick, 16);
    }
  };

  fadetick();
}

export let loadElement = (element) => {
  let main = document.getElementsByClassName('main-wrapper')[0];
  while (main.firstChild) main.removeChild(main.firstChild);
  main.appendChild(element.el);
  fadeIn(element.el);
};

