function select(query) {
  return document.querySelector(query);
}

function selectAll(query) {
  return Array.from(document.querySelectorAll(query));
}
