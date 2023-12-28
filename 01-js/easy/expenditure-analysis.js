/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  const arr = [];

  for(let i = 0; i < transactions.length; i++) {
    let cat = transactions[i]["category"];
    let cost = transactions[i]["price"];
    let found = false;
    for(let j = 0; j < arr.length; j++) {
      if(arr[j]["category"] == cat) {
        found = true;
        arr[j]["totalSpent"] += cost;
        break;
      } 
    }
    if(!found) {
      arr.push({category: cat, totalSpent: cost});
    }
  }

  return arr;

}

module.exports = calculateTotalSpentByCategory;
