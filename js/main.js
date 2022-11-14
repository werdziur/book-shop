fetch('../books.json') //path to the file with json data
	.then(response => {
		return response.json()
	})
	.then(data => {
		console.log(data)
	})

// const body = document.querySelector('body')

const fragmentHeader = new DocumentFragment()

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


addHeader.appendChild(headerH1)
headerH1.appendChild(headerText)
fragmentHeader.appendChild(addNav)
fragmentHeader.appendChild(addHeader)

document.body.prepend(fragmentHeader)
