const quotes = [
	
	"Hati memang merasa nyaman dalam memendam, namun otak merasa tak tahan untuk menahan segala beban.",
	"Cukup jaringan aja yang hilang, kamu jangan.",
	"Merasakan sebuah 'rasa' itu mudah, meninggalkannya yang terlalu susah.",
	"Bila mencintaimu adalah sebuah ilusi, maka izinkan aku berimajinasi selamanya.",
	"Anggap saja aku rumahmu, jika kamu pergi kamu tahu arah pulang. Menetaplah bila mau dan pergilah jika bosan.",
	"Yang terlihat seperti aku tidak memedulikannya, namun ternyata hati dan pikiran bertolak belakang.",
	"Sikap pedulimu membuatku takut jika banyak perempuan yang akan salah mengartikannya.",
	"Jangan pernah ninggalin seseorang yang ada saat kamu susah cuma demi orang menarik yang barusan singgah di hidupmu.",
	"Kenapa jarak diciptakan pada hubungan? Ya karena agar mereka bisa lebih menghargai pentingnya kebersamaan.",
	"Aku tetap mencintai kamu, meski tanpa suara. Tetap merindukanmu meski tanpa jumpa.",
	"Sama kamu aku ngerasa cukup, punya kamu aja sudah cukup. Tapi kalau kamu hilang, ratusan bahkan ribuan manusia pun gak akan cukup buat gantiin kamu.",
	"Bahkan ketika aku sedang dalam kesulitan ataupun sedang merasa senang, kau masih jadi orang pertama yang terlintas di benakku.",
	"Aku tahu, tanpamu aku pasti akan tetap baik-baik saja. Tapi entah mengapa, aku selalu takut jika harus tanpamu.",
	"Jangan berjanji untuk tidak meninggalkan, berjanjilah akan tetap bertahan apa pun masalahnya.",	
	"Aku sengaja membuat seseorang tidak tahan dengan sikapku yang aneh. Jika ia bersabar, maka dialah orang yang kucari."
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
            newQuote = `"${quotes[randomVal]}"`
            output.innerText = newQuote
            val2 = newQuote
            //(val2)
        }
	}, 1200)


	
	quotesBox.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`
	//(`${r}, ${g}, ${b}, ${alpha}`)
})




