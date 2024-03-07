console.log('bobbyhadz.com');

// Adding `keydown` event listener on the document
document.addEventListener('keydown', event => {
  console.log(`User pressed: ${event.key}`);
  event.preventDefault();
  return false;
});

const inputField = document.getElementById('message');

// or adding `keydown` on the `input` element
inputField.addEventListener('keydown', event => {
  console.log(`User pressed: ${event.key}`);
  console.log('hi');
  event.preventDefault();
  return false;
});
