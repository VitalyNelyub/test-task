import goItLogo from '../../Components/UserItem/Images/homeLogo.png';
import css from '../Home/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 className={css.homeTitle}>WELCOME TO TWEETS APP</h1>
      <img src={goItLogo} className={css.logoHome} />
    </>
  );
}
