export const leftSideMenus = [
      { selectedTF : true, index : 0, shape : "Nav.Link", depth : 0, parentIndex : -1, title : 'DashBoard', href : '/'}
//    , { selectedTF : false, index : 1, shape : "NavDropdown", depth : 0, parentIndex : -1, title : 'Public', href : '/market/kinds' }
    , { selectedTF : false, index : 2, shape : "NavDropdown", depth : 1, parentIndex : -1, title : 'Pubilc', href : '#' }
    , { selectedTF : false, index : 3, shape : "Nav.Link", depth : 2, parentIndex : 2, title : 'Markets', href : '/markets' }
    , { selectedTF : false, index : 4, shape : "Nav.Link", depth : 2, parentIndex : 2, title : 'Candles', href : '/candles' }
    , { selectedTF : false, index : 5, shape : "NavDropdown", depth : 0, parentIndex : -1, title : 'Private', href : '#' }
    , { selectedTF : false, index : 6, shape : "Nav.Link", depth : 1, parentIndex : 5, title : 'Accounts', href : '/account' }
 //   , { selectedTF : false, index : 7, shape : "Nav.Link", depth : 1, parentIndex : 5, title : 'History', href : '/history' }
    , { selectedTF : false, index : 8, shape : "NavDropdown", depth : 1, parentIndex : -1, title : 'Trade', href : '#' }
    , { selectedTF : false, index : 9, shape : "Nav.Link", depth : 1, parentIndex : 8, title : 'Buy', href : '/buy' }
    , { selectedTF : false, index : 10, shape : "Nav.Link", depth : 1, parentIndex : 8, title : 'Sell', href : '/sell' }
]