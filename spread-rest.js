const items = document.querySelectorAll('#todo li');
// console.log(items)
// items[5].style.color = 'red'
Object.assign(items[1].style, {
  "color": "red",
  "font-size": "18px",
  "font-weight": "bold"
});

const groceryItems = [
  {
        id: 1,
        name: 'Kopi Bubuk',
        quantity: 2,
        checked: true,
      },
      {
        id: 2,
        name: 'Gula Pasir',
        quantity: 5,
        checked: false,
      },
      {
        id: 3,
        name: 'Air Mineral',
        quantity: 3,
        checked: false,
      },
];


//const newGroceryItems = [...groceryItems, 200]; //spread array --copy
//const newGroceryItems = {...groceryItems[0], quantity:220} //spread obj --copy
//console.log(newGroceryItems)

const [first, ...others] = groceryItems;
console.log(first);
console.log(others)