// Task 1: DOM Archaeologist

// 1. The tag name of the last element child of document.body
let LastTag = document.body.lastElementChild.tagName;
console.log("The last tag name in body:", LastTag);

// 2. The number of element children in document.body (not counting text nodes)
let NumOfChildren = document.body.children.length;
console.log("The number of element children in body:", NumOfChildren);

// 3. Difference in length between childNodes and children of document.body
let ChildNodesLength = document.body.childNodes.length;
let ChildrenLength = document.body.children.length;
let Difference = ChildNodesLength - ChildrenLength;
console.log("The difference in length between childNodes and children of body:", Difference);

// 4. nodeType and nodeName of the first node in document.body.childNodes
let FirstNode = document.body.firstChild;
console.log("The nodeType of the first node in body.childNodes:", FirstNode.nodeType);
console.log("The nodeName of the first node in body.childNodes:", FirstNode.nodeName);

// 5. Is the first paragraph a sibling of the second?
let paragraphs = document.body.getElementsByTagName('p');
let FirstParagraph = paragraphs[0];
let SecondParagraph = paragraphs[1];
let IsSibling = FirstParagraph.nextElementSibling === SecondParagraph 
             || FirstParagraph.previousElementSibling === SecondParagraph;
console.log("Is the first paragraph a sibling of the second?", IsSibling);

// 6. Find unexpected text nodes in DOM structure
let UnexpectedTextNodes = Array.from(document.body.childNodes)
  .filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
console.log("Unexpected text nodes in the DOM structure:", UnexpectedTextNodes);


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
console.log('Data-role value:', cardDiv.dataset.role);

// 2. Change paragraph text via property
paragraph.textContent = 'Welcome back, Admin';

// 3. Add two classes
cardDiv.classList.add('authenticated', 'highlight');

// 4. Challenge: Check if "card" exists and remove it while keeping the others
if (cardDiv.classList.contains('card')) {
  console.log('Card class exists');
  cardDiv.classList.remove('card');
  console.log('Remaining classes:', cardDiv.className);
}
