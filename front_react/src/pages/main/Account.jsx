import { useState, useEffect } from "react"
import { Table, Button } from "react-bootstrap"
import { useSelector } from "react-redux"

export const Account = () => {

    const { account } = useSelector(state => state.account)
    const [ selectedMarket, setSelectedMarket ] = useState([])

    const selectAccount = () => {

        const url = 1
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
            <Button onClick = { ()=>window.confirm('파시겠습니까?')}>sell</Button>
            <Table responsive>
                <thead>
                    <tr>
                    {
                        ACCOUNT_TABLE_HEAD.map( head => {
                            return <th key = {head.no}>{head.name}</th>
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        account.map( ( asset, index ) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{asset.currency}</td>
                                <td>{asset.balance}</td>
                                <td>{asset.locked}</td>       
                                <td>{asset.avg_buy_price}</td>
                                <td>{asset.avg_buy_price_modified}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </Table>


        </div>
    )
}