$(() => {
    $('#header').load("header.html")
})

const addSession = () =>{


    //Take Value From Title and Comment To Do
    let titleTodo = document.getElementById('titleTodo').value.trim()
    let commentTodo = document.getElementById('commentTodo').value.trim()

    //Make key as current Date
    let currentDate = new Date()
    let currentTodo = currentDate.getTime()

    //Make To Do List as Array
    let TodoList = {
        "id" : currentTodo,
        "titleTodo" : titleTodo,
        "commentTodo" : commentTodo
    }

    //Add To Session Storage
    sessionStorage.setItem(`${currentTodo}`, JSON.stringify(TodoList))
}