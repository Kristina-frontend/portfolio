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
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 591,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
  })

  $(".next").click(function () {
    $(".portfolios-slider").slick("slickNext")
  })

  $(".prev").click(function () {
    $(".portfolios-slider").slick("slickPrev")
  })

  $(".portfolios-btn .btn").click(function () {
    $(".portfolios-btn .btn").removeClass("active");

    $(this).addClass("active");
  })

  // tabs
  $(".experices-list").on("click", ".experices-item:not(.active)", function () {
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
    dots: true,
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
   
  ]
  })

  // slider review
  $(".testimonials-sliders").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
   
  ]
  })

  // year
  $(".year").text((new Date).getFullYear());

  $(".burger").click(function () {
    $(".burger").toggleClass("active")
    $(".nav").toggleClass("active")
    $("body").toggleClass("hiden")
  })

  // up arrow
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $(".btn-up").fadeIn()
    }
    else{
      $(".btn-up").fadeOut()
    }
  })

  $(".btn-up").click(function (e) { 
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 800)

  });


});