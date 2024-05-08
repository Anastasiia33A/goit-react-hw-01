
import Profile from "../Profile/Profile";
import userData from '../../components/userData/userData.json';
import css from '../App/App.module.css';
import FriendList from "../FriendList/FriendList";
import friends from "../FriendList/friends.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../TransactionHistory/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}