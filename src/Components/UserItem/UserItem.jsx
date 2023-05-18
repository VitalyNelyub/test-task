import css from '../UserItem/UserItem.module.css';
import goItLogo from './Images/Logo.png';
import centerLine from './Images/Rectangle.png';
import avatar from './Images/Boy.png';
import bgCard from './Images/bg-card.png';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { updateUserFollowersApi } from '../../Service/fetchUsers';

export default function UserItem({ users, setUsers }) {
  
  const [followingIdUser, setFollowingIdUser] = useState(() => {
    const storedFollowingIdUser =
      JSON.parse(localStorage.getItem('followingUserId')) || [];
    return storedFollowingIdUser;
  });

  useEffect(() => {
    const savedStorage = () => {
      localStorage.setItem('followingUserId', JSON.stringify(followingIdUser));
    };
    savedStorage();
  }, [followingIdUser]);

  const handleUpdateFollow = id => {
    if (followingIdUser.includes(id)) {
      setFollowingIdUser(prevUsers =>
        prevUsers.filter(userId => userId !== id)
      );
    } else {
      setFollowingIdUser(prevUsers => [...prevUsers, id]);
    }
  };

  const handleChangeFollowersCount = id => {
    const findCurrentUser = users.find(user => user.id === id);

    const updatedFollowersCount = followingIdUser.includes(id)
      ? findCurrentUser.followers - 1
      : findCurrentUser.followers + 1;

    const updatedUser = {
      ...findCurrentUser,
      followers: updatedFollowersCount,
    };

    const updatedUsers = users.map(user =>
      user.id === id ? updatedUser : user
    );

    setUsers(updatedUsers);
    handleUpdateFollow(id);

    const body = JSON.stringify({ followers: updatedFollowersCount });
    updateUserFollowersApi(id, body);
  };

  return users.map(user => (
    <li key={nanoid()} className={css.userItem}>
      <img src={goItLogo} className={css.logo} />
      <img src={centerLine} className={css.centerLine} />
      <img src={avatar} className={css.avatar} />
      <img src={bgCard} className={css.bgCard} />
      <img src={user.avatar} className={css.userPhoto} />
      <div className={css.userInfo}>
        <h1 className={css.userName}>{user.name}</h1>
        <p className={css.userRating}>{user.tweets} TWEETS</p>
        <p className={css.userRating}>
          {user.followers.toLocaleString('ja-JP')} FOLLOWERS
        </p>
        <button
          onClick={() => handleChangeFollowersCount(user.id)}
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
