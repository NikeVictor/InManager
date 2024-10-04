// DOM Elements
const inventoryBtn = document.getElementById('inventoryBtn');
const invoiceBtn = document.getElementById('invoiceBtn');
const reportBtn = document.getElementById('reportBtn');
const content = document.getElementById('content');
const addItemForm = document.getElementById('addItemForm');
const inventoryList = document.getElementById('inventoryList');

// Event Listeners
inventoryBtn.addEventListener('click', showInventory);
invoiceBtn.addEventListener('click', showInvoices);
reportBtn.addEventListener('click', showReports);
addItemForm.addEventListener('submit', addInventoryItem);

// Functions to show/hide sections
function showInventory() {
  document.getElementById('inventorySection').style.display = 'block';
  document.getElementById('invoiceSection').style.display = 'none';
  document.getElementById('reportSection').style.display = 'none';
}

function showInvoices() {
  document.getElementById('inventorySection').style.display = 'none';
  document.getElementById('invoiceSection').style.display = 'block';
  document.getElementById('reportSection').style.display = 'none';
}

function showReports() {
  document.getElementById('inventorySection').style.display = 'none';
  document.getElementById('invoiceSection').style.display = 'none';
  document.getElementById('reportSection').style.display = 'block';
}

// Inventory Management
let inventory = [];

function addInventoryItem(e) {
  e.preventDefault();
  const name = document.getElementById('itemName').value;
  const quantity = document.getElementById('itemQuantity').value;
  const price = document.getElementById('itemPrice').value;

  const item = { name, quantity: parseInt(quantity), price: parseFloat(price) };
  inventory.push(item);
  updateInventoryTable();
  addItemForm.reset();
}

function updateInventoryTable() {
  inventoryList.innerHTML = '';
  inventory.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </td>
    `;
    inventoryList.appendChild(row);
  });
}

function editItem(index) {
  // TODO: Implement edit functionality
  console.log('Edit item at index', index);
}

function deleteItem(index) {
  inventory.splice(index, 1);
  updateInventoryTable();
}

// Initial load
showInventory();