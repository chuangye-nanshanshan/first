window.onload = function(){
    //spa();
};
var spa = function(){
    document.querySelector('.nav').onclick = function(e){
        var currA = e.target;

        var href = currA.getAttribute('href');

        ajaxRender(href);

        history.pushState(null,null,href);

        return false;
    }
    window.onpopstate = function(){
        var pathname = location.pathname;
        var href = '';
        if(pathname.indexOf('index') > -1){
            href = 'index.html';
        }else if(pathname.indexOf('hot') > -1){
            href = 'hot.html';
        }else if(pathname.indexOf('order') > -1){
            href = 'order.html';
        }
        ajaxRender(href);
    };
};
var ajaxRender = function(href){
    var url = '';
    if(href.indexOf('index') > -1){
        url = 'index.json';
    }else if(href.indexOf('hot') > -1){
        url = 'hot.json';
    }else if(href.indexOf('order') > -1){
        url = 'order.json';
    }

    var xhr = new XMLHttpRequest();
    xhr.open('get',url);
    xhr.send(null);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var lis = document.querySelectorAll('.nav li');
                for(var i = 0 ; i < lis.length ; i++ ){
                    lis[i].classList.remove('now')
                }
                document.querySelector('[href="'+href+'"]').parentNode.classList.add('now');
                document.querySelector('.data').innerHTML = JSON.parse(xhr.responseText).result;
            }
        }
    }

}

