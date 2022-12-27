import PropTypes from 'prop-types';
import { FriendListBox } from './FriendList.styled';
import FriendItem from './FriendItem';

export default function FriendList({ friendsList }) {
  return (
    <FriendListBox>
      {friendsList.map(item => (
        <FriendItem
          key={item.id}
          friendStatus={item.isOnline}
          friendAvatarSrc={item.avatar}
          friendName={item.name}
        />
      ))}
    </FriendListBox>
  );
}

FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
