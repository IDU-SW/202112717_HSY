// reducers/counter.js
// reducer가 많아지면 action상수가 중복될 수 있으니
// 액션이름 앞에 파일 이름을 넣습니다.
import { constantMarkets } from '../constant/markets'
export const SELECT = "SELECT/MARKETS";

export const selectMarkets = () => ({ type: SELECT,  })

const initState = {
    markets : constantMarkets
}
export const markets = (state = initState, action) => {
  switch (action.type) {
    case SELECT:
      
      return {
        ...state,
        markets : action.markets
      };

    // default를 쓰지 않으면 맨처음 state에 count값이 undefined가 나옵니다 꼭! default문을 넣으세요
    default:
      return state;
  }
};