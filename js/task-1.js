const itemEl = document.querySelectorAll(`.item`)
console.log("Number of categories", itemEl.length);
itemEl.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemCount = category.querySelectorAll('li').length;
      console.log(`Category: ${title}
Elements: ${itemCount}`);
});

