
let len = 0;
let timer = setInterval(()=>{

    $('.bar').css('width', len + '%');
    len ++ ;
    
    if(len >= 100){
        clearInterval(timer)
        $('.pageLoading').addClass('compete')
    }

}, 10)
