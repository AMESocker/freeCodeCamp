const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn')
const changeDue = document.getElementById('change-due')

let price = 11;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
let cash = cashInput.value

const registerTests = (cash,price) => {
  if (cash === price) {
    console.log('No change due')
    changeDue.textContent = 'No change due - customer paid with exact cash'
  } else if (cash < price) {
    console.log('Not enough money')
    // alert('Customer does not have enough money to purchase the item')
  }
}

// purchaseBtn.addEventListener('click', () => {
//   if (cash === price) {
//     changeDue.textContent = 'No change due - customer paid with exact cash'
//   } else if (cash < price) {
//     alert('Customer does not have enough money to purchase the item')
//   }
// })

const tests = [//(cash,price)
  registerTests(1,1),
  registerTests(1,11)

]
for(let i = 0;i<tests.length;i++){
  tests[i]
}

//^----Tests----
//cash < price, textContent = 'Customer does not have enough money to purchase the item'
//cash = price, textContent = 'No change due - customer paid with exact cash'


/*
Status: INSUFFICIENT_FUNDS: if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Status: CLOSED: if cash-in-drawer is equal to the change due.
Status: OPEN: if cash-in-drawer is greater than the change due and you can return change, with the change due in coins and bills sorted in highest to lowest order.
*/
// When the value in the #cash element is less than price, an alert should appear with the text 'Customer does not have enough money to purchase the item'
// When the value in the #cash element is equal to price, the value in the #change-due element should be No change due - customer paid with exact cash

// When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be Status: OPEN QUARTER: $0.5

// When price is 3.26, the value in the #cash element is 100, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04

// When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be Status: INSUFFICIENT_FUNDS

// When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be Status: INSUFFICIENT_FUNDS

// When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be Status: CLOSED PENNY: $0.5