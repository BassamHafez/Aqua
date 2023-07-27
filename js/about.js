let navLinks = document.querySelectorAll(".nav-link");
let currentNavColor='';

// loading screen
$(document).ready(function(){
    $("#loading").fadeOut(400,function(){
    $("body").css("overflow","auto");
    });
})

// change nav by scroll
$(window).scroll(function () {
    let scrollable = $(window).scrollTop();
    if (scrollable >2) {
        $(".navbar").addClass("nav-scroll");
        for (let i = 0; i < navLinks.length; i++) {
            if($(window).width()<796){
                navLinks[i].style.cssText = "color:white !important";
                currentNavColor='white';
            }
            else{
                navLinks[i].style.cssText = "color:black !important";
                currentNavColor='black';
            }
        }
        $(".navbar-brand img").attr("src","images/logo-dark.png");
    }
    else {
        $(".navbar").removeClass("nav-scroll");
        for (let i = 0; i < navLinks.length; i++) {
            if($(window).width()<796){
                navLinks[i].style.cssText = "color:white !important";
                currentNavColor='white';
            }
            else{
                navLinks[i].style.cssText = "color:white !important";
                currentNavColor='white';
            }
        }
        $(".navbar-brand img").attr("src","images/logo-light.png");
    }
})


// scroll to sections by nav and set background to active

$(".nav-link").click(function(){
   if($(window).width()>796){
    $(this).css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(this).siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
   }
    else{
    $(this).css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(this).siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    // scroll to section
     let idName= $(this).text();
     let offsetTop=$(`#${idName}`).offset().top;
     $("html").animate({scrollTop:offsetTop+1},100);
     
})

// sec3 slides
function getDefaultSlides(){
    $(".sec3-info-body").slideUp();
    $(".down").slideDown();
}
getDefaultSlides();
$(".sec3-info").click(function(){
    $(this).css("border","1px solid black");
    $(this).siblings().css("border","1px solid rgb(248,248,248)");
     let currentHref=$(this).find(".demo").attr("href");
     $(`#${currentHref}`).slideToggle(1000);
     $(`#${currentHref}`).siblings().slideUp(800);   
})

// gallery
$(document).ready(function() {
    $('.gallary').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
              enabled:true,
              tPrev: 'Previous', // title for left button
              tNext: 'Next',
            },
            
            
        });
    });
  });

// gallery links
$(".sec5-link").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  let filter=$(this).attr("data-filter");
if(filter=='All'){
    $(".image").show(400);
}
else{
    $(".image").not(`.${filter}`).hide(400);
    $(".image").filter(`.${filter}`).show(400);
}
})

// slick slider plugin
$(document).ready(function(){
    $('.slider-imgs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-content',
    });
  })

  // media query
  let trueOrFalse =true;

  if($(window).width()<796){
    trueOrFalse =false;
    }
    else{
    trueOrFalse =true;
    }

  $('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-imgs',
    centerMode: false,
    focusOnSelect: true,
    autoplay:true,
    prevArrow:`<a class="slider-prev"><i class="fa-solid fa-arrow-left"></i></a>`,
    nextArrow:`<a class="slider-next"><i class="fa-solid fa-arrow-right"></i></a>`,
    arrows:trueOrFalse,

  });

//set current part of page on navbar
$(window).scroll(function(){ 
let scrollable= $(window).scrollTop();
let homeHeight=$("#Home").height();
let Features=$("#Features").offset().top;
let Portfolio=$("#Portfolio").offset().top;
let Services=$("#Services").offset().top;
let Price=$("#Price").offset().top;
let About=$("#About").offset().top;
let Blog=$("#Blog").offset().top;
let Contact=$("#Contact").offset().top;
if($(window).width()>796){
if(scrollable<1){
    $(".0").css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}
else if(1<scrollable&&scrollable<homeHeight){
    $(".0").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".0").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}

else if(Portfolio>scrollable&&scrollable>Features){
    $(".1").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".1").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}
else if(Services>scrollable&&scrollable>Portfolio){
    $(".2").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".2").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}
else if(Price>scrollable&&scrollable>Services){
    $(".3").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".3").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}
else if(About>scrollable&&scrollable>Price){
    $(".4").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".4").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}
else if(Blog>scrollable&&scrollable>About){
    $(".5").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".5").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}
else if(Contact>scrollable&&scrollable>Blog){
    $(".6").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".6").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}
else if(scrollable>Contact){
    $(".7").css({"backgroundColor":"white","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
    $(".7").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
}

}
else{
    if(scrollable<1){
        $(".0").css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    else if(1<scrollable&&scrollable<homeHeight){
        $(".0").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".0").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    
    else if(Portfolio>scrollable&&scrollable>Features){
        $(".1").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".1").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    else if(Services>scrollable&&scrollable>Portfolio){
        $(".2").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".2").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    else if(Price>scrollable&&scrollable>Services){
        $(".3").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".3").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    else if(About>scrollable&&scrollable>Price){
        $(".4").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".4").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    else if(Blog>scrollable&&scrollable>About){
        $(".5").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".5").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    else if(Contact>scrollable&&scrollable>Blog){
        $(".6").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".6").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    else if(scrollable>Contact){
        $(".7").css({"backgroundColor":"rgba(130,61,204,.4)","borderRadius":"1.875rem 0  1.875rem 0","border":"1px solid #823DCC"});
        $(".7").siblings().css({"backgroundColor":`transparent`,"borderRadius":"0px"});
    }
    }
})

// owl plugin
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop:true,
        items:1,
        margin:10,
        autoplayHoverPause:true,
        
    })
  });
