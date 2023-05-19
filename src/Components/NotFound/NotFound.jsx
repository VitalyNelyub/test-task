import { Link } from "react-router-dom";
import css from '../NotFound/NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <h1 className={css.notFoundTitle}>Uncorrect address, page not found!</h1>
      <Link  className={css.notFoundLink} to={'/'}>BACK TO HOME PAGE</Link>
    </>
  );
}