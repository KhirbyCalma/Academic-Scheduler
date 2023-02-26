const monthNames = {0 : "January", 
                    1 : "February",
                    2 : "March",
                    3 : "April",
                    4 : "May",
                    5 : "June",
                    6 : "July", 
                    7 : "August",
                    8 : "September", 
                    9 : "October",
                    10 : "November",
                    11 : "December"
};

const dayNames = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday'
};

let todayDate = new Date();
let day = todayDate.getDate();
let month = monthNames[todayDate.getMonth()];
let year = todayDate.getFullYear();
let dayName = dayNames[todayDate.getDay()];

const currentDate = document.getElementById('currentDate');
currentDate.textContent = `${dayName} | ${month} ${day}, ${year}`;
