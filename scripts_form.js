let form;

window.onload=function(){
    form = document.getElementById('input-form');
    form.addEventListener('submit', performValidation);
}

function performValidation() {
    const nonEmptyLettersRegex = /^[a-zA-Z]+$/i
    const postalIndexRegex = /^[0-9]{5}$/
    const emailRegex = /^\S+@\S+\.\S+$/

    const nameInput = document.getElementById('name-input')
    const surnameInput = document.getElementById('surname-input')
    const countryInput = document.getElementById('country-input')
    const cityInput = document.getElementById('city-input')
    const addressInput = document.getElementById('address-input')
    const postalIndexInput = document.getElementById('post-index-input')
    const emailInput = document.getElementById('email-input')

    //check values:
    const isNameCorrect = nonEmptyLettersRegex.test(nameInput.value)
    const isSurnameCorrect = nonEmptyLettersRegex.test(surnameInput.value)
    const isCountryCorrect = nonEmptyLettersRegex.test(countryInput.value)
    const isCityCorrect = nonEmptyLettersRegex.test(cityInput.value)
    const isAddressCorrect = nonEmptyLettersRegex.test(addressInput.value)
    const isPostalIndexCorrect = postalIndexRegex.test(postalIndexInput.value)
    const isEmailCorrect = emailRegex.test(emailInput.value)

    //set validation
    nameInput.classList.remove('is-valid', 'is-invalid')
    nameInput.classList.add(isNameCorrect ? 'is-valid' : 'is-invalid');
    surnameInput.classList.remove('is-valid', 'is-invalid')
    surnameInput.classList.add(isSurnameCorrect ? 'is-valid' : 'is-invalid');
    countryInput.classList.remove('is-valid', 'is-invalid')
    countryInput.classList.add(isCountryCorrect ? 'is-valid' : 'is-invalid');
    cityInput.classList.remove('is-valid', 'is-invalid')
    cityInput.classList.add(isCityCorrect ? 'is-valid' : 'is-invalid');
    addressInput.classList.remove('is-valid', 'is-invalid')
    addressInput.classList.add(isAddressCorrect ? 'is-valid' : 'is-invalid');
    postalIndexInput.classList.remove('is-valid', 'is-invalid')
    postalIndexInput.classList.add(isPostalIndexCorrect ? 'is-valid' : 'is-invalid');
    emailInput.classList.remove('is-valid', 'is-invalid')
    emailInput.classList.add(isEmailCorrect ? 'is-valid' : 'is-invalid');
}