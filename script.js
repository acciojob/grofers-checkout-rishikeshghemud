const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const row = document.createElement('tr');
  const totalText = document.createElement('td');
  totalText.innerHTML = '<b>Total</b>';
  const totalAmount = document.createElement('td');

  const table = document.querySelector('table');
	
  const totalSum = Array.from(document.getElementsByClassName('price'))
    .map(x => Number(x.innerText.replace(/[^\d]/g, '') || 0))
    .reduce((acc, curr) => acc + curr, 0);

  totalAmount.innerHTML = `<b id="ans">${totalSum}</b>`;
  row.appendChild(totalText);
  row.appendChild(totalAmount);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

