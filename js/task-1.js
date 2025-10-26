const listOfCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const countOfElements = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${countOfElements}`);
})