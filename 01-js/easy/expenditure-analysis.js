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
  console.log(transactions);
  let output = {};
  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    if (output[t.category]) {
      output[t.category] += t.price;
    } else {
      output[t.category] = t.price;
    }
  }
  let key = Object.keys(output);
  let ans = [];

  for (let i = 0; i < key.length; i++) {
    var obj = {
      category: key[i],
      totalSpent: output[key[i]],
    };
    ans.push(obj);
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
