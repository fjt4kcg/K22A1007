/*====================================================================
* main.js
=====================================================================*/


$(function(){
    $("#js-tab li").click(function(){
      $("#js-tab li").removeClass("active");
      $(this).addClass("active");
      var index = $(this).index();
      
      $(".tab-content").removeClass("active");
      $(".tab-content").eq(index).addClass("active");
    });
  });


$(function() {
  $(".form-bg").bind("keyup", function() {
  var inputObj = $(this);
  if (inputObj.val() !== "") {
  inputObj.css("background", "#daefee");
  } else {
  inputObj.css("background", "");
  }
  });
  });