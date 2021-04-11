//var saveBtn = document.getElementById('saveBtn')
var inputTaskSix = document.getElementById('task-input-06')
var inputTaskSeven = document.getElementById('task-input-07')



//saveBtn.addEventListener('click', function(event) { $(this).click works better to auto save after edit
$(this).click(function(event) {
    event.preventDefault();
  
    // This will save the userinput task item into local storage
    var task06 = document.getElementById('task-input-06').value;
    localStorage.setItem('task06', JSON.stringify(task06));

    var task07 = document.getElementById('task-input-07').value;
    localStorage.setItem('task07', JSON.stringify(task07));
});

// This will make sure your tasks stored in local storage will be display on the webpage
var loadTasks = function() {
    task06 = JSON.parse(localStorage.getItem('task06'))
    inputTaskSix.textContent = task06;

    task07 = JSON.parse(localStorage.getItem('task07'))
    inputTaskSeven.textContent = task07;
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
















  

 