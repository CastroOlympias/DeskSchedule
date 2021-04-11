//var saveBtn = document.getElementById('saveBtn')
var inputTask06 = document.getElementById('task-input-06')
var inputTask07 = document.getElementById('task-input-07')
var inputTask08 = document.getElementById('task-input-08')
var inputTask09 = document.getElementById('task-input-09')
var inputTask10 = document.getElementById('task-input-10')
var inputTask11 = document.getElementById('task-input-11')
var inputTask12 = document.getElementById('task-input-12')
var inputTask13 = document.getElementById('task-input-13')
var inputTask14 = document.getElementById('task-input-14')
var inputTask15 = document.getElementById('task-input-15')
var inputTask16 = document.getElementById('task-input-16')
var inputTask17 = document.getElementById('task-input-17')
var inputTask18 = document.getElementById('task-input-18')
var inputTask19 = document.getElementById('task-input-19')
var inputTask20 = document.getElementById('task-input-20')
var inputTask21 = document.getElementById('task-input-21')


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

    var task09 = document.getElementById('task-input-09').value;
    localStorage.setItem('task09', JSON.stringify(task09));

    var task10 = document.getElementById('task-input-10').value;
    localStorage.setItem('task10', JSON.stringify(task10));

    var task11 = document.getElementById('task-input-11').value;
    localStorage.setItem('task11', JSON.stringify(task11));

    var task12 = document.getElementById('task-input-12').value;
    localStorage.setItem('task12', JSON.stringify(task12));

    var task13 = document.getElementById('task-input-13').value;
    localStorage.setItem('task13', JSON.stringify(task13));

    var task14 = document.getElementById('task-input-14').value;
    localStorage.setItem('task14', JSON.stringify(task14));

    var task15 = document.getElementById('task-input-15').value;
    localStorage.setItem('task15', JSON.stringify(task15));

    var task16 = document.getElementById('task-input-16').value;
    localStorage.setItem('task16', JSON.stringify(task16));

    var task17 = document.getElementById('task-input-17').value;
    localStorage.setItem('task17', JSON.stringify(task17));

    var task18 = document.getElementById('task-input-18').value;
    localStorage.setItem('task18', JSON.stringify(task18));

    var task19 = document.getElementById('task-input-19').value;
    localStorage.setItem('task19', JSON.stringify(task19));

    var task20 = document.getElementById('task-input-20').value;
    localStorage.setItem('task20', JSON.stringify(task20));

    var task21 = document.getElementById('task-input-21').value;
    localStorage.setItem('task21', JSON.stringify(task21));
});

// This will make sure your tasks that are stored in local storage will be display on the webpage
var loadTasks = function() {
    task06 = JSON.parse(localStorage.getItem('task06'))
    inputTask06.textContent = task06;

    task07 = JSON.parse(localStorage.getItem('task07'))
    inputTask07.textContent = task07;

    task08 = JSON.parse(localStorage.getItem('task08'))
    inputTask08.textContent = task08;

    task09 = JSON.parse(localStorage.getItem('task09'))
    inputTask09.textContent = task09;

    task10 = JSON.parse(localStorage.getItem('task10'))
    inputTask10.textContent = task10;

    task11 = JSON.parse(localStorage.getItem('task11'))
    inputTask11.textContent = task11;

    task12 = JSON.parse(localStorage.getItem('task12'))
    inputTask12.textContent = task12;

    task13 = JSON.parse(localStorage.getItem('task13'))
    inputTask13.textContent = task13;

    task14 = JSON.parse(localStorage.getItem('task14'))
    inputTask14.textContent = task14;

    task15 = JSON.parse(localStorage.getItem('task15'))
    inputTask15.textContent = task15;

    task16 = JSON.parse(localStorage.getItem('task16'))
    inputTask16.textContent = task16;

    task17 = JSON.parse(localStorage.getItem('task17'))
    inputTask17.textContent = task17;

    task18 = JSON.parse(localStorage.getItem('task18'))
    inputTask18.textContent = task18;

    task19 = JSON.parse(localStorage.getItem('task19'))
    inputTask19.textContent = task19;

    task20 = JSON.parse(localStorage.getItem('task20'))
    inputTask20.textContent = task20;

    task21 = JSON.parse(localStorage.getItem('task21'))
    inputTask21.textContent = task21;

    
}  

loadTasks();

// var timeInput06 = 06
// console.log(timeInput06.diff(moment(), 'hours'));



console.log(inputTask06)










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
















  

 