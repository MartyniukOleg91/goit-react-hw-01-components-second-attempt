export const FriendList = ({ friends }) => {
  return (
<ul>
 {friends.map((friend)=>(
    <li key={friend.id}>
    <span ></span>
    <img src={friend.avatar} alt="User avatar" width="48" />
    <p >{friend.name}</p>
  </li>
 ))}
</ul>
  )
};

// {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },