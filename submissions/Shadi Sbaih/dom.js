//* Task 1: DOM Archaeologist
//The tag name of the last element child of
let LastTag = document.body.lastElementChild.tagName;
console.log("The last tag name in body: ", LastTag);

//The number of element children in
let NumOfChildren = document.body.children.length
console.log("The number of element children in body: ", NumOfChildren)

//The difference in length between childNodes and children of
let ChildNodesLength = document.body.childNodes.length;
let ChildrenLength = document.body.children.length;
let Difference = ChildNodesLength - ChildrenLength;
console.log("The difference in length between childNodes and children of body: ", Difference);

//Determine:
//What is the nodeType and nodeName of the first node in document.body.childNodes?
let FirstNode = document.body.firstChild
console.log("The nodeType of the first node in body.childNodes: ", FirstNode.nodeType);
console.log("The nodeName of the first node in body.childNodes: ", FirstNode.nodeName);
//Is the first paragraph a sibling of the second, or a descendant?
let FirstParagraph = document.body.querySelectorAll('p')[0];
let SecondParagraph = document.body.querySelectorAll('p')[1];
let IsSibling = FirstParagraph.nextElementSibling === SecondParagraph || FirstParagraph.previousElementSibling === SecondParagraph;
console.log("Is the first paragraph a sibling of the second? ", IsSibling);
//Twist:
//Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.
let TextNodes = Array.from(document.body.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
console.log("Unexpected text nodes in the DOM structure: ", TextNodes);
//These text nodes often come from whitespace in the HTML, such as line breaks or spaces between elements.

/// > * ----------------------------------------------------------------------------------------------- < * ///

//* Task 2: Synthetic DOM Injection

const cardDiv = document.createElement('div');
cardDiv.className = 'card';
cardDiv.dataset.role = 'admin';

const heading = document.createElement('h2');
heading.textContent = 'Access Panel';

const paragraph = document.createElement('p');
paragraph.textContent = 'Authenticated';

cardDiv.appendChild(heading);
cardDiv.appendChild(paragraph);

document.body.appendChild(cardDiv);

console.log('Data-role value:', cardDiv.dataset.role);
paragraph.textContent = 'Welcome back, Admin';
cardDiv.classList.add('authenticated', 'highlight');

// Challenge: Check if "card" exists and remove it while keeping others
if (cardDiv.classList.contains('card')) {
    console.log('Card class exists');
    cardDiv.classList.remove('card');
    console.log('Remaining classes:', cardDiv.className);
}