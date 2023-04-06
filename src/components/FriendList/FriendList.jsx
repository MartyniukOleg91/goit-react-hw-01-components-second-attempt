import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem dataFriends={friends} />
    </ul>
  );
};
