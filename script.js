const task = [
    "500 Lights On/Head Count",
    "530 Meds/Breafast",
    "600 Laundry Pickup/Coolers filled",
    "615 secuirty check",
    "630 Pre-trial for latest bookings",
    "700 1st round on big docket prepare for court",
    "800 Court Round 1 leaves facility",
    "815 Security check",
    "830 2nd round on small docket prepare for court",
    "900 Court Round 2 leaves facility",
    "915 Security check",
    "930 1st round returns from court",
    "1000 2nd round returns from court",    
    "1015 Security check",
    "1030 Lower end rec and activities",
    "1100 Mail call",
    "1115 Security check",
    "1130 Lunch",
    "1200 Upper end rec and activities",
    "1215 Security check",
    "1300 Laundry drop off",
    "1315 Security check",
    "1400 Cell inspections",
    "1415 Security check",
    "1430-1500 upper end visitation",
    "1515 Security check",
    "1530-1600 lower end visitation",
    "1615 Security check",
    "1700 Dinner",
    "1715 Security check",
    "1800 lower end chapel",
    "1815 Security check",
    "1830 upper end chapel",
    "1900 Headcount/Inmate request reviewed",
    "1915 Security check",
    "1930 Med pass/Diabetic check",
    "2000 Lights out",
    "2015-415 Security check every hour"
];

const checklist = document.getElementById("checklist");

task.forEach((task) => {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let taskName = document.createElement("span");
    taskName.textContent = task;

    let btn =document.createElement("button");
    btn.textContent = "Not Completed";
    btn.classList.add("not-completed");
    btn.onclick = function() {
        if(btn.textContent === "Not Completed") {
            btn.textContent = "Completed";
            btn.classList.remove("not-completed");
            btn.classList.add("completed");
        }
        else {
            btn.textContent = "Not Completed";
            btn.classList.remove("completed");
            btn.classList.add("not-completed");
        }

    };

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(btn);   
    checklist.appendChild(taskDiv);
});
