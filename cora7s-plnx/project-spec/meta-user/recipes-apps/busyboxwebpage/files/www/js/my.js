var newItemCounter = 1;
var myList = document.getElementById("my-list");
var myBtn = document.getElementById("my-btn");
var getBtn = document.getElementById("get-btn");
var myHeadline = document.getElementById("my-headline");
var listItems = document.getElementById("my-list").getElementsByTagName("li");

myList.addEventListener("click", activateItem);

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        myHeadline.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
    }
    e.target.classList.add("active");
}

myBtn.addEventListener("click", addNewItem);

function addNewItem() {
    myList.innerHTML += "<li>Something new" + newItemCounter + "</li>";
    newItemCounter++;
}


getBtn.addEventListener("click", sendGET);

// Make a GET request using the Fetch API
// This looks useful for future :
// https://stackoverflow.com/questions/51417108/how-can-i-return-the-fetch-api-results-from-a-function
function sendGET(){
    alert("Sends GET, but BBox-httpd currently doesn't respond");
    fetch("/wobble?wibble")
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(wobblers => {
        // Process the list of recent users
        console.log('Recent Users:', recentUsers);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


