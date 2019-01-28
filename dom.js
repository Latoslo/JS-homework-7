/*================
******Homework on The DOM****
* Homework Assignment #7: The DOM
Details:
 
Create a very simple webpage, displaying some of your favorite colors. Use HTML, CSS and Javascript.

1. The top of the page should include a header <h1> tag, with a name for your page, and then an <h2> tag with a description of what's on the page.

2. Further down the page you should draw 10 rectangles, of any size you wish, and give them each a unique hex-code so they all appear as different colors. Here's a color-picker that might help.

3. Below each rectangles, list the hex code (in plain text).

4. Give all of the rectangles the same class, but make sure each rectangle has a unique ID.

5. Wrap all of the rectangles in an containing element ( a <div> ) and give that element the id "rectangleWrapper". Now give that element 50 pixels of padding on its top, right and left sides. But add zero padding to the bottom.

6. When the page loads, console.log the messages "Here are the rectangle IDs" and then console.log all the rectangles' IDs, one at a time.

7. In the <head> of the document, add a <title> tag that matches the text in the <h1> you added in step 1.
=========*/

// select a header tag by Name since it is unique
// create an element H1 with innertext... and append it to the header tag
// create an element H2 with innertext... and append it to the header tag

const headerTag = document.getElementById("header");
const newH1 = document.createElement("h1");
const title = "My Javascript Learning Progress Page";
newH1.innerText = title;
headerTag.appendChild(newH1);
const newH2 = document.createElement("h2");
newH2.innerHTML = `This page contains the topics I have learned so far in Javascript course on <span><a>Pirple</a></span>`;
headerTag.appendChild(newH2);
const newLink = newH2.lastChild.lastChild;
newLink.href = "https://pirple.thinkific.com";
newLink.target = "_blank";

// Draw 10 rectangles
// create 10 divs to represent the 10 rectangles
// create a color array
const divsColors = [
  "#757808",
  "#DCCC58",
  "#C8EAA5",
  "#A48161",
  "#2FE5E8",
  "#411BA3",
  "#3AB114",
  "#CF1198",
  "#897B06",
  "#AF320F"
];

// create textcontent for each Div
const javascriptTopics = [
  "Data Types",
  "Variables",
  "If statement & operators",
  "Functions",
  "Switch Statements",
  "Loops",
  "DOM",
  "In view: Events",
  "In view: Tempelate Literals",
  "In view: Destructuring"
];

// Create the rectangleWrapper div
const body = document.getElementById("main-body");
const wrapperDiv = document.createElement("div");
wrapperDiv.id = "rectangleWrapper";
// Append the wrapper div to the body tag
body.appendChild(wrapperDiv);
// Add 50px margin to top, right & left.
wrapperDiv.style.padding = "50px 50px 0 50px";

// Create and style 10 divs and append them to the wrapper div
for (let i = 0; i < 10; i++) {
  const newDiv = document.createElement("div");
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";

  // Append innerText to each created Div
  const newInnerPara = document.createElement("p");
  // Add class to the paragraph tag
  newInnerPara.classList.add("inner-para");
  newInnerPara.textContent = javascriptTopics[i];
  newDiv.appendChild(newInnerPara);

  // Attach background color to the newDiv
  newDiv.style.background = divsColors[i];
  // give all divs the same class
  newDiv.classList.add("rect");
  // give each div a unique id
  newDiv.id = "rect-" + [i + 1];

  // create a paragraph tag to display the div color
  const newPara = document.createElement("p");
  // Add class to the paragraph tag
  newPara.classList.add("para");
  newPara.innerText = "Background-color hex value: " + divsColors[i];

  // Append the new div to the parent
  wrapperDiv.appendChild(newDiv);
  // append the paragraph tag to the parent div
  wrapperDiv.appendChild(newPara);
}

//create a callback function to run at interval defined by setInterval function.
const runAtInterval = arr => {
  console.log("Here are the rectangle IDs:");
  for (const prop of arr) {
    console.log(prop);
  }
  // Clear the setinterval after one round
  clearInterval(clearInt);
};

//Set interval for running. Third parameter is passed to the function to be run
let clearInt = setInterval(runAtInterval, 3000, divsColors);

const headTag = document.querySelector("head title");
headTag.innerText = title;
