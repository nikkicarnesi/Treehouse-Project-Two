//Treehouse FSJS Unit 2 Project

//Attempted to do this with jQuery but I'm still not 100% with it.
//I also needed a friend to help break things down, trying to figure out how all of this works.
//I'm still not completely sure. 


const studentsPerPage = 10;
const studentList = document.querySelector('ul');
const perStudent = studentList.children;
const noResult = document.querySelector('.no-result');
const buttonDiv = document.querySelector('.pagination');
const buttonUl = buttonDiv.querySelector('ul');
const searchDiv = document.querySelector('.student-search');


//function to find number of pages
function numberOfPages() {
    let pages = Math.ceil(perStudent.length / studentsPerPage);
    return pages;
}

//loop to create buttons
for (let i = 1; i <= numberOfPages(); i++) {
    let studentLi = document.createElement('li');
    let link = document.createElement('a');
    link.className = 'active';
    link.href = '#';
    link.textContent = i;
    buttonUl.appendChild(studentLi);
    studentLi.appendChild(link);
}

//function to have only 10 student show when page is loaded
function showFirstTen() {
    for (let i = 0; i < perStudent.length; i++) {
        if (i < studentsPerPage) {
            perStudent[i].style.display = '';
        } else {
            perStudent[i].style.display = 'none';
        }
    }
}

//event listener to place 10 students per page
buttonDiv.addEventListener('click', (event) => {
    noResult.innerHTML = ''; 
    let buttonNumber = parseInt(event.target.textContent);
    let max = buttonNumber * 10; 
    let min = max - 10;
    for (let i = 0; i < perStudent.length; i++) {
        if (i >= min && i < max) {
            perStudent[i].style.display = '';
        }  else {
            perStudent[i].style.display = 'none';
        }
    }    
});

showFirstTen();
    
    
//to create a search box
let searchInput = document.createElement('input');
let searchButton = document.createElement('button');
function showSearch() {
    searchInput.placeholder = 'Search for students...';
    searchButton.textContent = 'Search';
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchButton);
}

//an array to hold the students who are not being searched 
const searchResults = [];
    
//event listener for search box
searchButton.addEventListener('click', () => {
    let filter = searchInput.value.toLowerCase();
    searchResults.length = 0;
    for (let i = 0; i < perStudent.length; i++) {
        if (perStudent[i].innerHTML.indexOf(filter) > -1) {
            perStudent[i].style.display = '';
            
        } else {
            perStudent[i].style.display = 'none';
            searchResults.push(i);
        }   
    }
    //if no student matching name in search box, no results
    if (searchResults.length === perStudent.length) {
        noResult.innerHTML = '<h1>No Results</h1>';
    } else {
        noResult.innerHTML = ''; 
    }
});
    
showSearch();
