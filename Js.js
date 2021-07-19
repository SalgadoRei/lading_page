const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
e.preventDefault()
let nome = document.getElementById('nome').value
let email = document.getElementById('email').value
let data = {
  nome,
  email,
}
  let convertDate = JSON.stringify(data)

  localStorage.setItem('lead', convertDate)

  let content = document.getElementById('content')
  content.innerText = 'carregando...'

  setTimeout(()=>{
    content.innerText = 'Pronto!'
  },1000)
})