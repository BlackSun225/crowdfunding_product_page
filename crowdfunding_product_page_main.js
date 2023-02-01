$(document).ready(function(){
  $("button").hover(function(){
    $(this).css("background","hsl(176, 72%, 28%)");
  },function(){
    $(this).css("background","hsl(176, 50%, 47%)");
  });
  $(".bkmrk").css("cursor","pointer");
  var bkmrk = 0;
  var btn = 0;
  $(".bkmrk").click(function(){
    if(bkmrk > 0) {
      $(this).children("img").attr("src","images/icon-bookmark.svg");
      $(this).children("span").text("Bookmark");
      $(this).children("span").css("color","hsl(0, 0%, 48%)");
      bkmrk--;  
    }else if(bkmrk < 1) {
      $(this).children("img").attr("src","images/icon-bookmark-g.svg");
      $(this).children("span").text("Bookmarked");
      $(this).children("span").css("color","hsl(176, 72%, 28%)");
      bkmrk++;
    }
  });
  $(".head button").click(function(){
    $(".support").css("display","block");
    $(".bodydark").css("display","block");
  });
  $("button.two").click(function(){
    $(".bodydark").css("display","block");
    $(".support").css("display","block");
    $(".support").find(".two .circle").click();
  });
  $("button.three").click(function(){
    $(".bodydark").css("display","block");
    $(".support").css("display","block");
    $(".support").find(".three .circle").click();
  });
  $(".support h4").hover(function(){
    $(this).css("color","hsl(176, 50%, 47%)");
    $(this).css("cursor","pointer");
  },function(){
    $(this).css("color","black");
  });
  $(".support img").on({
    mouseenter: function(){
      $(this).attr("src","images/icon-close-modal-g.svg");
    },
    mouseleave: function(){
      $(this).attr("src","images/icon-close-modal.svg");
    },
    click: function(){
      $(".support").css("display","none");
      $(".bodydark").css("display","none");
      $(".reward .caf, .reward .bot").css("display","none");
      $(".reward").css("border","1px solid hsl(0, 4%, 85%)");
    }
  });
  $(".reward .circle").click(function(){
    if($(this).find(".caf").css("display") === "none") {
      $(this).parents(".reward").css("border","1px solid hsl(176, 72%, 28%)");
      $(".reward .caf").css("display","none");
      $(".reward .bot").css("display","none");  
      $(this).find(".caf").css("display","block");
      $(this).parents(".reward").find(".bot").css("display","flex");
    }else if($(this).find(".caf").css("display") === "block") {
      $(this).parents(".reward").css("border","1px solid hsl(0, 4%, 85%)");
      $(this).find(".caf").css("display","none");
      $(this).parents(".reward").find(".bot").css("display","none");
    }
  });
  $(".pledge").hover(function(){
    $(this).css("border","1px solid hsl(176, 72%, 28%)");
    $(this).find("input").css("border-right","1px solid hsl(176, 72%, 28%)");
  }, function(){
    $(this).css("border","1px solid hsl(0, 4%, 85%)");
    $(this).find("input").css("border-right","none");
  });
  $(".support button").click(function(){
    $(".reward .caf, .reward .bot").css("display","none");
    $(".reward").css("border","1px solid hsl(0, 4%, 85%)");
    $(".support").css("display","none");
    $(".thanks").css("display","block");
  });
  $(".thanks button").click(function(){
    $(".bodydark").css("display","none");
    $(".thanks").css("display","none");
  });
  $("img.btn").css("cursor","pointer");
  $("img.btn").click(function(){
    if(btn < 1) {
      $(this).attr("src","images/icon-bookmark-g.svg");
      btn++;
    }else if(btn > 0) {
      $(this).attr("src","images/icon-bookmark.svg");
      btn--;
    }
  });
  $("nav.mob .open").click(function(){
    $(this).css("display","none");
    $(".mbodydark").css("display","block");
    $("nav.mob .menu").css("display","flex");
    $("nav.mob .close").css("display","block");
  })
  $("nav.mob .close").click(function(){
    $(this).css("display","none");
    $(".mbodydark").css("display","none");
    $("nav.mob .menu").css("display","none");
    $("nav.mob .open").css("display","block");
  })
});