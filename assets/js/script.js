//var saveBtn = document.getElementById('saveBtn')
var inputTask06 = document.getElementById('task-input-06')
var inputTask07 = document.getElementById('task-input-07')
var inputTask08 = document.getElementById('task-input-08')

//saveBtn.addEventListener('click', function(event) { $(this).click works better to auto save after edit
// This will save the userinput task item into local storage
$(this).click(function(event) {
    event.preventDefault();
  
    var task06 = document.getElementById('task-input-06').value;
    localStorage.setItem('task06', JSON.stringify(task06));

    var task07 = document.getElementById('task-input-07').value;
    localStorage.setItem('task07', JSON.stringify(task07));

    var task08 = document.getElementById('task-input-08').value;
    localStorage.setItem('task08', JSON.stringify(task08));
});

// This will make sure your tasks stored in local storage will be display on the webpage
var loadTasks = function() {
    task06 = JSON.parse(localStorage.getItem('task06'))
    inputTask06.textContent = task06;

    task07 = JSON.parse(localStorage.getItem('task07'))
    inputTask07.textContent = task07;

    task08 = JSON.parse(localStorage.getItem('task08'))
    inputTask08.textContent = task08;
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
















  

 