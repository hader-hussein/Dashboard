const currentabout = location.href; 
const menuitemabout = document.querySelectorAll('.navber-index .nav-item .nav-link,.breadcrumb a');
 const menulengthabout = menuitemabout.length
for (let j = 0; j<menulengthabout; j++){
 if(menuitemabout[j].href === currentabout) {
  menuitemabout[j].className = "active" 
    }
}
///
$(document).ready(function() {
  $('.navber-index .nav-item .nav-link').removeClass('active').removeAttr('aria-current');
  $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page'); 
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })


  $('#example').DataTable();
})()
///////////

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/////////////////
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
///////nav//////
let togglee =document.querySelector('.navbar-toggler');
let vavber = document.querySelector('.nav-sidebar');
let minber = document.querySelector('.bg-dark-navber');
let contentd = document.querySelector('.content-admin');
togglee.onclick = function(){
  vavber.classList.toggle('active');
  minber.classList.toggle('active');
  contentd.classList.toggle('active');
}
///////
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#file_upload')
              .attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
  }
}
