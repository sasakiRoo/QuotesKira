const quotes = [
	
	`"A rose by any other name would smell as sweet." -William Shakespeare`,
	`"All that glitters is not gold." -William Shakespeare`,
	`"All the world’s a stage, and all the men and women merely players." -William Shakespeare`,
	`"Ask not what your country can do for you; ask what you can do for your country". -John Kennedy`,
	`"Frankly, my dear, I don't give a damn." -Rhett Butler (character)`,
	`"Genius is one percent inspiration and ninetynine percent perspiration." -Thomas Edison`,
	`"If at first you don’t succeed, try, try again." -W. E.Hickson`,
	`"If you are going through hell, keep going." -Winston Churchill`,
	`"If you build it, they will come." -Joe Jackson(character)`,
	`"If you want something done right, do it yourself." -CharlesGuillaume Étienne`,
	`"If you want something said, ask a man; if you want something done, ask a woman." -Margaret Thatcher`,
	`"Keep your friends close, but your enemies closer." -Michael Corleone (character)`,
	`"Knowledge is power." -Sir Francis Bacon`,
	`"Life is like a box of chocolates. You never know what you’re gonna get." -Forrest Gump (character)`,
	`"Life is like riding a bicycle. To keep your balance, you must keep moving." -Albert Einstein`,
	`"No one can make you feel inferior without your consent." -Eleanor Roosevelt`,
	`"Not all those who wander are lost." -J. R. R. Tolkein`,
	`"Nothing is certain except for death and taxes." -Benjamin Franklin`,
	`"Parting is such sweet sorrow." -William Shakespeare`,
	`"The only thing we have to fear is fear itself." -Franklin D. Roosevelt`,
	`"There's no place like home." -Dorothy (character)`,
	`"Three can keep a secret, if two of them are dead." -Benjamin Franklin`,
	`"To be or not to be, that is the question." -William Shakespeare`,
	`"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the dierence." -Robert Frost`,
	`"United we stand, divided we fall." -Aesop`,
	`"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time." -Abraham Lincoln`,
	`"You must be the change you wish to see in the world." -Mahatma Ghandi`
	
]


const getQuotes = document.getElementById('getQuotes')
const output = document.getElementById('quotesOutput')
const boxContainer = document.querySelector('.boxContainer')
const loadingWrapper = document.querySelector('.loadingWrapper')
const copyBtn = document.getElementById('copyQuotes')
const popUpAlert = document.querySelector('.popUpAlert')
const btnClose = document.getElementById('btn-close')
// //(copyBtn)

let quotesVal = document.getElementById('quotesVal')
let newQuote
let val2 = quotesVal.value
//(output)
//(quotesVal.value)

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




