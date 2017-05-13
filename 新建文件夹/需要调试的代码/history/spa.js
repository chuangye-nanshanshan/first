window.onload = function(){

    document.querySelector('.nav').onclick = function(e){
        var a = e.target;


        var liList = document.querySelectorAll('.nav li');
        for(var i = 0 ; i < liList.length ; i ++){
            liList[i].classList.remove('now')
        }
        a.parentNode.classList.add('now');



        var href  = a.getAttribute('href');

        history.pushState(null,null,href);


        var ajaxUrl = '';
        if( href.indexOf('index') > -1){
            ajaxUrl = 'index.json';
        }else if( href.indexOf('hot') > -1){
            ajaxUrl = 'hot.json'
        }else if(  href.indexOf('order') > -1){
            ajaxUrl = 'order.json'
        }

        var xhr = new XMLHttpRequest();
        xhr.open('get',ajaxUrl);
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var data = JSON.parse(xhr.responseText);
                    document.querySelector('.data').innerHTML = data.result;
                }
            }
        }


        return false;
    }

};


