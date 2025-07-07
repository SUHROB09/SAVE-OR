
const div = document.getElementById("div")
const input = document.getElementById('inputvalue')
const input2 = document.getElementById('inputvalue2')

const buttn2 = document.getElementById('button2')

function save() {

    let user = {
        name: input2.value,
        age: input.value
    }
    fetch("http://localhost:3000/user", {
        method: "POST",
        body: JSON.stringify(user)
    })
    console.log(user);
}
buttn2.addEventListener("click", save)




