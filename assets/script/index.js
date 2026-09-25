function signup(e) {
    e.preventDefault()
    let username = document.getElementById("username").value
    let userEmail = document.getElementById("email").value
    let userPass = document.getElementById("password").value

    alert("signup")
    console.log(userEmail, userPass, username);


    // storing data in local storage
    localStorage.setItem("username", username)
    localStorage.setItem("useremail", userEmail)
    localStorage.setItem("userPass", userPass)


    // moving to login page
    window.location.href = "../../index.html"
}



// login function 
function loginFun(e) {
    e.preventDefault()

    let userEmail = document.getElementById("useremail").value
    let userPass = document.getElementById("userpass").value

    let localEmail = localStorage.getItem("useremail")
    let localPass = localStorage.getItem("userPass")

    if (userEmail == localEmail && userPass == localPass) {
        alert("login successfully")
        window.location.href = "./assets/pages/home.html"
    }

    else {
        alert("login failed")
    }

}



document.getElementById("welcome").innerHTML = `welcome to home page ${localStorage.getItem("username")}`


const products = [
    {
        "id": 1,
        "name": "Samsung Galaxy A15",
        "category": "Mobile",
        "price": "15999",
        "image": "../images/samsung.png",
        "description": "Affordable smartphone with a bright display and reliable performance."
    },
    {
        "id": 2,
        "name": "Acer Aspire 5",
        "category": "Laptop",
        "price": "52999",
        "image": "../images/acer.png",
        "description": "Everyday laptop suitable for study, work and browsing."
    },
    {
        "id": 3,
        "name": "Sony WH-CH520",
        "category": "Headphones",
        "price": "4499",
        "image": "../images/sony.png",
        "description": "Comfortable wireless headphones for music and calls."
    },
    {
        "id": 4,
        "name": "Noise ColorFit Watch",
        "category": "Smart Watch",
        "price": "2999",
        "image": "../images/watch.png",
        "description": "Smart watch with fitness tracking and everyday notifications."
    },
    {
        "id": 5,
        "name": "Logitech K380 Keyboard",
        "category": "Keyboard",
        "price": "3295",
        "image": "https://placehold.co/600x450?text=Keyboard",
        "description": "Compact wireless keyboard for desktops, tablets and laptops."
    },
    {
        "id": 6,
        "name": "Logitech M331 Mouse",
        "category": "Mouse",
        "price": "1599",
        "image": "https://placehold.co/600x450?text=Wireless+Mouse",
        "description": "Quiet wireless mouse with comfortable everyday control."
    },
    {
        "id": 7,
        "name": "JBL Go 3 Speaker",
        "category": "Speaker",
        "price": "3499",
        "image": "https://placehold.co/600x450?text=JBL+Speaker",
        "description": "Portable Bluetooth speaker with compact design and clear sound."
    },
    {
        "id": 8,
        "name": "Lenovo Tab M10",
        "category": "Tablet",
        "price": "18999",
        "image": "https://placehold.co/600x450?text=Lenovo+Tablet",
        "description": "Large-screen tablet for learning, entertainment and browsing."
    },
    {
        "id": 9,
        "name": "Canon EOS 1500D",
        "category": "Camera",
        "price": "42999",
        "image": "https://placehold.co/600x450?text=Canon+Camera",
        "description": "Beginner-friendly DSLR camera for photography and video."
    },
    {
        "id": 10,
        "name": " Anker PowerCore 10000",
        "category": "Power Bank",
        "price": "2499",
        "image": "https://placehold.co/600x450?text=Power+Bank",
        "description": "Compact power bank for convenient charging on the go."
    }
];



function showData (){
    let data=""
    products.map((value)=>(
            data += `
            <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <img src="${value.image}" height="200px" width="100%" alt="">
                <div class="card-body">
                    <h3>name :${value.name}</h3>
                    <h3>price :${value.price}</h3>
                    <button class="btn btn-info">cart</button>
                </div>
            </div>
        </div>
            `
    ))

    document.getElementById("homeData").innerHTML = data
}
showData()



// search 

function searchFun(e){
    e.preventDefault()

    let searchData = document.getElementById("searchInput").value

    let searchOutput=products.filter((v)=> v.name.toLowerCase().trim().includes(searchData.toLowerCase().trim()) || v.price.includes(searchData.trim()))

    console.log("searchOutput",searchOutput);


     let data=""
    searchOutput.map((value)=>(
            data += `
            <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <img src="${value.image}" height="200px" width="100%" alt="">
                <div class="card-body">
                    <h3>name :${value.name}</h3>
                    <h3>price :${value.price}</h3>
                </div>
            </div>
        </div>
            `
    ))

    document.getElementById("searchData").innerHTML = data
    
}