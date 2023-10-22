import Todo from './Components/Todo';
import LoginProvider from './Auth/LoginProvider';

export default function App() {
    return (
      <LoginProvider>
        <Todo />
      </LoginProvider>
    );
}
