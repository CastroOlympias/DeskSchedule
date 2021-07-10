// const currentDateTime = function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear(),
//         hour = d.getHours(),
//         minute = d.getMinutes();
//     second = d.getSeconds();

//     if (month.length < 2)
//         month = '0' + month;
//     if (day.length < 2)
//         day = '0' + day;

//     return [month, day, year].join('/') + [- hour, minute].join(':')
// }


const dateTimeNow = moment().format('MMMM Do YYYY')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

function placeDateTime() {
    const header = document.querySelector('#currentDay')


    header.textContent = dateTimeNow
}

// const dateTime = currentDateTime(new Date());
// console.log(time)

// const dateHours = dateTime;
// console.log(dateHours)

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

placeDateTime()

const hourly = time;
console.log(hourly)

timeSchedule = [06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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
            // console.log(`Next scheduled event ${scheduleTimeBlock.id}:00`)
            // console.log(`Hours until this expires ${whenExpires}:00`)

            if (whenExpires < 0) {
                // alert(`${scheduleTimeBlock.id} is passed due`)
                scheduleTimeText.setAttribute("style", "background-color: red;");
            }
            else if (whenExpires <= 0) {
                 // alert(`${scheduleTimeBlock.id} is due now)
                scheduleTimeText.setAttribute("style", "background-color: grey;");
            }
            else if (whenExpires <= 3) {
                scheduleTimeText.setAttribute("style", "background-color: yellow;");
                // alert(`${scheduleTimeBlock.id} is coming up)
            }
            else {
                // alert(`${scheduleTimeBlock.id} you have plenty of time`)
                scheduleTimeText.setAttribute("style", "background-color: green;");
            }
        }
        expired()

        $(this).click(function () {

            taskValue = document.getElementById(`storage-${timeSchedule[i]}`).value
            localStorage.setItem(`storage-${timeSchedule[i]}`, JSON.stringify(taskValue));
            console.log(taskValue)

        })

        // can't seem to get the element id loop correctly so the get storage loop can take the key value pair and pair them with the right element, the first time slot storage value insterts into the last looped created element, so I will get the element, not using the template literal loop mothod. It's more code and less dry, but at least I can match the key value pair with the right element.
        var showTasks = function () {

            const TaskInputSix = document.getElementById(`storage-6`)
            getTaskSix = JSON.parse(localStorage.getItem(`storage-6`))
            TaskInputSix.textContent = getTaskSix;

            const TaskInputSeven = document.getElementById(`storage-7`)
            getTaskSeven = JSON.parse(localStorage.getItem(`storage-7`))
            TaskInputSeven.textContent = getTaskSeven;

            const TaskInputEight = document.getElementById(`storage-8`)
            getTaskEight = JSON.parse(localStorage.getItem(`storage-8`))
            TaskInputEight.textContent = getTaskEight;

            const TaskInputNine = document.getElementById(`storage-9`)
            getTaskNine = JSON.parse(localStorage.getItem(`storage-9`))
            TaskInputNine.textContent = getTaskNine;

            const TaskInputTen = document.getElementById(`storage-10`)
            getTaskTen = JSON.parse(localStorage.getItem(`storage-10`))
            TaskInputTen.textContent = getTaskTen;

            const TaskInputEleven = document.getElementById(`storage-11`)
            getTaskEleven = JSON.parse(localStorage.getItem(`storage-11`))
            TaskInputEleven.textContent = getTaskEleven;

            const TaskInputTwelve = document.getElementById(`storage-12`)
            getTaskTwelve = JSON.parse(localStorage.getItem(`storage-12`))
            TaskInputTwelve.textContent = getTaskTwelve;

            const TaskInputThirteen = document.getElementById(`storage-13`)
            getTaskThirteen = JSON.parse(localStorage.getItem(`storage-13`))
            TaskInputThirteen.textContent = getTaskThirteen;

            const TaskInputForteen = document.getElementById(`storage-14`)
            getTaskForteen = JSON.parse(localStorage.getItem(`storage-14`))
            TaskInputForteen.textContent = getTaskForteen;

            const TaskInputFifteen = document.getElementById(`storage-15`)
            getTaskFifteen = JSON.parse(localStorage.getItem(`storage-15`))
            TaskInputFifteen.textContent = getTaskFifteen;

            const TaskInputSixteen = document.getElementById(`storage-16`)
            getTaskSixteen = JSON.parse(localStorage.getItem(`storage-16`))
            TaskInputSixteen.textContent = getTaskSixteen;

            const TaskInputSeventeen = document.getElementById(`storage-17`)
            getTaskSeventeen = JSON.parse(localStorage.getItem(`storage-17`))
            TaskInputSeventeen.textContent = getTaskSeventeen;

            const TaskInputEighteen = document.getElementById(`storage-18`)
            getTaskEighteen = JSON.parse(localStorage.getItem(`storage-18`))
            TaskInputEighteen.textContent = getTaskEighteen;

            const TaskInputNineteen = document.getElementById(`storage-19`)
            getTaskNineteen = JSON.parse(localStorage.getItem(`storage-19`))
            TaskInputNineteen.textContent = getTaskNineteen;

            const TaskInputTwenty = document.getElementById(`storage-20`)
            getTaskTwenty = JSON.parse(localStorage.getItem(`storage-20`))
            TaskInputTwenty.textContent = getTaskTwenty;
        }
    }
    showTasks()
}
create()