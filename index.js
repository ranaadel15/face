let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let rivers = document.getElementById('rivers');
let boat= document.getElementById('boat');
let Sastify = document.querySelector('.sastify');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4+ 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    rivers.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*3 + 'px';
    Sastify.style.fontSize= value + 'px';
    if(scrollY>=100){
        Sastify.style.fontSize = 100 + 'px';
        Sastify.style.position = 'fixed';
        if(scrollY>=484){
            Sastify.style.display = 'none';
        }else{
            Sastify.style.display = 'block';
        }
        if(scrollY >= 284){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';

        }else{document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';

        }
   }



}