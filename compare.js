function CompareTodos(check) {
    //Compare if there is already task in local storage
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  console.log(todos);

   let item=todos.find(items);
      function items(value, index, array)
      
    { 
        if(value === check)
        {
            alert("Task already assigned");
        }
       
    }
}
//CompareTodos("one");

       
    