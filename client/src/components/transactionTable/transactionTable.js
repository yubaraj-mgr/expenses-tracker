import Button from "@restart/ui/esm/Button";
import Table from "react-bootstrap/Table";

const TransactionTable = ({ transactions, handleOnDelete }) => {
  console.log(transactions);
  // let totalIncome = 0;
  // let totalExpenses = 0;
  // transactions.forEach((item) => {
  //   item.type === "income"
  //     ? (totalIncome += item.amount)
  //     : (totalExpenses += item.amount);
  // });
  // const balance = totalIncome - totalExpenses;
  const total = transactions.reduce((acc, { type, amount }) => {
    return type === "income" ? acc + amount : acc - amount;
  }, 0);
  return (
    <>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Expenses</th>
            <th>Income</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td className="text-danger">
                  {item.type === "expenses" && "-$" + item.amount}
                </td>
                <td className="text-success">
                  {item.type === "income" && "$" + item.amount}
                </td>
                <td>
                  <Button
                    className="bg-danger text-light"
                    onClick={() => handleOnDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="text-end fw-bold">Balance: {"$" + total}</div>
    </>
  );
};

export default TransactionTable;
