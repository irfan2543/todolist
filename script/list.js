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
         <div class="bg-gray-300 m-10 w-52 h-80 flex flex-col text-wrap break-words rounded-xl">
            <h1 class="mx-2 text-2xl font-bold">${Todolist.titleTodo}</h1>
            <hr class="border-t-4 border-black my-5">
            <p class="text-lg bg-gray-300 h-52 font-serif font-medium mx-2 text-justify">${Todolist.commentTodo}</p>
            <button type="button" onclick="deleteTodo(${Todolist.id})" class="my-5 mx-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 
            focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center ">Telah Dikerjakan</button>
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