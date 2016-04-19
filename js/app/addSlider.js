/**
 * Created by Matze on 19.04.2016.
 */
$('.slider').load('slider.html', function(){
  $('.slider').slider({
    full_width: true,
    indicators: false,
    interval: 3000
  });
});