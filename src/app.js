

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hide-this')
hiddenElements.forEach((el) => observer.observe(el))

var links = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    var offsetTop = target.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
}