import PropTypes from 'prop-types';
import UserItem from '../UserItem/UserItem';
import css from '../UsersGallery/UsersGallery.module.css';

export default function UsersGallery({ users, setUsers }) {
  //   console.log(users);
  return (
    <>
      <div className={css.usersGallery}>
        <UserItem users={users} setUsers={setUsers} />
      </div>
    </>
  );
}

UsersGallery.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
