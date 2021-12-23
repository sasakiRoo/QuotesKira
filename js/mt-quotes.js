const quotes = [

	`"Hidup itu seperti mengendarai sebuah sepeda. Untuk menjaga keseimbangan, kamu harus terus bergerak." -Albert Einstein`,
	`"Orang yang tak pernah membuat kesalahan, maka tak akan pernah mencoba sesuatu yang baru." -Albert Einstein`,
	`"Kegagalan akan mengalahkan pecundang. Kegagalan akan menginspirasi pemenang." -Robert T. Kiyosaki`,
	`"Ia yang mengerjakan lebih dari apa yang dibayar pada suatu saat akan dibayar lebih dari apa yang ia kerjakan." -Napoleon Hill`,
	`"Pertama, berpikirlah. Yang kedua, percayalah. Yang ketiga, mimpikan lah. Lalu yang terakhir, tantang lah." -Walt Disney`,
	`"Jika kamu bisa memimpikannya, kamu bisa melakukannya." -Walt Disney`,
	`"Berubah memang berat pada awalnya, kacau di tengah-tengahnya, dan sangat indah pada akhirnya." -Robin Sharma`,
	`"Tak peduli bagaimana kerasnya kehidupanmu di masa lalu, kamu selalu bisa memulainya lagi." -Buddha`,
	`"Hidup bukan tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan diri sendiri." -George Bernard Shaw`,
	`"Bermimpi lah dalam hidup, jangan hidup dalam mimpi." -Andrea Hirata`,
	`"Nasib memang diserahkan kepada manusia untuk digarap, tetapi takdir harus ditandatangani di atas materai dan tidak boleh digugat kalau nanti terjadi apa-apa, baik atau buruk." -Sapardi Djoko Damono`,
	`"Ketika kau melakukan sesuatu yang mulia dan indah tapi tak seorang pun memperhatikan, jangan bersedih. Karena matahari pun tampil cantik setiap pagi meski sebagian besar penontonnya masih tidur." -John Lennon`,
	`"Perjalanan ribuan mil dimulai dengan langkah pertama." -Lao Tzu`,
	`"Ambil lah risiko yang lebih besar dari apa yang dipikirkan orang lain aman. Berilah perhatian lebih dari apa yang orang lain pikir bijak. Bermimpi lah lebih dari apa yang orang lain pikir masuk akal." -Claude T. Bissell`,
	`"Cinta tak bisa tiba-tiba, seperti sebuah batu. Ia harus dibuat. Layaknya sebuah roti akan selalu dibuat ulang untuk menghasilkan yang baru." -Ursula K. Le Guin`,
	`"Pertumbuhan dimulai ketika kita mulai menerima kelemahan kita sendiri." -Jean Vanier`,
	`"Sesuatu akan selalu selalu mustahil sampai kamu selesai melakukannya." -Nelson`,
	`"Hiduplah seakan-akan kau akan mati besok. Belajarlah seakan-akan kau akan hidup selamanya." -Mahatma Gandhi`,
	`"Jangan biarkan opini orang lain menenggelamkan suara dari dalam diri." -Steve Jobs`,
	`"Kadang-kadang, pilihan terbaik adalah menerima." -Dewi Lestari`

]

const getQuotes = document.getElementById('getQuotes')
const output = document.getElementById('quotesOutput')
const boxContainer = document.querySelector('.boxContainer')
const loadingWrapper = document.querySelector('.loadingWrapper')
const copyBtn = document.getElementById('copyQuotes')
const popUpAlert = document.querySelector('.popUpAlert')
const btnClose = document.getElementById('btn-close')

let quotesVal = document.getElementById('quotesVal')
let newQuote
let val2 = quotesVal.value

function copyText(){
	quotesVal.select()
    quotesVal.setSelectionRange(0, 99999)
    navigator.clipboard
    	.writeText(val2)
    	.then(() => {
    		popUpAlert.style.display = 'flex'
    		btnClose.addEventListener('click', () => {
    			popUpAlert.style.display = 'none'
    		})	
    	})
    	.catch(() => {
    		alert('something went wrong')
    	})
	
}

getQuotes.addEventListener('click', () => {
	let lenQuotes = quotes.length
	let randomVal = Math.floor(Math.random()*lenQuotes)
	let r = Math.floor(Math.random() * 255 + 1)
	let g = Math.floor(Math.random() * 255 + 1)
	let b = Math.floor(Math.random() * 255 + 1)
	let rgb = r+" "+g+" "+b
	let alpha = Math.round(Math.random()*100)/100
	let rgba = r+" "+g+" "+b+" "+alpha
	

	const loadingEl = document.createElement('img')
	loadingWrapper.style.display = 'flex'
	loadingEl.classList.add('loading')
	loadingEl.src = '../assets/Rolling-1s-24px.svg'
	loadingWrapper.appendChild(loadingEl)

	setTimeout(function(){
		copyBtn.style.display = 'block'
		loadingWrapper.style.display = ''
		loadingEl.style.display = 'none'
		for (let i = 0; i < lenQuotes; i+=1){
            newQuote = quotes[randomVal]
            output.innerText = newQuote
            val2 = newQuote
            //(val2)
        }
	}, 1200)


	
	quotesBox.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`
	//(`${r}, ${g}, ${b}, ${alpha}`)
})




