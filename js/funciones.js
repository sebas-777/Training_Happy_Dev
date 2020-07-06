jQuery(document).ready(function(){
   var enlance = jQuery("fa-bars").attr("href");
});

jQuery(".fa-bars").click(function(e){
   e.preventDefault();
 abrirmenu();
   

});

jQuery("header .container nav a").click(function(){
   var enlace = jQuery(this).attr("href");
   abrirmenu();

   jQuery("html,body").animation({
      "scrollTop" :jQuery(enlace).position().top

   },500)

});

function abrirmenu(){
   jQuery("header").addClass("open");
   jQuery("header .container .fa-bars.open i").addClass("fa-times");
   jQuery("header .container nav").addClass("open");
}