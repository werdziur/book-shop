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
		const divBook = document.createElement('div')
		const bookAuthor = document.createElement('p')
		bookAuthor.innerHTML = `Author: ${data[book].author}`
		const bookTitle = document.createElement('p')
		bookTitle.innerHTML = `Title: ${data[book].title}`
		const bookPrice = document.createElement('p')
		bookPrice.innerHTML = `Price: ${data[book].price}`
		const bookDescription = document.createElement('p')
		bookDescription.innerHTML = `Description: ${data[book].description}`
		divBook.appendChild(bookAuthor)
		divBook.appendChild(bookTitle)
		divBook.appendChild(bookPrice)
		divBook.appendChild(bookDescription)

		fragmentBook.appendChild(divBook)
		main.appendChild(fragmentBook)
		divBook.classList.add('main-container__book')
	}
}

appendData()

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
fragment.appendChild(addNav)
fragment.appendChild(addHeader)
fragment.appendChild(main)

document.body.prepend(fragment)
