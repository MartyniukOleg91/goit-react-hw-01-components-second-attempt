import {Profile} from './Profile/Profile'
import user from '../json/user.json';


export const App = (props) => {
  console.log(props);
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />


    </div>
  );
};
