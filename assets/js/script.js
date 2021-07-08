const currentTime = function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute = d.getMinutes();
    second = d.getSeconds();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [hour].join(':');
}

const time = currentTime(new Date());
// console.log(time)

const hourly = time;
// console.log(hourly)

// timeSchedule = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

timeSchedule = [10, 11, 12, 13, 14, 15, 16]



const scheduler = document.querySelector('.container')

const create = function () {
    for (let i = 0; i < timeSchedule.length; i++) {
        const scheduleRow = document.createElement('div')
        scheduleRow.className = 'row'
        scheduler.appendChild(scheduleRow)

        const scheduleColSm1 = document.createElement('div')
        scheduleColSm1.className = 'col-sm-1 hour'
        scheduleColSm1.className = 'col-sm-1 hour'
        scheduleRow.appendChild(scheduleColSm1)

        const scheduleTimeBlock = document.createElement('div')
        scheduleTimeBlock.className = 'time-block'
        scheduleTimeBlock.id = timeSchedule[i]
        scheduleTimeBlock.textContent = `${timeSchedule[i]}:00`
        scheduleColSm1.appendChild(scheduleTimeBlock)

        const scheduleTimeText = document.createElement('textarea')
        scheduleTimeText.className = 'col-sm-10'
        scheduleTimeText.id = `storage-${timeSchedule[i]}`
        scheduleRow.appendChild(scheduleTimeText)

        const saveBtn = document.createElement('button')
        saveBtn.className = 'col-sm-1 saveBtn'
        scheduleRow.appendChild(saveBtn)

        const lockIcon = document.createElement('span')
        lockIcon.className = 'oi oi-lock-locked'
        saveBtn.appendChild(lockIcon)


        const expired = function () {

            // math formula to set 3 conditions, of passed due, within 2 hours and beyond, to set element coloration of red, yellow and green

            // console.log(`Current hour ${hourly}:00`)
            const whenExpires = scheduleTimeBlock.id - hourly
            // console.log(`Next scheduledd event ${scheduleTimeBlock.id}:00`)
            // console.log(`Hours until this expires ${whenExpires}:00`)

            if (whenExpires <= 0) {
                // alert(`${scheduleTimeBlock.id} is passed due`)
                scheduleTimeText.setAttribute("style", "background-color: red;");
            }
            else if (whenExpires <= 3) {
                scheduleTimeText.setAttribute("style", "background-color: yellow;");
            } else {
                // alert(`${scheduleTimeBlock.id} is comming up`)
                scheduleTimeText.setAttribute("style", "background-color: green;");
            }
        }
        expired()

        // var inputTask06 = document.getElementById(`storage-${timeSchedule[i]}`).value
        // var inputTask07 = document.getElementById('storage-10').value
        // console.log(inputTask06)
        // localStorage.setItem(`storage-${timeSchedule[i]}`, JSON.stringify(inputTask06));

        // inputTask06 = JSON.parse(localStorage.getItem('task06'))
        // console.log(inputTask07)
        // console.log(inputTask06)
        // const save = document.getElementById(`${timeSchedule[i]}`).addEventListener(`${timeSchedule[i]}`, saveStorage)
        // console.log(inputTask06)

        $(this).click(function () {
           
            test = document.getElementById(`storage-${timeSchedule[i]}`).value
            // console.log(inputTask06)
            localStorage.setItem(`storage-${timeSchedule[i]}`, JSON.stringify(test));
            console.log(test)
            


        //    var showTasks = function(test) {
        //         test = JSON.parse(localStorage.getItem(`storage-${timeSchedule[i]}`))
        //         scheduleTimeText.id.textContent = test;
        //         console.log(test)
        //         return test
        //     }
            
            
            
            console.log('hey')
            
        })
        console.log('ho')
        // task06 = JSON.parse(localStorage.getItem(`storage-${timeSchedule[i]}`)).value
        // inputTask06.textContent = task06;


        // var showTasks = function() {

        //     var inputTask06 = document.getElementById(`storage-${timeSchedule[i]}`).value
        //     test = JSON.parse(localStorage.getItem(`storage-10`))
        //     inputTask06.textContent = test;
        //     console.log(test)
            
        // }
        
        var showTasks = function() {
            var inputTask06 = document.getElementById(`storage-10`)
            
            test = JSON.parse(localStorage.getItem(`storage-10`))
            inputTask06.textContent = test;
            console.log(inputTask06)
            // return test
        }
    }
 
    showTasks()
    
}




create()
// console.log(test)













// $(this).click(function (event) {
//     event.preventDefault()
//     var scheduleTimeText = document.getElementById(`storage-${timeSchedule[i]}`).value
//     console.log(inputTask06)
//     localStorage.setItem(`storage-${timeSchedule[i]}`, JSON.stringify(scheduleTimeText));
//     console.log(inputTask06)

//     task06 = JSON.parse(localStorage.getItem(`storage-${timeSchedule[i]}`))
//     scheduleTimeText.textContent = `storage-${timeSchedule[i]}`;
// })











// task06 = JSON.parse(localStorage.getItem('task06'))
// inputTask06.textContent = task06;

// $(this).click(function(event) {
//     event.preventDefault()
//     var inputTask06 = document.getElementById(`storage-${timeSchedule[i]}`).value
//     console.log(inputTask06)
//     localStorage.setItem('Testy', JSON.stringify(inputTask06));
//     console.log(inputTask06)
// })

// console.log(timeSchedule)
// console.log(`storage-${i}`)








// expired()
// const scheduleRow = document.createElement('div')
// scheduleRow.className = 'row'
// scheduler.appendChild(scheduleRow)

// const scheduleColSm1 = document.createElement('div')
// scheduleColSm1.className = 'col-sm-1 hour'
// scheduleColSm1.className = 'col-sm-1 hour'
// scheduleRow.appendChild(scheduleColSm1)

// const scheduleTimeBlock = document.createElement('div')
// scheduleTimeBlock.className = 'time-block'
// scheduleTimeBlock.textContent = timeSchedule[1]
// scheduleColSm1.appendChild(scheduleTimeBlock)

// const scheduleTimeText = document.createElement('textarea')
// scheduleTimeText.className = 'col-sm-10'
// scheduleRow.appendChild(scheduleTimeText)

// const saveBtn = document.createElement('button')
// saveBtn.className = 'col-sm-1 saveBtn'
// scheduleRow.appendChild(saveBtn)







































//var saveBtn = document.getElementById('saveBtn') This is an old method to save to local storage

// task input variables for collecting tasks inputs from user
// var inputTask06 = document.getElementById('task-input-06')
// var inputTask07 = document.getElementById('task-input-07')
// var inputTask08 = document.getElementById('task-input-08')
// var inputTask09 = document.getElementById('task-input-09')
// var inputTask10 = document.getElementById('task-input-10')
// var inputTask11 = document.getElementById('task-input-11')
// var inputTask12 = document.getElementById('task-input-12')
// var inputTask13 = document.getElementById('task-input-13')
// var inputTask14 = document.getElementById('task-input-14')
// var inputTask15 = document.getElementById('task-input-15')
// var inputTask16 = document.getElementById('task-input-16')
// var inputTask17 = document.getElementById('task-input-17')
// var inputTask18 = document.getElementById('task-input-18')
// var inputTask19 = document.getElementById('task-input-19')
// var inputTask20 = document.getElementById('task-input-20')
// var inputTask21 = document.getElementById('task-input-21')
// // console.log(inputTask20)


// var auditTime = function () {

//     inputTask06.setAttribute("style", "background-color: green;");
//     //alert("short on time")
// }



//saveBtn.addEventListener('click', function(event) { $(this).click works better to auto save after edit one click outside of box
// This will save the userinput task item into local storage
// $(this).click(function (event) {
//     event.preventDefault();
//     // Saves/Sets to local storage 06:00 - 21:00 task inputs
//     // 06:00
//     var task06 = document.getElementById('task-input-06').value;
//     localStorage.setItem('task06', JSON.stringify(task06));
//     // 07:00
//     var task07 = document.getElementById('task-input-07').value;
//     localStorage.setItem('task07', JSON.stringify(task07));
//     // 08:00
//     var task08 = document.getElementById('task-input-08').value;
//     localStorage.setItem('task08', JSON.stringify(task08));
//     // 09:00
//     var task09 = document.getElementById('task-input-09').value;
//     localStorage.setItem('task09', JSON.stringify(task09));
//     // 10:00
//     var task10 = document.getElementById('task-input-10').value;
//     localStorage.setItem('task10', JSON.stringify(task10));
//     // 11:00
//     var task11 = document.getElementById('task-input-11').value;
//     localStorage.setItem('task11', JSON.stringify(task11));
//     // 12:00
//     var task12 = document.getElementById('task-input-12').value;
//     localStorage.setItem('task12', JSON.stringify(task12));
//     // 13:00
//     var task13 = document.getElementById('task-input-13').value;
//     localStorage.setItem('task13', JSON.stringify(task13));
//     // 14:00
//     var task14 = document.getElementById('task-input-14').value;
//     localStorage.setItem('task14', JSON.stringify(task14));
//     // 15:00
//     var task15 = document.getElementById('task-input-15').value;
//     localStorage.setItem('task15', JSON.stringify(task15));
//     // 16:00
//     var task16 = document.getElementById('task-input-16').value;
//     localStorage.setItem('task16', JSON.stringify(task16));
//     // 17:00
//     var task17 = document.getElementById('task-input-17').value;
//     localStorage.setItem('task17', JSON.stringify(task17));
//     // 18:00
//     var task18 = document.getElementById('task-input-18').value;
//     localStorage.setItem('task18', JSON.stringify(task18));
//     // 19:00
//     var task19 = document.getElementById('task-input-19').value;
//     localStorage.setItem('task19', JSON.stringify(task19));
//     // 20:00
//     var task20 = document.getElementById('task-input-20').value;
//     localStorage.setItem('task20', JSON.stringify(task20));
//     // 21:00
//     var task21 = document.getElementById('task-input-21').value;
//     localStorage.setItem('task21', JSON.stringify(task21));
// });

// This will make sure your tasks that are stored in local storage will be display on the webpage
// var loadTasks = function () {
//     // Retrieves/Gets from local storage 06-00 - 21:00 tasks inputs
//     // 06:00
//     task06 = JSON.parse(localStorage.getItem('task06'))
//     inputTask06.textContent = task06;
//     // 07:00
//     task07 = JSON.parse(localStorage.getItem('task07'))
//     inputTask07.textContent = task07;
//     // 08:00
//     task08 = JSON.parse(localStorage.getItem('task08'))
//     inputTask08.textContent = task08;
//     // 09:00
//     task09 = JSON.parse(localStorage.getItem('task09'))
//     inputTask09.textContent = task09;
//     // 10:00
//     task10 = JSON.parse(localStorage.getItem('task10'))
//     inputTask10.textContent = task10;
//     // 11:00
//     task11 = JSON.parse(localStorage.getItem('task11'))
//     inputTask11.textContent = task11;
//     // 12:00
//     task12 = JSON.parse(localStorage.getItem('task12'))
//     inputTask12.textContent = task12;
//     // 13:00
//     task13 = JSON.parse(localStorage.getItem('task13'))
//     inputTask13.textContent = task13;
//     // 14:00
//     task14 = JSON.parse(localStorage.getItem('task14'))
//     inputTask14.textContent = task14;
//     // 15:00
//     task15 = JSON.parse(localStorage.getItem('task15'))
//     inputTask15.textContent = task15;
//     // 16:00
//     task16 = JSON.parse(localStorage.getItem('task16'))
//     inputTask16.textContent = task16;
//     // 17:00
//     task17 = JSON.parse(localStorage.getItem('task17'))
//     inputTask17.textContent = task17;
//     // 18:00
//     task18 = JSON.parse(localStorage.getItem('task18'))
//     inputTask18.textContent = task18;
//     // 19:00
//     task19 = JSON.parse(localStorage.getItem('task19'))
//     inputTask19.textContent = task19;
//     // 20:00
//     task20 = JSON.parse(localStorage.getItem('task20'))
//     inputTask20.textContent = task20;
//     // 21:00
//     task21 = JSON.parse(localStorage.getItem('task21'))
//     inputTask21.textContent = task21;
// }

// loadTasks();


// experiment with the code below to try and implement features for having warning colors of due items

// auditTime();

// var inputTask06 = '06:00';
// var militaryTime = 'hh:mm';
// var convertedTime = moment(inputTask06, militaryTime);


// console.log(convertedTime.format('HH:mm'));

// console.log(convertedTime.toNow());
// console.log(convertedTime.diff(moment(), 'hour'));





// console.log(timeAudit)
// console.log(inputTask06);