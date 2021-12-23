const selectStyle = document.querySelector('.selectStyle')
const linksStyle = document.querySelector('.links-style')

selectStyle.addEventListener('click', () => {
	linksStyle.classList.toggle('show-link-style')
})
selectStyle.addEventListener('mouseleave', () => {
	if (linksStyle.classList.contains('show-link-style')){
		linksStyle.classList.remove('show-link-style')
	}
})
