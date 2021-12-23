import { useState, useEffect } from "react"
import { Table, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { selectMyAccount } from '../../reducers/'
export const Account = () => {

    const [ checkedAssets, setCheckedAssets ] = useState([])
    const [ volume, setVolume ] = useState( 0 )
    const [ allChecked, setAllChecked ] = useState(false)
    const dispatch = useDispatch()

    const swapVolume = ( text) => {
        
        setVolume(text)
    }

    const selectAccount = () => {
        
        fetch("http://localhost:3001/account")
            .then( res => res.json())
            .then( json => {
                const copyAccount = new Array()
                json.forEach( J => {
                    copyAccount.push({  isChecked : false, ...J,})
                })
                setCheckedAssets(copyAccount)
                dispatch( selectMyAccount(json) )
             })
    }
    const allCheckAsset = ( bool ) => {
        
        
        setCheckedAssets( checkedAssets.map( asset => {
            asset.isChecked = bool === undefined ? !allChecked : bool
            return asset
        }) )

        checkedAssets.forEach ( (asset, index) => {

            document.getElementById(`checkbox_${index}`).checked = bool === undefined ? !allChecked : bool
        })
        setAllChecked(bool === undefined ? !allChecked : bool)
        
    }
    const checkAsset = ( index ) => {

        checkedAssets[index].isChecked = !checkedAssets[index].isChecked
        setCheckedAssets(checkedAssets)
    }

    const sellMarket = () => {

        if ( window.confirm('선택한 목록들을 시장가에 파시겠습니까?') ){

            checkedAssets.filter(asset => asset.isChecked).forEach( (asset, index) => {
                if ( index + 1 % 9 === 0 ){
                    const startDate = new Date()
                    while (true){
                        if ( new Date() - startDate() > 1000 ) break // milliseconds
                    }
                }
                fetch("http://localhost:3001/sell", {
                    method: 'POST'
                    , headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
                    , body : JSON.stringify({
                          market : `KRW-${asset.currency}`
                        , volume : volume
                    })
                })
                .then( res => res.json())
                .then( json => {
                console.log(json)
                
                })
                selectAccount()
                allCheckAsset(false)
            })
            
        }
                
        
    }



    const ACCOUNT_TABLE_HEAD = [
          { no : 0, name : 'no' }
        , { no : 1, name : 'currency' }  
        , { no : 2, name : 'balance' }
        , { no : 3, name : 'locked'}
        , { no : 4, name : 'avg_buy_price' }
        , { no : 5, name : 'avg_buy_price_modified' }
        , { no : 6, name : 'unit_currency' } 
    ]
    
    return (

        <div className = 'Account'>
            this view is Account<br/>
            volume : 
            <Form.Control className = 'm-2' style={{'display':'inline', 'width':'15%'}} type="text" placeholder="Volume" onChange = { (e) => swapVolume(e.target.value)} value = {volume}/>
            <Button className = 'm-2' onClick = { ()=> sellMarket()}>sell</Button>
            <Button className = 'm-2' onClick = { () => selectAccount() }>selectMyAccount</Button>
            <Table responsive>
                <thead>
                    <tr>
                        <th><input type='checkbox' onClick = {(e) => allCheckAsset()}></input></th>
                    {    
                        ACCOUNT_TABLE_HEAD.map( head => {
                            return <th key = {head.no}>{head.name}</th>
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        checkedAssets.map( ( asset, index ) => (
                            <tr key={index}>
                                <td><input type = 'checkbox' id = {`checkbox_${index}`}defaultChecked = {asset.isChecked} onClick = { () => checkAsset(index)}></input></td>
                                <td>{index}</td>
                                <td>{asset.currency}</td>
                                <td>{asset.balance}</td>
                                <td>{asset.locked}</td>       
                                <td>{asset.avg_buy_price}</td>
                                <td>{asset.avg_buy_price_modified ? '변경됨' : '변경되지 않음'}</td>
                                <td>{asset.unit_currency}</td>
                                
                            </tr>
                        ))
                    }
                    
                </tbody>
            </Table>


        </div>
    )
}