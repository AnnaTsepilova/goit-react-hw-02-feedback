import Counter from 'components/Counter/Counter';
import { Title } from './Counter/Counter.styled';

export default function App() {
  return (
    <>
      <Title>Please leave feedback</Title>
      <Counter />
    </>
  );
}

// import UserProfile from 'components/UserProfile/UserProfile';
// import Statistics from 'components/Statistics/Statistics';
// import FriendList from 'components/FriendList/FriendList';
// import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
// import user from 'data/user.json';
// import data from 'data/data.json';
// import tableData from 'data/transactions.json';
// import friends from 'data/friends.json';
// import Section from 'components/Section/Section';

// export default function App() {
//   return (
//     <Section>
//       <UserProfile
//         avatarSrc={user.avatar}
//         userName={user.username}
//         userTag={user.tag}
//         location={user.location}
//         followersQuantity={user.stats.followers}
//         viewsQuantity={user.stats.views}
//         likesQuantity={user.stats.likes}
//       />
//       <Statistics title="Upload stats" dataSet={data} />
//       <FriendList friendsList={friends} />
//       <TransactionHistory transactions={tableData} />
//     </Section>
//   );
// }
