$(()=>{
    $('#header').load('header.html')
})

let dataTodo  = document.getElementById('dataTodo')

Object.keys(localStorage).forEach(data => {
    
    let tes = localStorage.getItem(data)
    let a = JSON.parse(tes)
    
    let showTodo = document.createElement('div')
    
    a.forEach(Todolist => {
        showTodo.innerHTML = 
        `
         <div class="bg-red-500">
            <p>${Todolist.titleTodo}</p>
            <p>${Todolist.commentTodo}</p>
            <button onclick="deleteTodo(${Todolist.id})">hapus todo</button>
           </div>
        `
    })  

    dataTodo.appendChild(showTodo)
    // dataTodo.innerHTML = a.map(Todolist => 
       
    //     `
    //    <div class="bg-red-500">
    //     <p>${Todolist.titleTodo}</p>
    //     <p>${Todolist.commentTodo}</p>
    //    </div>
    //     `
    // ).join("")

})

const deleteTodo = (id) => {

    localStorage.removeItem(id)
    setTimeout(() => {
        window.location.reload()
    }, 2000);

}