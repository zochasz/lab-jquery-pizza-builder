// Write your Pizza Builder JavaScript in this file.
$('.btn-pepperonni').click(function(e) {
  $('.pep').toggle();
});
$('.btn-mushrooms').click(function(e) {
  $('.mushroom').toggle();
});
$('.btn-green-peppers').click(function(e) {
  $('.green-pepper').toggle();
});
$('.btn-crust').click(function(e) {
  $('.crust').toggleClass('crust-gluten-free');
});
$('.btn-sauce').click(function(e) {
  $('.sauce').toggleClass('sauce-white');
});
$('.btn').click(function(e) {
  $(this).toggleClass('active');
});
                                  /* para corregir*/
