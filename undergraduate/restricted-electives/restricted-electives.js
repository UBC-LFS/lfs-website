const RESTRICTED_ELECTIVES = [
  {
    name: 'APBI 260',
    re: ['aab', 'apss', 'fte', 'd', 'ns']
  },
  {
    name: 'APBI 311',
    re: ['aab']
  },
  {
    name: 'APBI 402',
    re: ['apss', 'ns']
  },
  {
    name: 'APBI 407',
    re: ['d', 'ns']
  },
  {
    name: 'APBI 270',
    re: ['aab', 'apss', 'fte', 'd', 'ns']
  },
  {
    name: 'APBI 101',
    re: ['aab', 'fte', 'ns']
  }
]

document.addEventListener('DOMContentLoaded', function () {
  const selectCoursesByRE = (re, courses) => courses.filter(course => course.re.includes(re)).map(course => course.name)
  const createTable = selectedRE => {

  }
  document.getElementById('reSelector').addEventListener('change', function () {
    console.log(jQuery('#reSelector').val())
    createTable(jQuery('#reSelector').val())
  })
})
