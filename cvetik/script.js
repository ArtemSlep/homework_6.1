window.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('.body');
    // const button = document.querySelector('.body-button');
    const input = document.querySelector('.body-input');
    const wrapper = document.querySelector('.wrapper');

    let color;

    input.addEventListener('change', function(event){
      color = event.target.value;
    })

    wrapper.addEventListener('submit', function(event) {
      event.preventDefault();
      body.style.background = color;
    })
})