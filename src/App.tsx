import { Provider } from "react-redux";
import { store } from "./store/Store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import UserList from "./components/UserList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-6">1-Vazifa Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
      <UserList></UserList>
    </Provider>
  );
};

export default App;
