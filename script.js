const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const row = document.createElement('tr');
const totalText = document.createElement('td');
totalText.innerHTML = '<b>Total</b>';
const totalAmount = document.createElement('td');

row.appendChild(totalText);
row.appendChild(totalAmount);

const table = document.querySelector('table');


const totalSum = Array.from(document.getElementsByClassName('price'))
  .map(x => Number(x.innerHTML))
  .reduce((acc, curr) => {
    return acc + curr
  }, 0)
;

totalAmount.innerHTML = `<b id="ans">${totalSum}</b>`;

table.appendChild(row)
  
};

getSumBtn.addEventListener("click", getSum);

