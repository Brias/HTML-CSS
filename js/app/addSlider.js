/**
 * Created by Matze on 19.04.2016.
 */
function addSlider(slides) {
  $.get('slider.html', function (data) {
    var $slider = $('.slider'),
        template = _.template(data);

    $slider.html(template({slides: slides}));

    $slider.slider({
      full_width: true,
      indicators: false,
      interval: 3000
    });
  });
}