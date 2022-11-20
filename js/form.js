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
const confirmation = document.querySelector('.order-confirmation')
const shippingDetails = document.querySelector('#contact-details')

//error spans
const nameError = document.querySelector('#name-error')
const surnameError = document.querySelector('#surname-error')
const dateError = document.querySelector('#date-error')
const streetError = document.querySelector('#name-street-error')
const houseError = document.querySelector('#house-error')
const flatError = document.querySelector('#flat-error')
const paymentError = document.querySelector('#payment-error')
const giftError = document.querySelector('#gift-error')
const submitError = document.querySelector('#submit-error')

function buttonDisabled() {
        if (
            !nameValidation() ||
            !surnameValidation() ||
            !nameValidation() ||
            !streetValidation() ||
            !houseNumberValidation() ||
            !flatNumberValidation()
        ) {
            submitBtn.classList.add('btn-disabled')
            submitBtn.classList.remove('btn-purchase')
        } else {
            submitBtn.classList.remove('btn-disabled')
            submitBtn.classList.add('btn-purchase')
        }
    }
    

firstName.addEventListener('focusout', buttonDisabled)
firstName.addEventListener('blur',() => nameValidation())
function nameValidation() {
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
		return true
	}
}

surname.addEventListener('focusout', buttonDisabled)
surname.addEventListener('blur', () => surnameValidation())
function surnameValidation() {
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
		return true
	}
}

street.addEventListener('focusout', buttonDisabled)
street.addEventListener('blur', () => streetValidation())
function streetValidation() {
	let streetValid = street.value
	if (streetValid.length === 0) {
		street.style.border = '2px solid #a4161a'
		streetError.innerHTML = 'Street is required.'
		return false
	}
	if (!streetValid.match(/^[0-9a-zA-Z ]+$/)) {
		streetError.innerHTML = 'Write full street'
		street.style.border = '2px solid #a4161a'
		return false
	} else {
		street.style.border = '1px solid green'
		streetError.innerHTML = ''
		return true
	}
}

houseNumber.addEventListener('focusout', buttonDisabled)
houseNumber.addEventListener('blur', () => houseNumberValidation())
function houseNumberValidation() {
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
		return true
	}
}


flatNumber.addEventListener('focusout', buttonDisabled)
flatNumber.addEventListener('blur', () => flatNumberValidation())
function flatNumberValidation() {
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
		return true
	}
}

function validateForm() {
	submitBtn.addEventListener('click', e => {
		if (
			!nameValidation() ||
			!surnameValidation() ||
			!nameValidation() ||
			!streetValidation() ||
			!houseNumberValidation() ||
			!flatNumberValidation()
		) {
			submitError.style.display = 'block'
			submitError.innerHTML = 'Please fill all required fields!'
        

			setTimeout(function () {
				submitError.style.display = 'none'
			}, 3000)
			return false
		} else {
			console.log('submitted')
            e.preventDefault()
		}
	})
}

validateForm()

// submitBtn.addEventListener('submit', e => {
// 	shippingDetails.innerText = `${firstName.value} ${surname.value} ${street.value} ${houseNumber.value} ${flatNumber.value}`
// })


