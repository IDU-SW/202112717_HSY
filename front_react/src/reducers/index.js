import { combineReducers } from 'redux'

import { menus } from './menus'
import { markets } from './markets'

const rootReducer = combineReducers({

      menus
    , markets
})

export default rootReducer 