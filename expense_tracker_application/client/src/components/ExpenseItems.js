import Table from 'react-bootstrap/Table';

const ExpenseItems = ({ expenseItems }) => {

  function expenseItemsTable() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product Purchased</th>
            <th>Price</th>
            <th>Payee</th>
          </tr>
        </thead>
        <tbody>

          {
            expenseItems.map((expenseItem, index) => {

              return (

                <tr>
                  <td>{expenseItem.date}</td>
                  <td>{expenseItem.expenseDescription}</td>
                  <td>{expenseItem.price}</td>
                  <td>{expenseItem.payeeName}</td>

                </tr>

              )

            })
          }

        </tbody>
      </Table>
    );
  }

  return (

    <div>
      {expenseItemsTable()}
    </div>

  )
}

export { ExpenseItems } 