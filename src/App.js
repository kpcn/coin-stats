import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/Common/NotFound';
import CoinDetail from './containers/CoinDetail';
import CoinListing from './containers/CoinListing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinListing />} />
        <Route path="detail/:symbol" element={<CoinDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
