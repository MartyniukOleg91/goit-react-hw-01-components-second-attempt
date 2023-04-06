import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ dataFriends }) => {
  return (
    <div>
      {dataFriends.map(friend => (
        <li className={css.status} key={friend.id}>
          <span
            className={friend.isOnline ? css.statusOnline : css.statusOffline}
          />

          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </li>
      ))}
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  dataFriends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
