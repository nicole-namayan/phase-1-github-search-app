const init = ()=>{
    const userForm = document.getElementById('github-form')
   
    userForm.addEventListener('submit',(event) =>{
    event.preventDefault();

    let userInput = event.target.search.value
    getUsers(userInput)

    })

}

const configs = {
    method: 'GET', 
    headers:
}

const getUsers = (user) => {
    console.log('something',user);
    fetch(`${baseUrl}${user}`)
    .then((res) => res.json())
    .then((data) => renderItems(data))
}

const renderItems = (data) => {
    let ul = document.getElementById(user-list)

    data.forEach(element => {
        console.log('abc',element);
        let li = document.createElement('li')
        li.textContent = 
    })
}