// target LIs
const list = document.getElementsByClassName('student-item cf');
// Round up the number of pages
const numberOfStudents = Math.ceil(list.length/10);
// Variables to create Pagination
const newDiv = document.createElement("div");
// ------------------------------------------------------------ display the first page
//A function with a parameter of page and students
const studentsList = (page, list) => {

// A loop that will show ten students
for(let i =0; i< list.length; i+=1) {

//if else statement to show or hide students
if (i >= ((page * 10) -10) && i < ((page * 10))){
  list[i].style.display ="block";
} else {
  list[i].style.display ="none";
  }
 }
}

// call function studentList
studentsList (1, list);




// Create and append the pagination links - Creating a function that can do this is a good approach
const pages = () => {
   //Variable that creates element ul
   const ul = document.createElement("ul");
   //Class of newDiv adds page  numbers
   newDiv.className = ("pagination");
   const page = document.querySelector(".page");
   //Appending newDiv and ul
   page.appendChild(newDiv);
   newDiv.appendChild(ul);

   // loop for anchor tags
for (let i = 1; i <= numberOfStudents; i++){
  const li = document.createElement ("li");
  const a = document.createElement("a");
  ul.appendChild(li);
  li.appendChild(a);
  // page number should be the same as anchor tags
  a.textContent = i;
  a.href = "#";
}
};
//Call pages function
pages();


 newDiv.addEventListener("click", (event) =>{
//Variable for anchor tags and page number
let numberOfPages = document.getElementsByTagName("a");
//if loop to activate anchor tags whenever clicked
if (event.target.tagName === "A"){
  //targets class name of active
  event.target.className ="active";
  numberOfPages = event.target.textContent;
  //shows the right amount of students and student names using listOfStudents function from earlier
  studentsList(numberOfPages, list);
}
  //Change active page when moved to another pages
  //Variable for active page
  const active = document.querySelector(".active");
  //for loop that runs through the active pages
  for (let i = 0; i < numberOfPages.length; i += 1){
    active.classList.remove("active");
  }

 });