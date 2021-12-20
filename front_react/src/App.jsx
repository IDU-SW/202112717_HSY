import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppTemplate } from './pages/pages'

import { useSelector } from "react-redux";
//import { selectMenus } from "./reducers/menus";
//import { menus } from './constant/menus'

export const App = () => {

  // store에 접근하여 state 가져오기
  const { menus } = useSelector(state => state.menus);

  // dispatch를 사용하기 위한 준비
  // const dispatch = useDispatch();  

  // const select = () => {
  //   // store에 있는 state 바꾸는 함수 실행
  //   dispatch(selectMenus(menus));
  // };
  

  return (
    <div className = 'App'>
      <Routes>
      {menus.map( (menu) => {
          return (<Route key = { menu.index } path = {menu.href} element = { <AppTemplate key = {menu.index} /> }/> )
        })}
      </Routes>
    </div>
  );
}


