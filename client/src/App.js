import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { BetPage } from './pages/BetPage/BetPage';
import { RacePage } from './pages/RacePage/RacePage';
import { ResultPage } from './pages/ResultPage/ResultPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<BetPage />} />
        <Route path='/race' element={<RacePage />} />
        <Route path='/result' element={<ResultPage />} />
      </Route>
    </Routes>
  );
}

export default App;
