import { useEffect, useState } from "react";
import getUsers from "../../Service/fetchUsers";
import Swal from "sweetalert2";
import UsersGallery from "../UsersGallery/UsersGallery";
import Loader from "../Loader/Loader";
import css from '../UsersGallery/UsersGallery.module.css';
import { Link } from "react-router-dom";

export default function Tweets() {
      const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (page) {
      if (page === 1) {
        setIsLoading(false);
        getUsers(page).then(data => setUsers(data));

        setShowBtn(true);
      } else {
        // console.log('fetch');
        getUsers(page).then(data => {
          if (data.length > 0) {
            setUsers(prevUsers => [...prevUsers, ...data]);
          } else {
            setIsLoading(false);
            setShowBtn(false);
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Sorry, no more users',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    } else {
      console.log('exit');
    }
  }, [page]);
  // console.log(users);

  const loadMore = () => {
    // console.log(e);
    setPage(prev => prev + 1);
    // console.log(page);
  };
  return (
    <div className={css.tweetsPage}>
      <Link  className={css.backHomeLink} to={'/'}>BACK TO HOME PAGE</Link>
      {!isLoading ? (
        <UsersGallery users={users} setUsers={setUsers} />
      ) : (
        <Loader />
      )}
      {showBtn && (
        <button onClick={loadMore} className={css.loadMore}>
          LOAD MORE
        </button>
      )}
    </div>
  );
}
