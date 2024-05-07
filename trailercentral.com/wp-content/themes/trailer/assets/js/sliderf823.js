$ = jQuery;
$(document).ready(function () {
 $ = jQuery;
 $(document).on("click", ".banner .line span", function (e) {
  e.preventDefault();
  $(this).parent().parent().find("right").show();
  $(this).parent().parent().find("left").show();
  var index = $(this).index();
  $(this).parent().find("div").replaceWith("<span></span>");
  $(this).parent().parent().find(".banners .active").removeClass("active");
  $(this)
   .parent()
   .parent()
   .find(".bannerContainer:eq(" + index + ")")
   .addClass("active")
   .next()
   .addClass("next");
  $(this)
   .parent()
   .parent()
   .find(".bannerContainer:eq(" + index + ")")
   .prev()
   .addClass("prev");
  $(this).replaceWith("<div></div>");
 });

 $(document).on("click", ".traffic .line span", function (e) {
  $(this).parent().parent().find("right").show();
  $(this).parent().parent().find("left").show();
  e.preventDefault();
  var index = $(this).index();
  $(this).parent().find("div").replaceWith("<span></span>");
  $(this)
   .parent()
   .parent()
   .find(".traffic-wrapper.active")
   .removeClass("active");
  $(this)
   .parent()
   .parent()
   .find(".traffic-wrapper:eq(" + index + ")")
   .addClass("active")
   .next()
   .addClass("next");
  $(this)
   .parent()
   .parent()
   .find(".traffic-wrapper:eq(" + index + ")")
   .prev()
   .addClass("prev");
  $(this).replaceWith("<div></div>");
 });

 $(document).on("click", "left", function (e) {
  $(this).parent().find("right").show();
  $(this).parent().find("left").show();
  e.preventDefault();
  $(this).parent().find(".line div+span").click();
  if (!$(this).parent().find(".line div+span").length) $(this).hide();
  return false;
 });
 $(document).on("click", "right", function (e) {
  $(this).parent().find("right").show();
  $(this).parent().find("left").show();
  e.preventDefault();
  $(this).parent().find(".line div").prev("span").click();
  if (!$(this).parent().find(".line div").prev().length) $(this).hide();
  return false;
 });

 if ($(window).width() < 768) {
  $("li.menu-item-has-children").click(function (e) {
   if (e.target != this) return;
   e.preventDefault();
   $(this).toggleClass("active");
   return false;
  });
 }
});
