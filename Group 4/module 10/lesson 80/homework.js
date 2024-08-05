result = ''

document.addEventListener('keypress', function (event) {
    console.log(event.key)

    if (event.key == "Enter") {
        result = result.slice(0, -1)
        document.getElementById("h1").innerHTML = result
    } else {
        result += event.key
        document.getElementById("h1").innerHTML = result
    }

    if (event.key === "w") {
        console.log("uhuuu")
    }
})
// ივენთ ლისენერი უნდა მივანიჭოთ ბოდის რომ გავიგოთ რომელ ღილაკს ვაჭერთ ქივორდზე