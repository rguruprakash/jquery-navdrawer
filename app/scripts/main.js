function openDrawer() {
  $('#navdrawer').navdrawer('show');
}

function closeDrawer() {
  $('#navdrawer').navdrawer('hide');
}

$(document).ready(function() {
  $('#navdrawer').navdrawer();
  $('#show').on('click', openDrawer);
  $('#hide').on('click', closeDrawer);
});
