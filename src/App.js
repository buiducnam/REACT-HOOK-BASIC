import './App.scss';
// import ColorBox from './components/ColorBox/ColorBox';
// import TodoList from './components/TodoList/TodoList';
// import TodoForm from './components/TodoForm/TodoForm';
import PostList from './components/PostList/PostList';
import Pagination from './components/Pagination/Pagination';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Go to shool" },
    { id: 2, title: "Go to lunch" },
    { id: 3, title: "Go to bed" }
  ]);
  const [posts, setPosts] = useState([]);
  const [paginations, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 50
  })

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1
  });

  useEffect(() => {
    async function getPostList() {
      try {
        const param = queryString.stringify(filter);
        const response = await axios.get(`https://js-post-api.herokuapp.com/api/posts?${param}`)
          .then(function (response) {
            return response;
          })
          .catch(function (error) {
            console.log(error);
          })
        // console.log(typeof response)
        const { data, pagination } = await response.data;
        setPosts(data);
        // console.log(pagination);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }
    getPostList();
  }, [filter]);

  const onRemoveItem = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  }

  const onHandleSubmit = (formValue) => {
    const newTodo = {
      id: todos.length + 1,
      ...formValue
    }
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  const onChangePage = (_page) => {
    setFilter({
      ...filter,
      _page,
    });
  }

  return (
    <div className="App">
      <PostList posts={posts} />
      <Pagination pagination={paginations} onChangePage={onChangePage} />
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={onHandleSubmit} />
      <TodoList todos={todos} onTodoClick={onRemoveItem} /> */}
    </div>
  );
}

export default App;
