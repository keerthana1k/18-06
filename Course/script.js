const myHeading = document.querySelector('h1')
myHeading.textContent = "Hello World!"

const changeName = document.querySelector('button')
changeName.onclick = () =>{
   let a =  prompt('Enter the Name: ')
   document.querySelector('h1').innerText = "Mozilla is cool " + a;
   console.log(a)
}
