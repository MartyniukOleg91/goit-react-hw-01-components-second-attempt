import css from './FriendList.module.css';

const FriendListItem = ({ dataFriends }) => {
  return (
    <div>
      {dataFriends.map(friend => (
        <li className={css.status} key={friend.id}>
          {friend.isOnline ? (
            <span className={css.statusOnline}></span>
          ) : (
            <span className={css.statusOffline}></span>
          )}

          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </li>
      ))}
    </div>
  );
};

export default FriendListItem;
