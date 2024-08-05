let back = document.getElementById('back')
let next = document.getElementById('next')

let mainImg = document.getElementById('mainImg')
let fullName = document.getElementById('fullName')
let jobName = document.getElementById('jobName')
let mainP = document.getElementById('mainP')

let personsArr = []

let persons = function (img, name, job, description) {
    this.img = img
    this.name = name
    this.job = job
    this.description = description
}

let person1 = new persons (
    "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B",
    "Nino Gvajaia",
    "FULL-STACK DEV",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat ipsam exercitationem animi tempora quidem praesentium"
)

let person2 = new persons (
    "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    "Eka Gvalia",
    "BACK-END DEV",
    "Ut fugiat ipsam exercitationem animi tempora quidem praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet."
)

let person3 = new persons (
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "Nana Kerdzaia",
    "FRONT-END DEV",
    "Ut fugiat ipsam exercitationem animi tempora quidem praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet."
)

let person4 = new persons (
    "20230125_211454.jpg",
    "Meli Roldan",
    "WEB DEVELOPER",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat ipsam exercitationem animi tempora quidem praesentium, in deleniti nam corrupti nemo."
)

personsArr.push(person1, person2, person3, person4)

mainImg.src = personsArr[0].img
fullName.innerHTML = personsArr[0].name
jobName.innerHTML = personsArr[0].job
mainP.innerHTML = personsArr[0].description

let count = 0 

function move () {
    count++
    if(count > personsArr.length - 1) {
        count = 0
    }
    mainImg.src = personsArr[count].img
    fullName.innerHTML = personsArr[count].name
    jobName.innerHTML = personsArr[count].job
    mainP.innerHTML = personsArr[count].description
}

next.addEventListener ('click', move)

back.addEventListener ('click', function() {
    count--
    if(count < 0) {
        count = personsArr.length - 1
    }
    mainImg.src = personsArr[count].img
    fullName.innerHTML = personsArr[count].name
    jobName.innerHTML = personsArr[count].job
    mainP.innerHTML = personsArr[count].description
})

//setInterval (move, 5000) // სლაიდი თვითონ გადადის და ასევე დაჭერისას ზემოთ ივენთ ლისენერით