function render(percent) {
  var progress = document.querySelector('.progress-bar')
  if(progress) {
    progress.style.width = Math.min((parseInt(percent) || ((parseInt(progress.style.width) || 0) + 10)), 100) + '%';
  }
  if(parseInt(progress && progress.style.width || percent) == 100) {
      setTimeout(function(){
          ['.render-laoding'].forEach(function(className) {
              var dom = document.querySelector(className);
              if (dom) {
                  dom.remove();
              }
          })
      }, 10000)
  }
}

render('10%');

document.addEventListener('readystatechange', function(e) {
  switch(document.readyState) {
    case 'interactive': render('25%'); break;
    case 'complete': render('75%'); break;
  }
});

document.addEventListener('DOMContentLoaded', function(e) {
  render('50%')
});

window.addEventListener('load', function(e) {
  render('100%')
});
