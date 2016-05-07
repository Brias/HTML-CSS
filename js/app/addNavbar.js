/**
 * Created by Matze on 11.04.2016.
 */
function checkForActive() {
  switch (loc.substring(loc.lastIndexOf('/') + 1, loc.length)) {
    case 'development.html':
      setActive('development');
      break;
    case 'electricalCircuits.html':
      setActive('circuits');
      break;
    case 'codeSnippets.html':
      setActive('code');
      break;
    case 'gallery.html':
      setActive('gallery');
      break;
  }
}

function setActive(id) {
  $('#' + id).addClass('active');
}

function toggleNavbar() {
  var $nav_list = $('.responsive-nav-list');

  if($nav_list.is(':hidden')){
    $nav_list.show('slow')
  } else {
    $nav_list.fadeOut('slow');
  }
}

function onResize() {
  if($(window).width() > 665) {
    $('.responsive-nav-list').css("display", "inline-block");
  } else {
    $('.responsive-nav-list').css("display", "none");
  }
}

function onNavbarLoaded() {
  checkForActive();
  onResize();
  $(window).resize(onResize);
  $('.responsive-nav-toggle').click(toggleNavbar);
}

var loc = window.location.pathname,
    dir = loc.substring(0, loc.lastIndexOf('/'));

if (dir.substr(dir.lastIndexOf('/')) === "/html") {
  $('#navbar').load('navbar.html', onNavbarLoaded);
} else {
  $('#navbar').load('html/navbar.html', onNavbarLoaded);
}