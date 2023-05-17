import { useState, useEffect } from 'react';
import './App.css';
import getUsers from './Service/fetchUsers';
import UsersGallery from './Components/UsersGallery/UsersGallery';
// import UsersGallery from './Components/UserItem/UserItem';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(users.length);

  useEffect(() => {
    if (users.length === 0) {
      getUsers(page).then(data => setUsers(data));
    } else {
      console.log('exit');
    }
  }, [page, users.length]);
  // console.log(users);

  const loadMore = () => {
    // console.log(e);
    setPage(prev => prev + 1);
    console.log(page);
  };
  return (
    <>
      <UsersGallery users={users} />
      <button onClick={loadMore}>LOAD MORE</button>
    </>
  );
}

export default App;
