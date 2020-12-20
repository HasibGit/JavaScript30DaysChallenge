// jshint esversion : 6

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

generateList();

function addItem(e){
  e.preventDefault();
  const text = this.querySelector('[name = item]').value;
  const item = {
    text : text,
    done : false
  };
  items.push(item);
  generateList();
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function generateList(){
  itemsList.innerHTML = items.map((item, i) => {
    return `
        <li>
             <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
            <label for="item${i}">${item.text}</label>
        </li>
    `;
  }).join('');
}

function toggleCheckbox(e){
  if(e.target.matches('input')){
    const element = e.target;
    items[element.dataset.index].done = !(items[element.dataset.index].done);
    localStorage.setItem('items', JSON.stringify(items));
    generateList();
  }
}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleCheckbox);
