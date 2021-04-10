// Save task input into local storage
var taskInput = document.querySelector('#task-input');
var saveBtn = document.querySelector('.saveBtn')
var userEmailSpan = document.querySelector('#user-email');

//console.log(taskInput);

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
  };
  
  renderLastRegistered();
  
  saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
  
    var task = document.querySelector('#task-input').value;

  
    
      // Save email and password to localStorage using `setItem()`
      localStorage.setItem('task', task);
   
      // Render the last registered email and password
      renderLastRegistered();
    
  });




























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
















  

 