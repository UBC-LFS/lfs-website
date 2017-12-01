/* global jQuery */
jQuery(document).ready(function ($) {
  var span12 = '<div class="span12 border-bottom" style="margin-left: 0; margin-top: 3%; padding-bottom: 15px;"></div>'
  var numofrows = document.getElementById('profiles').getElementsByClassName('span4')

  $('.span4').each(function (index) {
    $(this).addClass('index-' + Math.floor(index / 3))
  })

  for (let i = 0; i < $('.span4').length; i++) {
    if (i % 3 === 0) {
      $('.index-' + Math.floor(i / 3)).wrapAll(span12)
    }
    var profileName = 'profile_' + i.toString()
    $(numofrows[i]).attr('id', profileName)
    var profilePointer = document.getElementById(profileName).getElementsByTagName('a')
    var profileSrc = $(profilePointer[0]).attr('href')
    $('#' + profileName + ' > .profile-link').attr('href', profileSrc)
  }
  $('img').attr('id', 'featured')
})
