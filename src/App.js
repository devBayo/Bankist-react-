import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { AuthContextProvider } from './contexts/auth-context';

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  );
}

export default App;
