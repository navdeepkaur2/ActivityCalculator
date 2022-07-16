const weightInKg = 60;
class Activity {
    constructor(description, date, lengthOfTime, intensity, id) {
        this.description = description;
        this.date = date;
        this.lengthOfTime = lengthOfTime;
        this.intensity = intensity;
        this.id = id;
        const calPerHour = intensity * weightInKg;
        this.calories = calPerHour * lengthOfTime / 60;

    }
}

class ActivityTracker {
    constructor() {
        this.activities = [];
        this.activity_id = 1;
        this.length = 0;
    }
    addActivity(description, lengthOfTime, intensity) {
        this.activities.push(new Activity(description,(new Date()).toDateString(), lengthOfTime, intensity, this.activity_id++))
        this.length = this.activities.length;
        console.log(this.activities);
    }

    removeActivity(id) {
        this.activities = this.activities.filter((activity) => activity.id !== +id);
        this.length = this.activities.length;
    }

    totalTime() {
        return this.activities.reduce((previousValue, currentValue) =>
            previousValue + (+currentValue.lengthOfTime), 0);
    }

    totalCalories(){
        return this.activities.reduce((previousValue, currentValue) =>
        previousValue + (+currentValue.calories), 0);
    }
}

class UIcontroller {
    updateNumberOfActivities() {
        const totalNumerOfActivities = document.getElementsByClassName('totalNumerOfActivities')[0];
        totalNumerOfActivities.textContent = activityTracker.activities.length;
    }

    updateTotalTime() {
        const totalTimeEl = document.getElementsByClassName('totalTime')[0];
        let totalMinutes = activityTracker.totalTime()
        if (totalMinutes < 60) {
            totalTimeEl.textContent = totalMinutes + "mins";
        } else {
            totalTimeEl.textContent=Math.floor(totalMinutes / 60) + "hours" + (totalMinutes % 60) + "mins"
        }
    }
    
    updateTotalCalories(){
        const totalCaloriesEl=document.getElementsByClassName('totalCalories')[0];
        totalCaloriesEl.textContent=activityTracker.totalCalories();
    }

    updateAverageCalories(){
        const averageCaloriesEl=document.getElementsByClassName('averageCalories')[0];
        averageCaloriesEl.textContent=(activityTracker.totalCalories()/activityTracker.activities.length).toFixed(2);
    }

    updateTheList(){
        const tBodyEl=document.querySelector('tbody');
        tBodyEl.textContent='';
        activityTracker.activities.forEach(activity => {
            tBodyEl.insertAdjacentHTML('beforeend',`
            <tr class="activity" data-id="${activity.id}">
            <td class="description">${activity.description}</td>
            <td class="calories">${activity.calories}</td>
            <td class="time">${activity.lengthOfTime}</td>
            <td class="date">${activity.date}</td>
            <td class="close"><i class="las la-times"></i></i></td>
          </tr>
            `)
        });
    }

    updateTheDom(){
        this.updateNumberOfActivities();
        this.updateTotalTime();
        this.updateTotalCalories();
        this.updateAverageCalories();
        this.updateTheList();
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const descriptionInput = document.getElementById('description-input');
    const timeInput = document.getElementById('time-input');
    const intensityInput = document.getElementById('intensity-input');
    activityTracker.addActivity(descriptionInput.value, timeInput.value, intensityInput.value);
   ui.updateTheDom();
})

document.body.addEventListener('click',(e)=>{
    if(e.target.classList.contains('la-times')){
        activityTracker.removeActivity(e.target.closest('tr').dataset.id);
    console.log(e)
    ui.updateTheDom();
    }
})

const ui = new UIcontroller();
const activityTracker = new ActivityTracker();