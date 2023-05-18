import css from '../UserItem/UserItem.module.css';
import goit from './Images/Logo.png';
import centerLine from './Images/Rectangle.png';
import avatar from './Images/Boy.png';
import bgCard from './Images/bg-card.png';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function UserItem({ users, setUsers }) {
  const [followingIdUser, setFollowingIdUser] = useState([]);

  // console.log(followingIdUser);

  const savedStorage = () => {
    localStorage.setItem('followingUserId', JSON.stringify(followingIdUser));
  };

  const parseLocal = JSON.parse(localStorage.getItem('followingUserId'));
  // console.log(parseLocal.length);
  savedStorage(followingIdUser);


  const updaterUserIncrement = find => {
    return {
      id: find.id,
      name: find.name,
      followers: find.followers + 1,
      tweets: find.tweets,
    };
  };

  const updaterUserDecrement = find => {
    return {
      id: find.id,
      name: find.name,
      followers: find.followers - 1,
      tweets: find.tweets,
    };
  };

    const handleUpdateFollow = id => {
    if (followingIdUser.includes(id)) {
      setFollowingIdUser(prevUsers =>
        prevUsers.filter(userId => userId !== id)
      );
    } else {
      setFollowingIdUser(prevUsers => [...prevUsers, id]);
    }
  };


  const handleChancheFollowersCount = id => {
    const find = users.find(user => user.id === id);

    updaterUserDecrement(find);
    updaterUserIncrement(find);

    let updatedUsers = {};
    if (followingIdUser.includes(id)) {
      updatedUsers = users.map(user => {
        if (user.id === updaterUserDecrement.id) {
          return { ...user, ...updaterUserDecrement };
        }
        return user;
      });
    } else {
      updatedUsers = users.map(user => {
        if (user.id === updaterUserIncrement.id) {
          return { ...user, ...updaterUserIncrement };
        }
        return user;
      });
    }
    setUsers(updatedUsers);
    handleUpdateFollow(id);
  };

  return users.map(user => (
    <li key={nanoid()} className={css.userItem}>
      <img src={goit} className={css.logo} />
      <img src={centerLine} className={css.centerLine} />
      <img src={avatar} className={css.avatar} />
      <img src={bgCard} className={css.bgCard} />
      <img src={user.avatar} className={css.userPhoto} />
      <div className={css.userInfo}>
        <h1 className={css.userName}>{user.name}</h1>
        <p className={css.userRating}>{user.tweets} TWEETS</p>
        <p className={css.userRating}>{user.followers} FOLLOWERS</p>
        <button
          // onClick={() => handleUpdateFollow(user.id)}
          onMouseDown={() => handleChancheFollowersCount(user.id)}
          className={`${css.followBtn} ${
            followingIdUser.includes(user.id) ? css.following : ''
          }`}
        >
          {followingIdUser.includes(user.id) ? 'FOLOWING' : 'FOLLOW'}
        </button>
      </div>
    </li>
  ));
}

//   const handleUpdateFollow = id => {
//   if (followingIdUser.includes(id)) {
//     setFollowingIdUser(prevUsers =>
//       prevUsers.filter(userId => userId !== id)
//     );

//     const body = JSON.stringify({ followers: '777' });
//     updateUserFollowers(id, body);
//   } else {
//     setFollowingIdUser(prevUsers => [...prevUsers, id]);

//     const body = JSON.stringify({ followers: '111', isFollowing: true });
//     updateUserFollowers(id, body);
//   }
// };
