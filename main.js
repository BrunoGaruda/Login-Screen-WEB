const passwordInput = document.getElementById('password')
const eyeSvg = document.getElementById('eyeSvg')

function eyeClick() {
  let inputTypeIsPassword = passwordInput.type == 'password'
  if (inputTypeIsPassword) {
    showPassword()

    eyeSvg.setAttribute('src', 'assets/eye-off.svg')
  } else {
    hidePassword()
    eyeSvg.setAttribute('src', 'assets/eye.svg')
  }
}

function showPassword() {
  passwordInput.setAttribute('type', 'text')
  eyeSvg.setAttribute('src', 'assets/eye-off.svg')
}
function hidePassword() {
  passwordInput.setAttribute('type', 'password')
  eyeSvg.setAttribute('src', 'assets/eye.svg')
}
