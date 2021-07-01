$(document).ready(function()
{

 $(".cont_secondaire").fadeIn(2000,function(){ $(".cont_secondaire button").show() });

//Si le button <liste d'information> a été cliqué, masquer le conteneur 1 et afficher le conteneur 2 >
 $("#btn1").click(function(){
       $(".cont_secondaire").fadeOut(1000,function(){ $(".cont_secondaire_2").fadeIn(1000,function(){});  });

 });
//Si le button <Actualité> a été cliqué, masquer le conteneur 1 et afficher le conteneur 3 >
 $("#btn2").click(function(){
       $(".cont_secondaire").fadeOut(1000,function(){ $(".cont_secondaire_3").fadeIn(1000,function(){});  });
 });
//si l élément <actualite> a été cliqué, masquer le conteneur 1 et afficher le conteneur 3
 $("#a_actualite").click(function(){
       $(".cont_secondaire").fadeOut(1000,function(){ $(".cont_secondaire_3").fadeIn(1000,function(){});  });
 });
//si l élément <formation> a été cliqué, masquer le conteneur 1 et afficher le conteneur 2
  $("#a_formation").click(function(){
       $(".cont_secondaire").fadeOut(1000,function(){ $(".cont_secondaire_2").fadeIn(1000,function(){}) });
  });

// ********* Hover pour les Sections (les formations) ********//
              /*---Section BDD ----*/
$(".cont_secondaire_2 section #img_bdd").hover(
  function()
  {
    $(".cont_secondaire_2 section #h5_bdd").show();
  }
  ,
  function()
  {
    $(".cont_secondaire_2 section #h5_bdd").hide();
  }
);
             /*---Section DPA ----*/
$(".cont_secondaire_2 section #img_dpa").hover(
  function()
  {
    $(".cont_secondaire_2 section #h5_dpa").show();
  }
  ,
  function()
  {
    $(".cont_secondaire_2 section #h5_dpa").hide();
  }
);

            /*---Section MARK ----*/
$(".cont_secondaire_2 section #img_mark").hover(
function()
{
$(".cont_secondaire_2 section #h5_mark").show();
}
,
function()
{
$(".cont_secondaire_2 section #h5_mark").hide();
}
);

        /*---Section COIFF ----*/
$(".cont_secondaire_2 section #img_coiff").hover(
function()
{
$(".cont_secondaire_2 section #h5_coiff").show();
}
,
function()
{
$(".cont_secondaire_2 section #h5_coiff").hide();
}
);

        /*---Section COUTR ----*/
$(".cont_secondaire_2 section #img_coutr").hover(
function()
{
$(".cont_secondaire_2 section #h5_coutr").show();
}
,
function()
{
$(".cont_secondaire_2 section #h5_coutr").hide();
}
);








});
