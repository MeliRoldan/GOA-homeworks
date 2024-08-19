let user1 = {
    name1: "meli",
    surname1: "roldan"
}

let user2 = {
    name2: "nino",
    surname2: "nozadze"
}

let user3 = {
    name3: "nika",
    surname3: "chachava"
}

let users = Object.assign({}, user1, user2, user3)

console.log(users)