import { useSelector } from "react-redux";
import { Markets, Candles, Account, Buy, Sell } from './main/'
export const Main = ( ) => {

    const { menus } = useSelector(state => state.menus);
    
    const choicedMenu = menus.filter( menu => menu.selectedTF )[0]
    const renderSwitch = (choicedMenu) => {
        let choicedJsx
        switch ( choicedMenu.index ){
            case 3 :
                choicedJsx = <Markets/>
            break
            case 4 : 
                choicedJsx = <Candles/>
            break
            case 6 : 
                choicedJsx = <Account/>
            break
            case 9 : 
                choicedJsx = <Buy/>
            break
            case 10 : 
                choicedJsx = <Sell/>
            break
            default :
            break
        }
        return choicedJsx
    }

    return (
        <div className = 'Main'>
            { renderSwitch(choicedMenu) }
        </div>
    )
}