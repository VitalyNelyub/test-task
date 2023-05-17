import css from '../UserItem/UserItem.module.css';
import goit from './Images/Logo.png';
import centerLine from './Images/Rectangle.png';
import avatar from './Images/Boy.png';
import bgCard from './Images/bg-card.png';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function UserItem({ users }) {
  const [followingIdUser, setFollowingIdUser] = useState([]);
  console.log(followingIdUser);

  const handleUpdateFollow = id => {
    if (followingIdUser.includes(id)) {
      setFollowingIdUser(prevUsers =>
        prevUsers.filter(userId => userId !== id)
      );
    } else {
      setFollowingIdUser(prevUsers => [...prevUsers, id]);
    }
  };

  const btnTest = followers => {
    console.log(followers);
    console.log('ЖМАК');
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
          onClick={() => handleUpdateFollow(user.id)}
          onMouseDown={btnTest(user.followers)}
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
