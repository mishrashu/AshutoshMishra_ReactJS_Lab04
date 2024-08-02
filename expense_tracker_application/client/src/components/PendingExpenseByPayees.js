import {
  getAllPayeeNames, getTotalExpenseByPayee, getGrandTotalExpenses
} from "../services/expense_utils";

import { Table } from "react-bootstrap"

const PendingExpenseByPayees = ({ expenseItems }) => {

  const payeeNames = getAllPayeeNames(expenseItems);

  const getPendingAmount = (payeeName) => {

    const totalExpenses = getGrandTotalExpenses(expenseItems);

    const totalExpensesByPayee
      = getTotalExpenseByPayee(expenseItems, payeeName);

    const halfAmount = totalExpenses / 2;

    if (totalExpensesByPayee >= halfAmount) {
      return 0;
    } else {

      return (halfAmount - totalExpensesByPayee);
    }
  }

  const displayTable = () => {

    return (

      <Table striped bordered hover>

        <tbody>
          <tr>
            <td><b>Total:</b></td>
            <td>{getGrandTotalExpenses(expenseItems)}</td>
          </tr>

          {
            payeeNames.map((payeeName, index) => (
              <tr>
                <td><b>{payeeName} paid:</b></td>
                <td>{getTotalExpenseByPayee(expenseItems, payeeName)}</td>
              </tr>
            ))
          }

          {
            payeeNames.map((payeeName, index) => (
              <tr>
                <td><b>Pay {payeeName}</b></td>
                <td>{getPendingAmount(payeeName)}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    )

  }

  return (<div>


    {
      displayTable()
    }
  </div>)
}
export { PendingExpenseByPayees }
