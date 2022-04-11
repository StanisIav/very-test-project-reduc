import { type } from 'os';
import React, { useEffect, useState, useMemo } from 'react';
import './style/App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux'
import UserReducer from "./store/reducers/UserSlice"
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import UserSlice from './store/reducers/UserSlice';
import {increment, FetchinfLoad, FetchingSucceful, FetchingError, ChangeFetching} from './store/reducers/UserSlice'
import { AppDispatch } from './store/store';
import { initval } from './store/reducers/UserSlice';
import { UserFetching } from './store/reducers/ActionsCreate';
import PostComponent from './component/PostComponent';
import PostComponent2 from './component/PostComponent2';
import { MyBtn } from './component/MyBtn';

function App() {

const {users, iisLoading, error, counter} = useAppSelector(state => state.UserReducer)
const dispatch = useAppDispatch()

function ClickBut(){
  dispatch(increment(10))
  console.log(initval)
}

useEffect(() => {
  dispatch(UserFetching())
},[])

function reset(){
  dispatch(ChangeFetching())
}

  return (
    <div className="App">
      <button onClick={() => ClickBut()}>Добавить</button>
      {counter}
      {users.length == 0 ?
        null:
        JSON.stringify(users, null, 2)
      }
      {iisLoading && <h1>'Идёт загрузка'</h1>}
    {error && error}
    <MyBtn onClick={() => reset()}>Кнопка</MyBtn>
      <div style={{display: 'flex'}}>
      <PostComponent/>
      <PostComponent2/>
      </div>
    </div>
  );
}

export default App;
