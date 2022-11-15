fetch('books.json')
	.then(response => {
		return response.json()
	})
	.then(data => {
		appendData(data)
	})

	.catch(err => {
		console.log('error: ' + err)
	})

function appendData(data) {
	let main = document.querySelector('.main-container')
	for (let book in data) {
		const fragmentBook = new DocumentFragment()
		const divMainContainer = document.createElement('div')
		divMainContainer.classList.add('main-container__books')
		const divBook = document.createElement('div')
		divBook.classList.add('main-container__card')
		const bookImage = document.createElement('img')
		bookImage.setAttribute('src', data[book].imageLink)
		bookImage.classList.add('bookImg')
		const bookAuthor = document.createElement('p')
		bookAuthor.innerHTML = `${data[book].author}`
		bookAuthor.classList.add('author')
		const bookTitle = document.createElement('p')
		bookTitle.innerHTML = `${data[book].title}`
		bookTitle.classList.add('title')
		const bookPrice = document.createElement('p')
		bookPrice.innerHTML = `Price: $${data[book].price}`
		bookPrice.classList.add('price')
		const background = document.createElement('div')
		background.classList.add('background')

		const bookDescription = document.createElement('p')
		bookDescription.innerHTML = `${data[book].description}`
		bookDescription.classList.add('description')
		const buttonMoreInfo = document.createElement('button')
		const buttonBuy = document.createElement('button')
		buttonBuy.innerHTML = 'Buy'
		buttonBuy.setAttribute('type', 'button')
		buttonBuy.classList.add('main-container__button-buy')

		buttonMoreInfo.classList.add('main-container__button-more', 'description-button')
		buttonMoreInfo.innerHTML = 'Show more'
		buttonMoreInfo.setAttribute('type', 'button')

		buttonMoreInfo.addEventListener('click', e => {
			background.classList.toggle('btn-details')
			if (background.classList.contains('btn-details')) {
				buttonMoreInfo.innerHTML = 'Close X'
			} else {
				buttonMoreInfo.innerHTML = 'Show More'
			}
		})

		background.append(bookDescription)
		divMainContainer.append(background, divBook, buttonBuy, buttonMoreInfo)
		divBook.append(bookImage, bookAuthor, bookTitle, bookPrice)
		fragmentBook.append(divMainContainer)
		main.appendChild(fragmentBook)
	}
}

appendData()

//nav and header

const fragment = new DocumentFragment()

const addNav = document.createElement('nav')
addNav.classList.add('navigation')

const addHeader = document.createElement('header')
addHeader.classList.add('header')

const headerH1 = document.createElement('h1')
headerH1.classList.add('header__heading')
headerH1.innerText = 'Welcome in a book shop!'

const headerText = document.createElement('p')
headerText.innerText = 'A magical place for all bookworms'
headerText.classList.add('header__text')

const main = document.createElement('main')
main.classList.add('main-container')

addHeader.appendChild(headerH1)
headerH1.appendChild(headerText)
fragment.append(addNav, addHeader, main)

document.body.prepend(fragment)

//book show more button animation

// function addDescription() {
// 	const btnsMore = document.getElementsByClassName('description-button')
// 	// console.log(btnsMore)
// 	for (btn of btnsMore) {
// 		btn.addEventListener('click', (e) => {
// 			btn.innerText('tak')
//             console.log(e)
// 		})
// 	}
// }

// addDescription()
