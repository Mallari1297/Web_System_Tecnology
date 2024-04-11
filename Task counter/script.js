const taskCard = document.getElementById('taskCard')
const cardContainer = document.getElementById('card-container')
const scoreOutput = document.getElementById('scoreOutput')

var score = 0
var innerScore1 = 0
var innerScore2 = 0
var innerScore3 = 0
var innerScore4 = 0

// loop ng taskList array
for (let i = 0; i < taskList.length; i++) {
    const list = taskList[i];
    //add taskCard for each tasks
    cardContainer.innerHTML += `
            <div class="taskCard" id="card${list.id}">
                <h5><input type="checkbox" id="${list.title}" disabled>${list.title} — ${list.total} Points</h5>
                <div id="sub${list.id}"></div>
            </div>
        `
    //listID to insert checkbox on each taskCard
    const listID = document.getElementById(`sub${list.id}`)

    //subtask for-loop
    for (let j = 0; j < list.subtasks.length; j++) {
        const subtask = list.subtasks[j];

        //inserting checkbox on listID
        //data-point for scoring, data-complete 
        
        listID.innerHTML += `
        <p><input type="checkbox" class="${subtask.uid}" id="${subtask.title}" data-point="${subtask.points}" data-complete="${subtask.complete}">${subtask.title}</p>
        `
    }
}


const taskCheckbox1 = document.querySelectorAll('.sub1')
for (let k = 0; k < taskCheckbox1.length; k++) {
    const checkbox = taskCheckbox1[k];
    checkbox.addEventListener('input', function (e) {
        if (checkbox.checked == true) {
            score += Number(checkbox.getAttribute('data-point'))
            innerScore1 += Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
        } else {
            score -= Number(checkbox.getAttribute('data-point'))
            innerScore1 -= Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
            document.getElementById('card1').style.backgroundColor = 'white'
            document.getElementById('Task 1').disabled = true
            document.getElementById('Task 1').checked = false
        }

        if (innerScore1 == 100) {
            document.getElementById('card1').style.backgroundColor = 'red'
            document.getElementById('Task 1').disabled = false
        }
    })
}


const taskCheckbox2 = document.querySelectorAll('.sub2')
for (let k = 0; k < taskCheckbox2.length; k++) {
    const checkbox = taskCheckbox2[k];
    checkbox.addEventListener('input', function (e) {
        if (checkbox.checked == true) {
            score += Number(checkbox.getAttribute('data-point'))
            innerScore2 += Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
        } else {
            score -= Number(checkbox.getAttribute('data-point'))
            innerScore2 -= Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
            document.getElementById('card2').style.backgroundColor = 'white'
            document.getElementById('Task 2').disabled = true
            document.getElementById('Task 2').checked = false
        }

        if (innerScore2 == 100) {
            document.getElementById('card2').style.backgroundColor = 'blue'
            document.getElementById('Task 2').disabled = false
        }
    })
}


const taskCheckbox3 = document.querySelectorAll('.sub3')
for (let k = 0; k < taskCheckbox3.length; k++) {
    const checkbox = taskCheckbox3[k];
    checkbox.addEventListener('input', function (e) {
        if (checkbox.checked == true) {
            score += Number(checkbox.getAttribute('data-point'))
            innerScore3 += Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
        } else {
            score -= Number(checkbox.getAttribute('data-point'))
            innerScore3 -= Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
            document.getElementById('card3').style.backgroundColor = 'white'
            document.getElementById('Task 3').disabled = true
            document.getElementById('Task 3').checked = false
        }
        if (innerScore3 == 100) {
            document.getElementById('card3').style.backgroundColor = 'green'
            document.getElementById('Task 3').disabled = false
        }
    })
}


const taskCheckbox4 = document.querySelectorAll('.sub4')
for (let k = 0; k < taskCheckbox4.length; k++) {
    const checkbox = taskCheckbox4[k];
    checkbox.addEventListener('input', function (e) {
        if (checkbox.checked == true) {
            score += Number(checkbox.getAttribute('data-point'))
            innerScore4 += Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
        } else {
            score -= Number(checkbox.getAttribute('data-point'))
            innerScore4 -= Number(checkbox.getAttribute('data-point'))
            scoreOutput.innerText = score
            document.getElementById('card4').style.backgroundColor = 'white'
            document.getElementById('Task 4').disabled = true
            document.getElementById('Task 4').checked = false
        }
        if (innerScore4 == 100) {
            document.getElementById('card4').style.backgroundColor = 'yellow'
            document.getElementById('Task 4').disabled = false
        }
    })
}

