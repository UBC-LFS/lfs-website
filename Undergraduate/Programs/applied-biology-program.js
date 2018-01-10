/* global jQuery */
jQuery(document).ready(function ($) {
  // $(function () {
  //   $('.interests').typed({
  //     strings: [ '^750 the health, protection and well-being of animals?',
  //       '^750 biodiversity?',
  //       '^750 sustainable food production systems?'
  //     ],
  //     typeSpeed: 20,
  //     backDelay: 1500,
  //     backSpeed: -20,
  //     loop: false
  //   })
  // })

  var sources = document.getElementsByClassName('source-link')
  var targets = document.getElementsByClassName('target-link')
  Array.prototype.forEach.call(sources, function (source, i) {
    var a = document.createElement('a')
    a.href = source.children[0].href
    a.appendChild(targets[i].children[0])
    var wrapper = a.outerHTML
    document.getElementsByClassName('target-link')[i].innerHTML = wrapper
  })
})
