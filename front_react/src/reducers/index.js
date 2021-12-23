import { combineReducers } from 'redux'

import { menus } from './menus'
import { markets } from './markets'
import { account  } from './account'
export { swapMarkets } from './markets'
export { selectMyAccount } from './account'
const rootReducer = combineReducers({

      menus
    , markets
    , account
})

export default rootReducer 