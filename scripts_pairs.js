let form;
let list;

window.onload = function () {
    form = document.getElementById('input-form');
    form.addEventListener('submit', performValidation);

    list = document.getElementById('result-list');
}

function performValidation() {
    const nonEmptyLettersRegex = /^.+$/i

    const stringInput = document.getElementById('string-input')
    const isStringCorrect = nonEmptyLettersRegex.test(stringInput.value)

    stringInput.classList.remove('is-invalid')

    if (isStringCorrect)
        printList(stringInput.value)
    else {
        stringInput.classList.add('is-invalid');
        clearList()
    }
}

function printList(fromString) {

    function divideStringBy2Elements(fromString) {
        let resultArray = []

        for (let i = 0, length = fromString.length; i < length; i += 2)
            resultArray.push(fromString.substring(i, i + 2));

        const lastIndex = resultArray.length - 1
        if (resultArray[lastIndex].length === 1)
            resultArray[lastIndex] += "_"

        return resultArray
    }

    clearList()
    list.innerHTML = '<li>' + divideStringBy2Elements(fromString).join('</li><li>') + '</li>'
}

function clearList() {
    list.innerHTML = ''
}