// import Feedback from 'components/Feedback';
import Feedback from 'components/Feedback/Feedback';
// import { FriendList } from 'components/FriendList/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
// import user from 'data/user.json';
// import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Feedback />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
