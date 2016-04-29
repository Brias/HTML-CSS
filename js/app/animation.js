/**
 * Created by Matze on 19.04.2016.
 */
$(window).scroll(getVisible);

function getVisible(){
  var slider = $('.slider'),
      navbar = $('#navbar'),
      sliderHeight = slider.height(),
      scrollTop = $(this).scrollTop(),
      visible = sliderHeight - scrollTop < 0 ? 0 : sliderHeight - scrollTop;

  setOpacity(slider, sliderHeight, visible);
  setNavbarPosition(navbar, visible);
}

function setOpacity($el, height, visible){
  var opacity = visible / height;

  $el.css({opacity: opacity});
}

function setNavbarPosition($el, visible){
  if(visible <= 0){
    if(!$el.hasClass('navbar-fixed')) {
      $el.addClass('navbar-fixed');
    }
  }else{
    if($el.hasClass('navbar-fixed')) {
      $el.removeClass('navbar-fixed');
    }
  }
}