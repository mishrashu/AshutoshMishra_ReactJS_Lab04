import axios from "axios"

/* Steps

0. Install axios
1. Usage of axios library for making http calls
2. Determine server url
3. Perform API invocation
4. API response

*/
const getAllExpenseItems = async () => {

  const getItemsUrl = "http://localhost:4000/expenses";

  console.log("Final Url is " + getItemsUrl);

  const response = await axios.get(getItemsUrl);
  return response.data;

}

const newExpenseItem = async (newExpenseItem) => {

  const postItemUrl = "http://localhost:4000/expenses";

  const response = await axios.post(postItemUrl, newExpenseItem, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data;
}


const getAllPayeeNames = (expenseItems) => {

  const uniquePayeeNames = [];

  expenseItems.forEach((expenseItem) => {

    let payeeName = expenseItem.payeeName;
    if (!uniquePayeeNames.includes(payeeName)) {

      uniquePayeeNames.push(payeeName);
    }
  })

  return uniquePayeeNames;
}

const getTotalExpenseByPayee = (expenseItems, payeeName) => {

  let totalExpense = 0;

  expenseItems.forEach((expenseItem) => {

    if (expenseItem.payeeName === payeeName) {
      totalExpense += expenseItem.price;
    }
  })


  return totalExpense;
}


const getGrandTotalExpenses = (expenseItems) => {

  let totalExpense = 0;

  expenseItems.forEach((expenseItem) => {

    totalExpense += expenseItem.price;
  })
  return totalExpense;
}

export { getAllExpenseItems, getAllPayeeNames, newExpenseItem, getTotalExpenseByPayee, getGrandTotalExpenses };
