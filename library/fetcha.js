async function fetcheAsJSON(path, fn) {
  fetch(path)
  .then(response => {
    return response.json();
  })
  .then(value => {
    fn(value);
  })
}
