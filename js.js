let usersArr = []

let numberOfUsers = usersArr.length
let trString;

let getId = x => document.getElementById(x);
let getSel = x => document.querySelector(x);

let login
let password
let email

let currentIndexUser = 0;

let userIndex;

getId('addUserBtn').onclick = function (event) {
    addUser()
}

function addUser() {
    login = f1.loginInput.value
    password = f1.paswordInput.value
    email = f1.emailInput.value
    if (login != '' & password != '' & email != '') {
        let userObj = {
            log: login,
            pas: password,
            em: email
        }
        usersArr.push(userObj)
        render()
        f1.reset()
    } else {
        alert('ЗАПОВНІТЬ ВСІ ПОЛЯ ФОРМИ !')
    }
}

function render() {

    trString = ''
    getId('tboby').innerHTML = ''

    for (let i = 0; i < usersArr.length; i++) {

        console.log('ЦИКЛ ПРАЦЮЄ')
        console.log(usersArr.length)

        trString = `
    <tr class="table_user">
                    <td>${i+1}</td>
                     <td>${usersArr[i].log}</td>
                     <td>${usersArr[i].pas}</td>
                   <td>${usersArr[i].em}</td>
                    <td>
                        <button type="button" onclick="editValueFun(${i})" value="${i+1}" class="editUserBtn btn btn-warning butMySize">Edit</button>
                    </td>
                    <td>
                        <button type="button" onclick="delValueFun(${i})" value="${i+1}" class="deleteUserBtn btn btn-danger butMySize" >Delete</button>
                    </td>
                </tr>
    
    `
        console.log(trString)
       
        getId('tboby').innerHTML += trString


    }
}


function editValueFun(ed){
    console.log(ed)
    let editUsArr = usersArr[ed]
    console.log(editUsArr.log, editUsArr.pas, editUsArr.em)
    f1.loginInput.value = editUsArr.log
    f1.paswordInput.value = editUsArr.pas
    f1.emailInput.value = editUsArr.em
    userIndex = ed;
    console.log('userIndex--', userIndex)

    getId('addUserBtn').style.display = 'none'
    getId('editUserBtn').style.display = 'block'

    getId('editUserBtn').onclick = function (ed) {
        
        console.log("КЛІК по кнопці EDIT USER")
        
        editUsArr.log = f1.loginInput.value
        editUsArr.pas = f1.paswordInput.value
        editUsArr.em = f1.emailInput.value

        usersArr.splice(userIndex, 1, editUsArr)
        console.log(usersArr)
        render()
        getId('editUserBtn').style.display = 'none'
        getId('addUserBtn').style.display = 'block'
        f1.reset()
    }
    
}


function delValueFun(ev){
    console.log('EV --' + ev)
    
        console.log('КЛІК ПО КНОПЦІ DELETE')
        console.log('ev.value ---- ' + this.value)
        
        console.log(usersArr)
        usersArr.splice(ev, 1)
        console.log(usersArr)
        
         render()
}