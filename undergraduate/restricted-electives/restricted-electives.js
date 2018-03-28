/* global jQuery */
const RESTRICTED_ELECTIVES = [
  {
    dept: 'APBI',
    code: 260,
    title: 'Agroecology I',
    re: ['aab', 'apss', 'fte', 'd', 'ns']
  },
  {
    dept: 'APBI',
    code: 318,
    title: 'Applied Plant Breeding',
    re: ['aab']
  },
  {
    dept: 'APBI',
    code: 328,
    title: 'Weed Science',
    re: ['apss', 'ns']
  },
  {
    dept: 'APBI',
    code: 360,
    title: 'Agroecology II',
    re: ['d', 'ns']
  },
  {
    dept: 'APBI',
    code: 401,
    title: 'Soil Processes',
    re: ['aab', 'apss', 'fte', 'd', 'ns']
  },
  {
    dept: 'APBI',
    code: 402,
    title: 'Sustainable Soil Management',
    re: ['aab', 'fte', 'ns']
  }
]

document.addEventListener('DOMContentLoaded', function () {
  const selectCoursesByRE = (re, courses) => courses.filter(course => course.re.includes(re)).map(course => course.name)
  const createTable = selectedRE => {
    const courses = selectCoursesByRE(selectedRE, RESTRICTED_ELECTIVES)
    console.log(courses)
  }
  document.getElementById('reSelector').addEventListener('change', function () {
    const selected = jQuery('#reSelector').val()
    createTable(selected)
  })
})
