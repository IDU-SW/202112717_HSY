import { useSelector, useDispatch } from "react-redux";
export const Main = ( ) => {

    const { menus } = useSelector(state => state.menus);
    const selectedMenu = menus.filter( menu => menu.selectedTF )[0]
    return (
        <div className = 'Main'>
            {selectedMenu !== undefined ? selectedMenu.title : '1234'}
            
            
        </div>
    )
}