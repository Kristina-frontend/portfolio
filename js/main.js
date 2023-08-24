const btn = document.querySelector(".swich");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  body.classList.toggle("dark");
})

$(document).ready(function () {
  $(".portfolios-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  })

  $(".next").click(function(){
    $(".portfolios-slider").slick("slickNext")
  })

  $(".prev").click(function(){
    $(".portfolios-slider").slick("slickPrev")
  })

  $(".portfolios-btn .btn").click(function(){
    $(".portfolios-btn .btn").removeClass("active");

    $(this).addClass("active");
  })

  // tabs
  $(".experices-list").on("click",".experices-item:not(.active)", function(){
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest(".experices-wrapper") 
      .find(".experices-tab")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  })

  // slider blog
  $(".blog-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  })

  // slider review
  $(".testimonials-sliders").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  })
});