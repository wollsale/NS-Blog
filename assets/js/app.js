// FADE ON SCROLL
function animatedTitle() {
  const title  = document.querySelector('.header-blog__title'),
        footer = document.querySelector('footer')

  if (title) {
    window.addEventListener('scroll', () => {
      let scroll  = window.pageYOffset,
          opacity = 1 - (scroll / 600)

      title.style.opacity = opacity
      opacity < 0.2 ? title.style.opacity = 0.2 : title.style.opacity = opacity
    })
  }
}

animatedTitle();


// MODERNIZR
require('../../dist/modernizr-bundle.js');

if (!Modernizr.objectfit) {

	let container 	= document.querySelector('.objectfitContainer'),
		imageUrl	= document.querySelector('.objectfitContainer > img').src

	if (imageUrl) {
		container.style.backgroundImage = 'url(' + imageUrl + ')'
		container.classList.add('objectfitContainer--is-active')
	}
}