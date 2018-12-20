$(function(){
/*======
Use document ready or window load events
For example:
With jQuery: $(function() { ...code here... })
Or window.onload = function() { ...code here ...}
Or document.addEventListener('DOMContentLoaded', function(){ ...code here... }, false)
=======*/

window.onload = function() {
  var mySwiper = new Swiper('.swiper-container',{
    //Your options here:
    mode:'horizontal',
    loop: true
    //etc..
  });  
}

/*
Or with jQuery/Zepto
*/
$(function(){
  var mySwiper = $('.swiper-container').swiper({
    //Your options here:
    mode:'horizontal',
    loop: true
    //etc..
  });
})
});