import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { User } from 'Routes';
import { ThemeProvider } from 'styled-components';

const theme = {
  wb: '#d9d0c7',
  bg: '#363636',
  red: '#8c2b45',
  bc: '#a68a7b',
  fc: '#6b594f',
  c: '#d99c52',
};

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<User />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
