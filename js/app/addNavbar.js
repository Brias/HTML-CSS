/**
 * Created by Matze on 11.04.2016.
 */
var loc = window.location.pathname,
    dir = loc.substring(0, loc.lastIndexOf('/'));

if(dir.substr(dir.lastIndexOf('/')) === "/html"){
  $('#navbar').load('navbar.html', checkForActive);
}else{
  $('#navbar').load('html/navbar.html', checkForActive);
}

function checkForActive(){
  switch(loc.substring(loc.lastIndexOf('/') + 1, loc.length)){
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
    case 'contact.html':
      setActive('contact');
      break;
  }
}

function setActive(id){
  $('#' + id).addClass('active');
}