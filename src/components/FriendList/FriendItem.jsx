import PropTypes from 'prop-types';
import {
  Item,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendList.styled';

export default function FriendItem({
  friendStatus,
  friendAvatarSrc,
  friendName,
}) {
  return (
    <Item>
      <FriendStatus color={friendStatus.toString()}></FriendStatus>
      {/* <FriendStatus color={friendStatus}></FriendStatus> */}
      <FriendAvatar src={friendAvatarSrc} alt={friendName} width="48" />
      <FriendName>{friendName}</FriendName>
    </Item>
  );
}

FriendItem.propTypes = {
  friendAvatarSrc: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  friendStatus: PropTypes.bool.isRequired,
};
