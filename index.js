import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';s
import reportWebVitals from './reportWebVitals';
import Todo from './components/Todo';
import { Route, Routes } from 'react-router-dom';
import { TodoProvider } from './components/TodoContext';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoDetails from './components/TodoDetails';
import { Provider } from 'react-redux';
import store from './components/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
   <Provider store={store}>
   <Router>
      <TodoProvider>
        <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </TodoProvider>
    
    </Router>
   </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
