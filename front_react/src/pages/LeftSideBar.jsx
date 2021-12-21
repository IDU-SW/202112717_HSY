import { useSelector, useDispatch } from "react-redux";
import { Nav, NavDropdown } from 'react-bootstrap'
import { choiceMenus } from '../reducers/menus'
export const LeftSideBar = () => {

    const { menus } = useSelector(state => state.menus)
    const dispatch = useDispatch()
    const choiceMenu = (index) => {
        dispatch( choiceMenus(index) )
    }

    return (

        <div className = 'LeftSideBar'>
            {
                menus.filter(menu => menu.parentIndex === -1)
                     .map( baseMenu => {
                         if ( baseMenu.shape === 'NavDropdown' ){
                            
                            return (
                            <NavDropdown key = {baseMenu.index} title = { baseMenu.title } className = "flex-column">
                                
                                {
                                    menus.filter( menu => baseMenu.index === menu.parentIndex )
                                         .map( childMenu => <Nav.Link key = {childMenu.index} onClick = {() => choiceMenu(childMenu.index)} >
                                                               {childMenu.title}
                                                            </Nav.Link>)
                                }
                            </NavDropdown>
                            )
                         }
                         else if ( baseMenu.shape === 'Nav.Link' ){

                             return (
                                <Nav.Link key = {baseMenu.index} onClick = {() => choiceMenu(baseMenu.index)} >
                                    {baseMenu.title}
                                </Nav.Link>
                             )
                         } else {

                            return ''
                         }
                     })
                
            }
        </div>
    )
}