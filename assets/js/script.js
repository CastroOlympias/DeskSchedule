var saveBtn = document.querySelector('.saveBtn')
var inputTask = document.querySelector('#task-input')


    //saveBtn.addEventListener('click', function(event) { $(this) click works better
    $(this).click(function(event) {
    event.preventDefault();
  
    var task = document.querySelector('#task-input').value;

  
    
      // Save email and password to localStorage using `setItem()`
      localStorage.setItem('task', JSON.stringify(task));
  });


var loadTasks = function() {
    task = JSON.parse(localStorage.getItem('task'))
    inputTask.textContent = task;
    
    
}  

loadTasks();

















// var saveBtn = document.querySelector('.saveBtn')
// var inputTask = document.querySelector('#task-input')

//   saveBtn.addEventListener('click', function(event) {
//     event.preventDefault();
  
//     var task = document.querySelector('#task-input').value;

  
    
//       // Save email and password to localStorage using `setItem()`
//       localStorage.setItem('task', JSON.stringify(task));
//   });


// var loadTasks = function() {
//     task = JSON.parse(localStorage.getItem('task'))
//     inputTask.textContent = task;
    
    
// }  

// loadTasks();















// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(taskInput));
//   };



  

// $(".saveBtn").click(function(){
//     alert("The paragraph was clicked.");
    
//     var taskInput = document.querySelector('#task-input');
//         //Save email and password to localStorage using `setItem()`
//         localStorage.setItem('tasks', taskInput);
       
//     saveTasks()
//     var taskInput = localStorage.getItem("task-input");
    
//   });

  





//   saveButton.addEventListener('click', function(event) {
//     event.preventDefault();
  
//     var email = document.querySelector('#email').value;
//     var password = document.querySelector('#password').value;
  
    
  
//       // Save email and password to localStorage using `setItem()`
//       localStorage.setItem('email', email);
//       localStorage.setItem('password', password);
//       // Render the last registered email and password
//       renderLastRegistered();
    
//   });
















  

 