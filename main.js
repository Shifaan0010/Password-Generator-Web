function generate_password(length, lowercase, uppercase, punctuation, digits) {
    let available_characters = ''

    if (lowercase) {
        available_characters += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (uppercase) {
        available_characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (punctuation) {
        available_characters += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    }
    if (digits) {
        available_characters += '0123456789'
    }

    if (!available_characters) {
        return ''
    }
    
    let password = ''

    for (let i = 0; i < length; i += 1) {
        password += available_characters.charAt(Math.floor(Math.random() * available_characters.length))
    }

    return password
}

function main() {
    const generate_button = document.querySelector('#password_generator #generate_button')

    const password_h1 = document.querySelector('#password_generator #password_h1')

    const length_slider = document.querySelector('#password_generator #length_slider')
    const lowercase_checkbox = document.querySelector('#password_generator #lowercase_checkbox')
    const uppercase_checkbox = document.querySelector('#password_generator #uppercase_checkbox')
    const digits_checkbox = document.querySelector('#password_generator #digits_checkbox')
    const punctuation_checkbox = document.querySelector('#password_generator #punctuation_checkbox')

    generate_button.addEventListener('click', () => password_h1.innerText = generate_password(Number(length_slider.value), lowercase_checkbox.checked, uppercase_checkbox.checked, digits_checkbox.checked, punctuation_checkbox.checked))
}

window.addEventListener('load', main)