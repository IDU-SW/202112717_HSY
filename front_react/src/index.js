import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import rootReducer from './reducers'
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";


// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  
  <BrowserRouter>
    {/* 만든 store를 앱 상위에 넣어줍니다.*/}
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);
