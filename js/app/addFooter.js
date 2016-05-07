/**
 * Created by Matze on 11.04.2016.
 */
$('footer').load('footer.html', function () {
  $('.modal-trigger').leanModal();
  $('#printImpress').click(function(ev) {
    $('#imprintModal .modal-content').print({
      stylesheet: "../css/print.css"
    });
  });
});