// target list items
const list = document.getElementsByClassName("student-item cf");
// create a div
const newDiv = document.createElement("div");
// -------------------------------------------------------------------------------------------- display the first page
//A function with a parameter of page and students
const studentsList = (page, list) => {
  // A loop that will show ten students
  for (let i = 0; i < list.length; i += 1) {
    //if else statement to show or hide students
    if (i >= page * 10 - 10 && i < page * 10) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};

// -------------------------------------------------------------------------------------- -Call studentList function

studentsList(1, list);

// -----------------------------------------------------------------------------------------Function pages
const pages = () => {
  // create ul
  const ul = document.createElement("ul");
  // target the page class
  const pages = document.querySelector(".page");
  //round up the number of pages
  const numberOfStudents = Math.ceil(list.length / 10);

  //assign a class to a div
  newDiv.className = "pagination";
  //appending children to pages and newDiv
  pages.appendChild(newDiv);
  newDiv.appendChild(ul);

  // loop for anchor tags
  for (let i = 1; i <= numberOfStudents; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.appendChild(li);
    li.appendChild(a);
    // page number the same as i
    a.textContent = i;
    //link to an empty string
    a.href = "#";
  }
};
//-----------------------------------------------------------------------------------------Call pages function

pages();

//-------------------------------------------------------------------------------------------Event listener
newDiv.addEventListener("click", e => {
  //Variable for anchor tags and page number
  let numberOfPages = document.getElementsByTagName("a");
  //if loop to activate anchor tags whenever clicked
  if (e.target.tagName === "a") {
    //assign a class called 'active' to the element
    e.target.className = "active";
    numberOfPages = e.target.textContent;
    //shows the right amount of students and student names by calling studentsList function
    studentsList(numberOfPages, list);
  }
  //--------------------------------------Change active page when moved to another pages
  const active = document.querySelector(".active");
  //remove 'active' class from pages
  for (let i = 0; i < numberOfPages.length; i++) {
    active.classList.remove("active");
  }
});
