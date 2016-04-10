/**
 * Created by Matze on 11.04.2016.
 */
var loc = window.location.pathname,
    dir = loc.substring(0, loc.lastIndexOf('/'));

if(dir.substr(dir.lastIndexOf('/')) === "/html"){
  $('#navbar').load('navbar.html');
}else{
  $('#navbar').load('html/navbar.html');
}

