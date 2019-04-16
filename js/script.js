// global variables
const students = document.querySelectorAll(".student-item");
const numOfPages = Math.ceil(students.length / 10);

// showPage function with a parameter of students and page
const showPage = (students, page) => {
  for (let i = 0; i < students.length; i += 1) {
    // if else statement to show or hide students if index is within page number intervals
    if (i >= page * 10 - 10 && i < page * 10) {
      students[i].style.display = "block";
    } else {
      students[i].style.display = "none";
    }
  }
};

// call showPage function for the first page
showPage(students, 1);

const appendPages = list => {
  // create div element on page and set class
  const div = document.createElement("div");
  // assign page class to a variable
  const page = document.querySelector(".page");
  page.appendChild(div);
  div.className = "pagination";
  // add ul to div
  const ul = document.createElement("ul");
  div.appendChild(ul);
  // for every page, add li and a tags with the page number
  for (let i = 1; i <= numOfPages; i += 1) {
    // add li tags to the div
    const li = document.createElement("li");
    ul.appendChild(li);
    // add a tags to the li
    const a = document.createElement("a");
    li.appendChild(a);
    a.setAttribute("href", "#");
    a.textContent = i;
    // if (a.textContent === "1")
    //   // highlight first button
    //   a.style.backgroundColor = "highlight";
    // add an event listener that displays correct page when clicked
    a.addEventListener("click", e => {
      const aLinks = document.querySelectorAll("a");
      let page = e.target;
      page.className = "active";
      // loop through all a tags and highlights current page
      for (let i = 0; i < aLinks.length; i += 1) {
        if (aLinks[i] !== page) {
          aLinks[i].className = "";
        }
      }
      // call the show page function
      showPage(students, page.textContent);
    });
  }
};
appendPages(students);
