jQuery("#wowslider-container").wowSlider({effect:"rotate",prev:"",next:"",duration:20*100,delay:20*100,width:580,height:212,autoPlay:true,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"slide",controls:true,logo:"",images:0});
$("document").ready(function()

{

    // $(".content h2").css ("color","yellow");


    $("document").scroll(function(){

      var scroll =$("this").scrollTop();
      var dist=$(".navigation").position();
      if (scroll>dist)
      {
        $(".dist").css({"position":"fixed","top","0"});

      }
      else{
        $(".dist").css({ "position":"static","top","auto" });
        }



    });


});