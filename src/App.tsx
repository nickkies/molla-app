import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { User } from 'Routes';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
