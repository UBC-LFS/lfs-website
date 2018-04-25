/* global jQuery */

jQuery(document).ready(function ($) {
  $('#facultyDirectory').DataTable({
    'order': [[1, 'asc']],
    'pageLength': 50
  })
})
