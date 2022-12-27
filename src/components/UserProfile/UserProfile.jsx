import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsCell,
  Label,
  Quantity,
} from './UserProfile.styled';

export default function UserProfile({
  avatarSrc,
  userName,
  userTag,
  location,
  followersQuantity,
  viewsQuantity,
  likesQuantity,
}) {
  return (
    <Description>
      <Avatar src={avatarSrc} alt={userName} width="100" />
      <Name>{userName}</Name>
      <Tag>@{userTag}</Tag>
      <Location>{location}</Location>
      <Stats>
        <StatsCell>
          <Label>Followers</Label>
          <Quantity>{followersQuantity}</Quantity>
        </StatsCell>
        <StatsCell>
          <Label>Views</Label>
          <Quantity>{viewsQuantity}</Quantity>
        </StatsCell>
        <StatsCell>
          <Label>Likes</Label>
          <Quantity>{likesQuantity}</Quantity>
        </StatsCell>
      </Stats>
    </Description>
  );
}

UserProfile.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followersQuantity: PropTypes.number.isRequired,
  viewsQuantity: PropTypes.number.isRequired,
  likesQuantity: PropTypes.number.isRequired,
};
