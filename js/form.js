const firstName = document.querySelector('#name')
const surname = document.querySelector('#surname')
const date = document.querySelector('#date')
const street = document.querySelector('#street')
const houseNumber = document.querySelector('#hnumber')
const flatNumber = document.querySelector('#flat-number')
const cardPayment = document.querySelector('#payment')
const cashPayment = document.querySelector('#payment2')
const pack = document.querySelector('#pack')
const postcard = document.querySelector('#postcard')
const discount = document.querySelector('#discount')
const pen = document.querySelector('#pen')
const submitBtn = document.querySelector('#submit-button')
const mainContainer = document.querySelector('.main-container')

//error spans
const nameError = document.querySelector('#name-error')
const surnameError = document.querySelector('#surname-error')
const dateError = document.querySelector('#date-error')
const streetError = document.querySelector('#name-street-error')
const houseError = document.querySelector('#house-error')
const flatError = document.querySelector('#flat-error')
const paymentError = document.querySelector('#payment-error')
const giftError = document.querySelector('#gift-error')
const subbmitError = document.querySelector('#submit-error')

function nameValidation() {
	firstName.addEventListener('mouseleave', () => {
		let name = firstName.value
		if (name.length === 0) {
			firstName.style.border = '2px solid #a4161a'
			nameError.innerHTML = 'Name is required.'
			return false
		}
		if (!name.match(/^[a-zA-Z]{4,30}$/)) {
			nameError.innerHTML = 'Write full name'
			firstName.style.border = '2px solid #a4161a'
			return false
		} else {
			firstName.style.border = '1px solid green'
			nameError.innerHTML = ''
		}
	})
}
nameValidation()

function surnameValidation() {
	surname.addEventListener('mouseleave', () => {
		let surnameValid = surname.value
		if (surnameValid.length === 0) {
			surname.style.border = '2px solid #a4161a'
			surnameError.innerHTML = 'Surname is required.'
			return false
		}
		if (!surnameValid.match(/^[a-zA-Z]{5,30}$/)) {
			surnameError.innerHTML = 'Write valid surname'
			surname.style.border = '2px solid #a4161a'
			return false
		} else {
			surname.style.border = '1px solid green'
			surnameError.innerHTML = ''
		}
	})
}
surnameValidation()

function streetValidation() {
	street.addEventListener('mouseleave', () => {
		let streetValid = street.value
		if (streetValid.length === 0) {
			street.style.border = '2px solid #a4161a'
			streetError.innerHTML = 'Street is required.'
			return false
		}
		if (!streetValid.match(/^[0-9,-,#]$/)) {
			streetError.innerHTML = 'Write full street'
			street.style.border = '2px solid #a4161a'
			return false
		} else {
			street.style.border = '1px solid green'
			streetError.innerHTML = ''
		}
	})
}
streetValidation()

function houseNumberValidation() {
	houseNumber.addEventListener('mouseleave', () => {
		let houseNumberValid = houseNumber.value
		if (houseNumberValid.length === 0) {
			houseNumber.style.border = '2px solid #a4161a'
			houseError.innerHTML = 'House number is required.'
			return false
		}
		if (!houseNumberValid.match(/^[0-9].+$/)) {
			houseError.innerHTML = 'Write valid house number'
			houseNumber.style.border = '2px solid #a4161a'
			return false
		} else {
			houseNumber.style.border = '1px solid green'
			houseError.innerHTML = ''
		}
	})
}
houseNumberValidation()

function flatNumberValidation() {
	flatNumber.addEventListener('mouseleave', () => {
		let flatNumberValid = flatNumber.value
		if (flatNumberValid.length === 0) {
			flatNumber.style.border = '2px solid #a4161a'
			flatError.innerHTML = 'Flat number is required.'
			return false
		}
		if (!flatNumberValid.match(/^[1-9–]+[-0-9–]+[#0-9]*$/)) {
			flatError.innerHTML = 'Write valid flat number'
			flatNumber.style.border = '2px solid #a4161a'
			return false
		} else {
			flatNumber.style.border = '1px solid green'
			flatError.innerHTML = ''
		}
	})
}
flatNumberValidation()
