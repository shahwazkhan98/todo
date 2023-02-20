

let form = document.querySelector('form')
let nameInput = document.getElementById('name')
let mobileInput = document.getElementById('mobile')
let emailInput = document.getElementById('email')
let relationInput = document.getElementById('relation')
let outputInbox = document.getElementById('output')
// let passwordInput = document.getElementById('password')
// let relationInput = document.getElementById('relation')


form.addEventListener('submit' , submitEvent)

function submitEvent(e){
    e.preventDefault()
    document.querySelector('#output').style.display ='block'
    document.querySelector('form').style.display = "none"
    document.querySelector('#reload').style.display = 'block'

    let ul = document.createElement('div')



    outputInbox.appendChild(ul)

    let outputName = document.createElement('p')
    outputName.innerText = "Name : " + nameInput.value
    outputName.style.fontSize = ('18px')
    outputName.style.marginTop =('50px')
    // outputName.className = ('text-center')
    ul.appendChild(outputName)
    // outputName.className = "list-group-item mb-2 p-2"
     
    let outputMobile = document.createElement('p')
    outputMobile.innerText = "Mobile : " + mobileInput.value
    outputMobile.style.fontSize = ('18px')
    // outputMobile.className = ('text-center')
    ul.appendChild(outputMobile)

    let outputEmail = document.createElement('p')
    outputEmail.innerText = "Email : " + emailInput.value
    outputEmail.style.fontSize = ('18px')
    // outputEmail.className = ('text-center')
    ul.appendChild(outputEmail)

    let outputRelation = document.createElement('p')
    outputRelation.innerText = "Relation : " + relationInput.value
    outputRelation.style.fontSize = ('18px')
    // outputRelation.className = ('text-center')
    ul.appendChild(outputRelation)
    
    
    let whatsApp = document.createElement('a')
    // whatsApp.style.marginLeft = '20px'
    whatsApp.style.textDecoration = 'none'
    whatsApp.className = 'fa fa-whatsapp'
    whatsApp.style.marginTop =('70px')
    whatsApp.style.fontSize = '30px'
    whatsApp.style.color = "green"
    whatsApp.setAttribute("href", "https://wa.me/" + mobileInput.value) 
    ul.appendChild(whatsApp)


    let callMe = document.createElement('a')
    callMe.className = 'fa fa-phone'
    callMe.style.marginTop =('70px')
    callMe.style.marginLeft = '50px'
    callMe.style.textDecoration = 'none'
    callMe.style.fontSize = '30px'
    callMe.style.color = 'blue'
    callMe.setAttribute("href", "tel:" + mobileInput.value  )
    ul.appendChild(callMe)

    let clearBtn = document.createElement('button')
    clearBtn.innerText = 'Clear'
    clearBtn.className = 'cross btn btn-danger float-end'
    ul.appendChild(clearBtn)

    

    // console.log(div)
    form.reset()
    
}


outputInbox.addEventListener('click', deleteTodo)

function deleteTodo(e){
    if(e.target.className.includes("float-end"))
    {
        let ClearFun = e.target.parentElement
        console.log(ClearFun)
        outputInbox.removeChild(ClearFun)
    }
}
function reload(){
    location.reload()
}


