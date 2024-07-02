var pop = document.getElementById("pop");
var mark = document.getElementById("mark");

mark.addEventListener("click", function() {
    pop.style.display = "none";
});
document.getElementById('menuicon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
});
var slider = document.getElementById("slider-img")
var left = document.getElementById("leftbar")
var right = document.getElementById("rightbar")
right.addEventListener("click", function(){
    slider.style.left = "0"
})
left.addEventListener("click", function(){
    slider.style.right = "-50%"
})

var likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach(function(likeButton) {
    likeButton.addEventListener("click", function() {

        if (this.src.includes("blackheart.png")) {
            this.src = "./images/redheart.png";
        } else {
            this.src = "./images/blackheart.png";
        }
    });
});


// Popup close
var closebtn = document.querySelector(".close");
var offersection = document.querySelector(".offer");

closebtn.addEventListener("click", function() {
    offersection.style.display = "none";
});

// navbar

var menu=document.getElementById("menubar")
var closenav =document.getElementById("closenav")
var sidenav=document.getElementById("sidenav")

menu.addEventListener("click",function(){
    sidenav.style.left="0"
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

// search

var dresscontainer=document.getElementById("dress-container")
var Search=document.getElementById("search")
var productlist=dresscontainer.querySelectorAll("div")


Search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    
    for(c=0;c<productlist.length;c++){

        var productname = productlist[c].querySelector("h2").textContent 

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[c].style.display="none"
        }
        else{
            productlist[c].style.display="block"
        }
    }
})

// filter

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const dressContainer = document.getElementById('dress-container');
    const dresses = dressContainer.children;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterDresses);
    });

    function filterDresses() {
        const checkedBoxes = document.querySelectorAll('.filter-checkbox:checked');
        const filterCriteria = {};

        checkedBoxes.forEach(box => {
            const category = box.getAttribute('data-category');
            const value = box.value;

            if (!filterCriteria[category]) {
                filterCriteria[category] = [];
            }
            filterCriteria[category].push(value);
        });

        Array.from(dresses).forEach(dress => {
            const tags = dress.getAttribute('data-tags').split(' ');
            let isVisible = true;

            for (const category in filterCriteria) {
                if (filterCriteria[category].length > 0) {
                    const categoryMatches = filterCriteria[category].some(value => tags.includes(value));
                    if (!categoryMatches) {
                        isVisible = false;
                        break;
                    }
                }
            }

            dress.style.display = isVisible ? '' : 'none';
        });
    }
});
