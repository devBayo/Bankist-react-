import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { UsersContextProvider } from './contexts/users-context';

function App() {
  return (
    <UsersContextProvider>
      <Header />
      <Main />
    </UsersContextProvider>
  );
}

export default App;
