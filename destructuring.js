const items = document.querySelectorAll('#todo li');
// console.log(items)
// items[5].style.color = 'red'
Object.assign(items[0].style, {
  "color": "red",
  "font-size": "18px",
  "font-weight": "bold"
});
// simulasi hook pd react
function useMyState(initialValue) {
  let value = initialValue;

  function setValue(newVal) {
    value = newVal;
    console.log("State berubah jadi:", value);
  }

  return [value, setValue];
}

const [num, setNum] = useMyState(10);
console.log(num); // 10
setNum(20);        // State berubah jadi: 20

