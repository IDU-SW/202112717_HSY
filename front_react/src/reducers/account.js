import { constantMarkets } from '../constant/markets'

export const SELECT = "SELECT/ACCOUNT";

export const swapAccount = (account) => {
  return { type: SELECT, account }
}

const initState = {
    account : []
}


export const account = (state = initState, action) => {
  switch (action.type) {
    case SELECT:
        
        return {
            ...state,
            accounts : action.account
        }   

    // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
    default:
        return state;
  }
};