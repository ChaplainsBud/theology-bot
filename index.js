// plankalcul ; hilbert-kalcul  => method for plan, algorithm?

// create a store of quotes
// elicit quotes by button, then by submission of text -> Q/A

const store = ["To me, religion is science and science is religion"];

document.body.style.backgroundColor = "skyblue";

// let btn = document.querySelector('button');
// btn.addEventListener('click', (e) =>  {
//   e.preventDefault();
//   console.log('hi');
//
// });

let btn = document.querySelector('form');
let inp = document.querySelector('input');
btn.addEventListener('submit', (e) => {
  e.preventDefault();
//  console.log(inp.value);
  console.log(store);
})

// you don't want the button when using a form
// you want the form
// you also want the input.value

// my goal now? get the input.value that matches store contents
//
// do I use a condition here?
// do I use a string method: str.match?
