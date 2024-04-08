const addTask = document.getElementById("boton-plus")
const inputTask = document.getElementById("text-tarea")
const contenedorTareas = document.getElementById("contenedor-tareas")


function add(e){
    e.preventDefault()

    const inputTaskValue = inputTask.value;
    const li = document.createElement("li")
    li.classList.add("lista-js")
    li.append(inputTaskValue)
    contenedorTareas.appendChild(li)
    
    const botonCheck = document.createElement("button")
    botonCheck.classList.add("boton-boots", "bi", "bi-check-circle")
    
    const botonDelete = document.createElement("button")
    botonDelete.classList.add("boton-boots", "bi", "bi-trash")

    const botones = document.createElement("div")
    botones.append(botonCheck,botonDelete)

    li.insertBefore(botones, li.nextSibling)

    inputTask.value=""

    botonDelete.addEventListener("click", (e)=>{
        e.preventDefault()
        li.remove()
    })

    botonCheck.addEventListener("click", (e)=>{
        // e.preventDefault()
    
        li.style.backgroundColor= "#7ff233"
        li.style.textDecoration="line-through"
    })
   
}


addTask.addEventListener("click",add)

inputTask.addEventListener("keyup", (e)=>{

    if(e.key ==="Enter"){
        add(e)
    }
})