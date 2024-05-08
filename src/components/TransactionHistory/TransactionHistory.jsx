import css from "../TransactionHistory/TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
  <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>
{items.map(item=> 
  <tbody>
    <tr className={css.form}>
      <td className={css.item}>{item.type}e</td>
      <td className={css.item}>{item.amount}</td>
      <td className={css.item}>{item.currency}</td>
    </tr>
      </tbody>
)}
</table>

    )
}