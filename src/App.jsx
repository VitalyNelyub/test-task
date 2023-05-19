import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Tweets from './Components/Tweets/Tweets';
// import NotFound from './Components/NotFound/NotFound.jsx';
// import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
