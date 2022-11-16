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

        //book div
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

        //button buy
		const buttonMoreInfo = document.createElement('button')
		const buttonBuy = document.createElement('button')
		buttonBuy.innerHTML = 'Buy'
		buttonBuy.setAttribute('type', 'button')
		buttonBuy.classList.add('main-container__button-buy')

        //button more background
		buttonMoreInfo.classList.add('main-container__button-more', 'description-button')
		buttonMoreInfo.innerHTML = 'Show more'
		buttonMoreInfo.setAttribute('type', 'button')

		buttonMoreInfo.addEventListener('click', e => {
			background.classList.toggle('btn-details')
			if (background.classList.contains('btn-details')) {
				buttonMoreInfo.innerHTML = 'Close'
			} else {
				buttonMoreInfo.innerHTML = 'Show More'
			}
		})


		background.append(bookDescription)
		divMainContainer.append(background, divBook, buttonBuy, buttonMoreInfo)
		divBook.append(bookImage, bookTitle, bookAuthor,  bookPrice)
		fragmentBook.append(divMainContainer)
		main.appendChild(fragmentBook)
	}
}

appendData()

//nav and header

const fragment = new DocumentFragment()

//nav

const addNav = document.createElement('nav')
addNav.classList.add('navigation')
addNav.setAttribute('id', 'navbar')

const cart = document.createElement('div')
cart.classList.add('cart')

const nav = document.createElement('div')
nav.classList.add('central-nav')
const addNavButton = document.createElement('div')
const imageCart = document.createElement('img')
imageCart.setAttribute('src', '/img/cart-shopping-solid.svg')
imageCart.setAttribute('alt', 'cart icon')
addNavButton.appendChild(imageCart)
addNavButton.classList.add('burger-btn')
const cartAmount = document.createElement('div')
cartAmount.innerText = '0'
const addNavLogo = document.createElement('div')
addNavLogo.classList.add('logo')
const navText = document.createElement('a')
navText.setAttribute('src', 'main.html')
navText.innerText = 'BOOK SHOP'
addNavButton.append(cartAmount)
addNavLogo.append(navText)
nav.append(addNavLogo, addNavButton)
addNav.append(cart, nav)

// showing cart
const showingCart = () => {
addNavButton.addEventListener('click', () => cart.classList.toggle('cart-show'))}

showingCart()

//adding books

// fetch('books2.json')
// 	.then(response => {
// 		return response.json()
// 	})
// 	.then(books => {
// 		appendData(books)
// 	})

// 	.catch(err => {
// 		console.log('error: ' + err)
// 	})

// function addToCart(books) {
// 	let mainCart = document.querySelector('.cart')
// 	for (let book in books) {
// 		const fragmentCart = new DocumentFragment()
// 		const cartMainContainer = document.createElement('div')
// 		cartMainContainer.classList.add('main-cart')

//         //book div
// 		const divBookCart = document.createElement('div')
// 		divBookCart.classList.add('book-cart')

// 		const cartImage = document.createElement('img')
// 		cartImage.setAttribute('src', data[book].imageLink)
// 		cartImage.classList.add('bookImg')
// 		const cartAuthor = document.createElement('p')
// 		cartAuthor.innerHTML = `${data[book].author}`
// 		cartAuthor.classList.add('author-cart')
// 		const cartTitle = document.createElement('p')
// 		cartTitle.innerHTML = `${data[book].title}`
// 		cartTitle.classList.add('title-cart')
// 		const cartPrice = document.createElement('p')
// 		cartPrice.innerHTML = `Price: $${data[book].price}`
// 		cartPrice.classList.add('price-cart')

        
// 		cartMainContainer.append(divBookCart)
// 		divBookCart.append(cartImage, cartTitle, cartAuthor,  cartPrice)
// 		fragmentCart.append(cartMainContainer)
// 		mainCart.appendChild(fragmentCart)

//         // //button buy
// 		// const buttonMoreInfo = document.createElement('button')
// 		// const buttonBuy = document.createElement('button')
// 		// buttonBuy.innerHTML = 'Buy'
// 		// buttonBuy.setAttribute('type', 'button')
// 		// buttonBuy.classList.add('main-container__button-buy')

//         // //button more background
// 		// buttonMoreInfo.classList.add('main-container__button-more', 'description-button')
// 		// buttonMoreInfo.innerHTML = 'Show more'
// 		// buttonMoreInfo.setAttribute('type', 'button')

// 		// buttonMoreInfo.addEventListener('click', e => {
// 		// 	background.classList.toggle('btn-details')
// 		// 	if (background.classList.contains('btn-details')) {
// 		// 		buttonMoreInfo.innerHTML = 'Close'
// 		// 	} else {
// 		// 		buttonMoreInfo.innerHTML = 'Show More'
// 		// 	}
// 		// })


	
// 	}
// }

// console.log(addToCart())



// header

const addHeader = document.createElement('header')
addHeader.classList.add('header')

const headerH1 = document.createElement('h1')
headerH1.classList.add('header__heading')
headerH1.innerText = 'Welcome in a book shop!'

const headerText = document.createElement('p')
headerText.innerText = 'A magical place for all bookworms'
headerText.classList.add('header__text')

//main

const main = document.createElement('main')
main.classList.add('main-container')

//footer

const footer = document.createElement('footer')
footer.classList.add('footer')
const contact = document.createElement('div')
contact.classList.add('contact-details')
const logoFooter = document.createElement('div')
logoFooter.classList.add('logo-footer')
const socialMediaTel = document.createElement('a')
socialMediaTel.setAttribute('src', '#')
const socialMediaFace = document.createElement('a')
socialMediaFace.setAttribute('src', '#')
const socialMediaMail = document.createElement('a')
socialMediaMail.setAttribute('src', '#')


contact.append(socialMediaTel, socialMediaFace, socialMediaMail)
footer.append(contact, logoFooter)
addHeader.appendChild(headerH1)
headerH1.appendChild(headerText)
fragment.append(addNav, addHeader,  main, footer)

document.body.prepend(fragment)

