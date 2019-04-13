var i = 1;

$(document).ready(function(){
  $(".peon_desc a").click(function(e){
    console.log("Clicked a");
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });



  $(".slider_book_image:nth-child(1) img").css("display","block");
  $("button.left").click(function(){
    $(".slider_book_image:nth-child("+i+") img").css("display","none");
    if(i > 1)
    {
      i = i -1;
    }
    else{
      i = 5;
    }
    $(".slider_book_image:nth-child("+i+") img").css("display","block");
  });

  $("button.right").click(function(){
    $(".slider_book_image:nth-child("+i+") img").css("display","none");
    if(i < 5)
    {
      i = i + 1;
    }
    else{
      i = 1;
    }
    $(".slider_book_image:nth-child("+i+") img").css("display","block");
  });
});
