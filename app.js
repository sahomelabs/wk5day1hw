// Menu data structure
// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
var mainEl = document.querySelector('main');

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';


// Task 1.3
// Add a class of flex-ctrto mainEl.
mainEl.classList.add('flex-ctr');

// Task 1.3
// Add a class of flex-ctrto mainEl.
mainEl.classList.add('flex-ctr');

// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];