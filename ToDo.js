let todolist=[
  {
    item : 'first',
    duedate:''
  },
  {
    item : 'second',
    duedate:''
  }
];
displayItems()

function addToDo(){
  let inputelement = document.querySelector('#input')
  let todoelement = document.querySelector('#todo-date')
  let todoitem =inputelement.value
  let todoDate =todoelement.value
  todolist.push(
    {
      item : todoitem,
      duedate : todoDate
    }
  )
  inputelement.value=''
  todoelement.value=''
  displayItems()
}

function displayItems(){
  let display_Items = document.querySelector('.todo-container')
  let newhtml=''
  display_Items.innerText=''
  for(let i=0;i<todolist.length;i++){
    let {item, duedate } = todolist[i]
    newhtml += `
      <span class="spanId">${item}</span>
      <span class="spanId">${duedate}</span>
      <button class="Deletebtn" onclick = "todolist.splice(${i},1)
      displayItems()
      ">Delete</button>
    `
  }  
  display_Items.innerHTML=newhtml
}