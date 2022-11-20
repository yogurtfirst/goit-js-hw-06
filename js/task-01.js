const categories = document.querySelector('#categories').children;

console.log(`Number of categories: ${categories.length}`);

[...categories].forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: : ${element.querySelector('ul').children.length}`);
});