// import { useState, useEffect } from 'react';
import './App.css';
// import getUsers from './Service/fetchUsers';
// import UsersGallery from './Components/UsersGallery/UsersGallery';
// import Swal from 'sweetalert2';
// import Loader from './Components/Loader/Loader';
// import css from './Components/UsersGallery/UsersGallery.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Tweets from './Components/Tweets/Tweets';
import NotFound from './Components/NotFound/NotFound';

function App() {
  // const [users, setUsers] = useState([]);
  // const [page, setPage] = useState(1);
  // const [showBtn, setShowBtn] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (page) {
  //     if (page === 1) {
  //       setIsLoading(false);
  //       getUsers(page).then(data => setUsers(data));

  //       setShowBtn(true);
  //     } else {
  //       // console.log('fetch');
  //       getUsers(page).then(data => {
  //         if (data.length > 0) {
  //           setUsers(prevUsers => [...prevUsers, ...data]);
  //         } else {
  //           setIsLoading(false);
  //           setShowBtn(false);
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'error',
  //             title: 'Sorry, no more users',
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       });
  //     }
  //   } else {
  //     console.log('exit');
  //   }
  // }, [page]);
  // // console.log(users);

  // const loadMore = () => {
  //   // console.log(e);
  //   setPage(prev => prev + 1);
  //   // console.log(page);
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* {!isLoading ? (
        <UsersGallery users={users} setUsers={setUsers} />
      ) : (
        <Loader />
      )}
      {showBtn && (
        <button onClick={loadMore} className={css.loadMore}>
          LOAD MORE
        </button>
      )} */}
    </>
  );
}

export default App;
