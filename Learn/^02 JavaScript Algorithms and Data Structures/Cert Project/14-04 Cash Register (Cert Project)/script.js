const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn')
const changeDue = document.getElementById('change-due')

let price = 11;
let cidDen = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.10],
  ["QUARTER", 0.25],
  ["ONE", 1.00],
  ["FIVE", 5.00],
  ["TEN", 10.00],
  ["TWENTY", 20.00],
  ["ONE HUNDRED", 100.00]
]
let cidA = [
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
let cidB = [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
let cidC = [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
let cidD = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
let cash = cashInput.value

let display = []
// console.log(cid[1][1])


const cashValues = (changeDue, cid) => {
  let newChangeAmount = 0.00
  newChangeAmount = changeDue
  
  for (let i = 8; i >= 0; i--) {
  let numOfUnit = Math.floor(newChangeAmount / cidDen[i][1]);
    let numOfUnitCid = (cid[i][1] / cidDen[i][1]);
    
    // console.log(cidDen[i][0], newChangeAmount ,numOfUnit,numOfUnitCid ,cid[i][1])
    // console.log(cidDen[i][0],numOfUnit,numOfUnitCid)
    
    // console.log(newChangeAmount,numOfUnit ,numOfUnitCid)
    if (newChangeAmount > 0 && numOfUnit > 0 && numOfUnitCid >= 1) {
      if(numOfUnit>=numOfUnitCid){
        for (let j = 0; j < numOfUnitCid; j++) {
          newChangeAmount = Math.round(newChangeAmount*100)/100-(cidDen[i][1])
          // console.log(  Math.round(newChangeAmount*100)/100  )
          console.log(cidDen[i][0])
          // console.log('newAmount', newChangeAmount.toFixed(2))
        }
      }else{
        for (let j = 0; j < numOfUnit; j++) {
          newChangeAmount = Math.round(newChangeAmount*100)/100-(cidDen[i][1])
          console.log(cidDen[i][0])

          // console.log(cidDen[i][0], newChangeAmount.toFixed(2))
        }
      }
      // console.log('Change Due:',newChangeAmount,'NOU',numOfUnit)
    }
    // console.log(cidDen[i][0],cid[i][1],cidDen[i][1]);
  }

  // console.log(...display)
}

const registerTests = (price, cash, cid) => {
  if (cash === price) {
    console.log('No change due')
    changeDue.textContent = 'No change due - customer paid with exact cash'
  } else if (cash < price) {
    console.log('Not enough money')
    // alert('Customer does not have enough money to purchase the item')
  } else if (cash > price) {
    let changeDue = cash - price
    let totalCid = 0
    for (let i = 0; i < 8; i++) {
      totalCid += cid[i][1]
    }
    if (changeDue > totalCid) {
      console.log('Status: INSUFFICIENT_FUNDS')
    } else {
      cashValues(changeDue, cid)
      console.log('Change due:', changeDue, 'CID:', totalCid)
    }

  }
}

// purchaseBtn.addEventListener('click', () => {
//   if (cash === price) {
//     changeDue.textContent = 'No change due - customer paid with exact cash'
//   } else if (cash < price) {
//     alert('Customer does not have enough money to purchase the item')
//   }
// })

const tests = [//(price,cash)
  // registerTests(1,1),        //No change due
  registerTests(11,1),      //Not enough money

  registerTests(19.5,20,cidA),  //Status: OPEN QUARTER: $0.5
  // registerTests(3.26, 100, cidA),//Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04
  // registerTests(19.5,20,cidB),
  // registerTests(19.5,20,cidC),
  // registerTests(19.5,20,cidD),
]
for (let i = 0; i < tests.length; i++) {
  tests[i]
}

//^----Tests----
//cash < price, textContent = 'Customer does not have enough money to purchase the item'
//cash = price, textContent = 'No change due - customer paid with exact cash'


/*Complete
Status: INSUFFICIENT_FUNDS: if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Status: CLOSED: if cash-in-drawer is equal to the change due.
Status: OPEN: if cash-in-drawer is greater than the change due and you can return change, with the change due in coins and bills sorted in highest to lowest order.
//& When the value in the #cash element is less than price, an alert should appear with the text 'Customer does not have enough money to purchase the item'
//& When the value in the #cash element is equal to price, the value in the #change-due element should be No change due - customer paid with exact cash
*/
/*
When price is 19.5, the value in the #cash element is 20, cidA is 
[["PENNY", 1.01], 
["NICKEL", 2.05], 
["DIME", 3.1], 
["QUARTER", 4.25], 
["ONE", 90], 
["FIVE", 55], 
["TEN", 20], 
["TWENTY", 60], 
["ONE HUNDRED", 100]]
,and the #purchase-btn element is clicked, the value in the #change-due element should be 
'Status: OPEN QUARTER: $0.5'

When price is 3.26, the value in the #cash element is 100, cidA is 
[["PENNY", 1.01], 
["NICKEL", 2.05], 
["DIME", 3.1], 
["QUARTER", 4.25], 
["ONE", 90], 
["FIVE", 55], 
["TEN", 20], 
["TWENTY", 60], 
["ONE HUNDRED", 100]]
, and the #purchase-btn element is clicked, the value in the #change-due element should be Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04

When price is 19.5, the value in the #cash element is 20, cidB is 
[["PENNY", 0.01], 
["NICKEL", 0], 
["DIME", 0], 
["QUARTER", 0], 
["ONE", 0], 
["FIVE", 0], 
["TEN", 0], 
["TWENTY", 0], 
["ONE HUNDRED", 0]]
, and the #purchase-btn element is clicked, the value in the #change-due element should be Status: INSUFFICIENT_FUNDS

When price is 19.5, the value in the #cash element is 20, cidC is 
[["PENNY", 0.01], 
["NICKEL", 0], 
["DIME", 0], 
["QUARTER", 0], 
["ONE", 1], 
["FIVE", 0], 
["TEN", 0], 
["TWENTY", 0], 
["ONE HUNDRED", 0]]
, and the #purchase-btn element is clicked, the value in the #change-due element should be Status: INSUFFICIENT_FUNDS

When price is 19.5, the value in the #cash element is 20, cidD is 
[["PENNY", 0.5], 
["NICKEL", 0], 
["DIME", 0], 
["QUARTER", 0], 
["ONE", 0], 
["FIVE", 0], 
["TEN", 0], 
["TWENTY", 0], 
["ONE HUNDRED", 0]]
, and the #purchase-btn element is clicked, the value in the #change-due element should be Status: CLOSED PENNY: $0.5
*/