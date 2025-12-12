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

const myobj={
  nama: 'Rifky',
  nip: '199105172025051001'
}

// 1. copy array/obj dan menambahkan item
//const newGroceryItems = [...groceryItems, 200]; //spread array --copy dan tambah
//const newGroceryItems = {...groceryItems[0], quantity:220} //spread obj --copy dan timpa
//console.log(newGroceryItems)

//2. spread - menggabungkan array dgn array/ array dg obj
// const copy = [...groceryItems,myobj];
// console.log(copy)

// ----------------------------------------------------------------

//1. rest - memilih salah satu, sisanya ditampung
const [first, ...others] = groceryItems; 
console.log(first);
console.log(others)

// 2. rest -  menampung sisa arg
/*function myFunc(a,b,...c){
  return c
};
console.log(myFunc(1,2,3,4,5))*/

//3. rest - contoh
/*function filterBy(type, ...values){
  return values.filter(item=>typeof(item)===type)
};
console.log(filterBy('boolean', 1,2,3,'Rifky',4,5,'Alkatiri', true, 6, 3.14))*/






