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
