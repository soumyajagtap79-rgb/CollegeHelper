function showSubject(subject) {

    document.getElementById("message").innerHTML =
        "You selected: " + subject;

    document.getElementById("subjectTitle").innerHTML =
        subject;

    var topics = document.getElementById("topics");

    if (subject == "C++") {
        topics.innerHTML =
            "<li>Basics</li>" +
            "<li>Arrays</li>" +
            "<li>Functions</li>" +
            "<li>OOP</li>";
    }

    else if (subject == "Python") {
        topics.innerHTML =
            "<li>Variables</li>" +
            "<li>Loops</li>" +
            "<li>Functions</li>" +
            "<li>File Handling</li>";
    }

    else if (subject == "Data Structures") {
        topics.innerHTML =
            "<li>Linked List</li>" +
            "<li>Stack</li>" +
            "<li>Queue</li>" +
            "<li>Trees</li>";
    }

    else if (subject == "Computer Systems") {
        topics.innerHTML =
            "<li>CPU</li>" +
            "<li>Memory</li>" +
            "<li>Control Unit</li>" +
            "<li>Computer Organization</li>";
    }
}

function addTask() {

    var task = document.getElementById("taskInput").value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");

    var taskText = document.createElement("span");
    taskText.innerHTML = task;

    var doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";

    doneButton.onclick = function() {
        taskText.style.textDecoration = "line-through";
    };

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}

function calculateAttendance() {

    var total = Number(document.getElementById("totalClasses").value);
    var attended = Number(document.getElementById("attendedClasses").value);

    if (total <= 0 || attended < 0 || attended > total) {
        document.getElementById("attendanceResult").innerHTML =
            "Please enter valid numbers.";
        return;
    }

    var percentage = (attended / total) * 100;

    document.getElementById("attendanceResult").innerHTML =
        "Your attendance is " + percentage.toFixed(1) + "%";
}

function calculateSubjectAttendance(subject) {

    var total = document.getElementById(subject + "Total").value;
    var attended = document.getElementById(subject + "Attended").value;

    total = Number(total);
    attended = Number(attended);

    if (total <= 0 || attended < 0 || attended > total) {
        document.getElementById(subject + "Result").innerHTML =
            "Please enter valid numbers.";
        return;
    }

    var percentage = (attended / total) * 100;

    document.getElementById(subject + "Result").innerHTML =
        "Attendance: " + percentage.toFixed(1) + "%";
}
