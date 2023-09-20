const categories = document.querySelector('#categories');
const Elements = categories.querySelectorAll('li.item');
console.log(`Number of categories:${Elements.length}`);
Elements.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('ul li');
    
    console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
})
