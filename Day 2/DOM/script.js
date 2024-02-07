// Add functionality
document.getElementById("add").onclick = () => {
    let value = document.getElementById("counter").innerHTML
    value = Number(value)
    value = value + 1
    document.getElementById("counter").innerHTML = value
}

// Subtract functionality
document.getElementById("sub").onclick = () => {
    let value = document.getElementById("counter").innerHTML
    value = Number(value)
    if(value>0){
        value = value - 1
    }
    document.getElementById("counter").innerHTML = value
}

// Change functionality
document.getElementById("change").onclick = () => {
    let value = window.prompt("Add the image URL", "https://pbs.twimg.com/media/GFAwUcbWkAAVbkg?format=jpg&name=large")
    document.getElementById("image").src = value
}

// Form submit functionality
document.getElementById("form").addEventListener("submit", function(){
    let name = document.getElementById("name").value
    let level = document.getElementById("level").value
    let phone = document.getElementById("phone").value
    let uId = document.getElementById("uniId").value
    alert(`
        name: ${name}
        level: ${level}
        phone number: ${phone}
        University ID: ${uId}
    `)
})