const container = document.querySelector('.container')
const rect = container.getBoundingClientRect()
//(rect.width)
const c1 = document.querySelector('.s')
const c2 = document.querySelector('.d')
const c3 = document.querySelector('.t')


let randPosX = Math.floor(Math.random() * rect.width)
let randPosY = Math.floor(Math.random() * rect.height)
//(randPosY)



setInterval(function(){
	let r = Math.floor(Math.random() * 255 + 1)
	let g = Math.floor(Math.random() * 255 + 1)
	let b = Math.floor(Math.random() * 255 + 1)
	let randPosX = Math.floor(Math.random() * rect.width)
	let randPosY = Math.floor(Math.random() * rect.height)
	let rgb = r+" "+g+" "+b
	container.style.backgroundColor = `rgb(${rgb})`
	container.style.transition = '0.9s ease-out'
	c1.style.transform = `translateX(${randPosX + 100}px)
						 translateY(-${randPosY + 90}px)`
    c2.style.transform = `translateX(-${randPosX + 200}px)
						 translateY(${randPosY + 50}px)`
	c3.style.transform = `translateX(-${randPosX + (-30)}px)
						 translateY(-${randPosY - 40}px)`
}, 2900)

setInterval(function(){
	let randRotate = Math.floor(Math.random() * 360 + 1)
	c1.style.transform = `rotate(${randRotate}deg)`
	c2.style.transform = `rotate(-${randRotate}deg)`
	c3.style.transform = `rotate(${randRotate+10}deg)`
}, 1500)