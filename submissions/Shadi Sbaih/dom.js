// Task 1: DOM Archaeologist

// 1. The tag name of the last element child of document.body
let LastTag = document.body.lastElementChild.tagName;
console.log("The last tag name in body: ", LastTag); //  Logs the last element's tag name in <body>

// 2. The number of element children in document.body (not counting text nodes)
let NumOfChildren = document.body.children.length;
console.log("The number of element children in body: ", NumOfChildren); //  Logs total elements inside <body>

// 3. Difference in length between childNodes and children of document.body
let ChildNodesLength = document.body.childNodes.length;
let ChildrenLength = document.body.children.length;
let Difference = ChildNodesLength - ChildrenLength;
console.log("The difference in length between childNodes and children of body: ", Difference); //  Shows extra nodes (text/comments) count
// The difference exists because childNodes includes text nodes, comments, and elements, while children includes only elements

// 4. nodeType and nodeName of the first node in document.body.childNodes
let FirstNode = document.body.firstChild;
console.log("The nodeType of the first node in body.childNodes: ", FirstNode.nodeType); //  nodeType number (1=element, 3=text)
console.log("The nodeName of the first node in body.childNodes: ", FirstNode.nodeName); //  nodeName (#text, H1, P, etc.)

// 5. Is the first paragraph a sibling of the second?
let FirstParagraph = document.body.querySelectorAll('p')[0];
let SecondParagraph = document.body.querySelectorAll('p')[1];
let IsSibling = FirstParagraph.nextElementSibling === SecondParagraph || FirstParagraph.previousElementSibling === SecondParagraph;
console.log("Is the first paragraph a sibling of the second? ", IsSibling); //  true if they share same parent

// 6. Find unexpected text nodes in DOM structure
let TextNodes = Array.from(document.body.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
console.log("Unexpected text nodes in the DOM structure: ", TextNodes); // Usually caused by whitespace/line breaks


// -----------------------------------------------------------------------------------------------

// Task 2: Synthetic DOM Injection

// Create main div
const cardDiv = document.createElement('div');
cardDiv.className = 'card';
cardDiv.dataset.role = 'admin';

// Create heading
const heading = document.createElement('h2');
heading.textContent = 'Access Panel';

// Create paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'Authenticated';

// Append heading and paragraph to div
cardDiv.appendChild(heading);
cardDiv.appendChild(paragraph);

// Append div to body
document.body.appendChild(cardDiv);

// 1. Log data-role value using dataset
console.log('Data-role value:', cardDiv.dataset.role); //  Logs 'admin' from data-role

// 2. Change paragraph text via property
paragraph.textContent = 'Welcome back, Admin'; //  Updates text without innerHTML

// 3. Add two classes
cardDiv.classList.add('authenticated', 'highlight'); //  Adds both classes

// 4. Challenge: Check if "card" exists and remove it while keeping the others
if (cardDiv.classList.contains('card')) {
    console.log('Card class exists'); //  Confirms 'card' is present
    cardDiv.classList.remove('card'); //  Removes only 'card'
    console.log('Remaining classes:', cardDiv.className); //  Shows remaining classes after removal
}
