window.onload = function() {
    let formElements = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(formElements).forEach(function(form){
        form.addEventListener('submit', function(event){
            if(!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        });
    });
}