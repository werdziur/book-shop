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
	let totalPrice = 0
	let totalItemsCart = 0
	for (let book in data) {
		const fragmentBook = new DocumentFragment()
		const divMainContainer = document.createElement('div')
		divMainContainer.classList.add('main-container__books')

		//book div
		const divBook = document.createElement('div')
		divBook.classList.add('main-container__card')
		divBook.setAttribute('draggable', 'true')
		divBook.setAttribute('id', data[book].id)
		const bookImage = document.createElement('img')
		bookImage.setAttribute('src', data[book].imageLink)
		bookImage.classList.add('bookImg')
		bookImage.setAttribute('draggable', 'false')
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
		buttonBuy.setAttribute('id', 'btn-buy')
		buttonBuy.classList.add('main-container__button-buy')

		//summing total
		let sum = document.querySelector('.sum')
		let cartItems = document.querySelector('.cart-items')

		function sumValueAdd() {
			buttonBuy.addEventListener('click', () => {
				totalPrice += data[book].price
				sum.innerHTML = `$${totalPrice}`
				console.log(sum)
			})
		}
		sumValueAdd()

		function sumItemsCart() {
			buttonBuy.addEventListener('click', () => {
				totalItemsCart += 1
				cartItems.innerHTML = `${totalItemsCart}`
				console.log(cartItems)
			})
		}

		sumItemsCart()

		//adding to cart
		function addToCart() {
			let mainCart = document.querySelector('.cart')
			const fragmentAddToCart = new DocumentFragment()

			buttonBuy.addEventListener('click', e => {
				const divItem = document.createElement('div')
				divItem.classList.add('div-item')
				const bookImage = document.createElement('img')
				bookImage.setAttribute('src', data[book].imageLink)
				bookImage.classList.add('bookImgCart')
				const bookAuthor = document.createElement('p')
				bookAuthor.innerHTML = `${data[book].author}`
				bookAuthor.classList.add('authorCart')
				const bookTitle = document.createElement('p')
				bookTitle.innerHTML = `${data[book].title}`
				bookTitle.classList.add('titleCart')
				const bookPrice = document.createElement('p')
				bookPrice.innerHTML = `Price: $${data[book].price}`
				bookPrice.classList.add('priceCart')

				//removing from cart
				const removeButton = document.createElement('button')
				removeButton.setAttribute('type', 'button')
				removeButton.classList.add('remove-btn')
				removeButton.innerText = 'Remove'

				removeButton.addEventListener('click', id => divItem.remove(data[book].id))

				function sumValueRemove() {
					removeButton.addEventListener('click', () => {
						totalPrice -= data[book].price
						sum.innerHTML = `$${totalPrice}`
						console.log(sum)
					})
				}
				sumValueRemove()

				function sumItemsCartRemove() {
					removeButton.addEventListener('click', () => {
						totalItemsCart -= 1
						cartItems.innerHTML = `${totalItemsCart}`
						console.log(cartItems)
					})
				}

				sumItemsCartRemove()

				divItem.append(bookImage, bookAuthor, bookTitle, bookPrice, removeButton)
				fragmentAddToCart.append(divItem)
				mainCart.append(fragmentAddToCart)
			})
		}

		addToCart()

		//drag and drop functionality

		divBook.addEventListener('dragstart', function (e) {
			e.dataTransfer.setData('text/plain', e.target.id)
			e.stopImmediatePropagation()
			cart.classList.add('cart-show')
		})

		// 		// droppable element is taken

		cart.addEventListener('dragover', function (e) {
			e.preventDefault()
			cart.classList.add('drop-zone')
		})

		// 		//element dropped into drop zone

		cart.addEventListener('drop', function (e) {
			e.preventDefault()
			e.stopImmediatePropagation()

			const data2 = e.dataTransfer.getData('text')
			const nodeCopy = document.getElementById(data2).cloneNode(true)
			nodeCopy.classList.remove('main-container__card')
			cart.classList.remove('drop-zone')
			nodeCopy.classList.add('div-item')

			const removeButton = document.createElement('button')
			removeButton.classList.add('remove-btn')
			removeButton.innerText = 'Remove'
			nodeCopy.appendChild(removeButton)
			cart.appendChild(nodeCopy)
			console.log(nodeCopy)
			cart.classList.remove('cart-show')

			removeButton.addEventListener('click', id => nodeCopy.remove(data[book].id))
			totalPrice += data[book].price
			sum.innerHTML = `$${totalPrice}`
			totalItemsCart += 1
			cartItems.innerHTML = `${totalItemsCart}`

			removeButton.addEventListener('click', () => {
				totalPrice -= data[book].price
				sum.innerHTML = `$${totalPrice}`
				totalItemsCart -= 1
				cartItems.innerHTML = `${totalItemsCart}`
			})
		})

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
		divBook.append(bookImage, bookTitle, bookAuthor, bookPrice)
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
cart.classList.add('cart', 'droppable')
const totalValue = document.createElement('div')
totalValue.classList.add('total-value')
const totalValueText = document.createElement('p')
totalValueText.innerText = 'Total:'
let totalValueAmount = document.createElement('p')
totalValueAmount.classList.add('sum')
const confirmOrder = document.createElement('a')
confirmOrder.classList.add('confirm-btn')
confirmOrder.setAttribute('href', 'form.html')
confirmOrder.innerText = 'confirm order'
totalValue.append(totalValueText, totalValueAmount, confirmOrder)
cart.append(totalValue)

const nav = document.createElement('div')
nav.classList.add('central-nav')
const addNavButton = document.createElement('div')
const imageCart = document.createElement('img')
imageCart.setAttribute('src', 'img/cart-shopping-solid.svg')
imageCart.setAttribute('alt', 'cart icon')
addNavButton.appendChild(imageCart)
addNavButton.classList.add('burger-btn')
const cartAmount = document.createElement('div')
cartAmount.classList.add('cart-items')
cartAmount.innerText = '0'

const addNavLogo = document.createElement('div')
addNavLogo.classList.add('logo')
const navText = document.createElement('a')
navText.setAttribute('src', 'main.html')
navText.innerText = 'BookShop'
const imgBook = document.createElement('img')
imgBook.setAttribute('src', './img/Book8Colour3.svg')
addNavButton.append(cartAmount)
addNavLogo.append(imgBook, navText)
nav.append(addNavLogo, addNavButton)
addNav.append(cart, nav)

// showing cart
function showingCart() {
	addNavButton.addEventListener('click', () => cart.classList.toggle('cart-show'))
	cart.addEventListener('mouseleave', () => cart.classList.toggle('cart-show'))
}

showingCart()

// header

const addHeader = document.createElement('header')
addHeader.classList.add('header')

const headerH1 = document.createElement('h1')
headerH1.classList.add('header__heading')
headerH1.innerText = 'Welcome to BookShop!'

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
fragment.append(addNav, addHeader, main, footer)

document.body.prepend(fragment)
