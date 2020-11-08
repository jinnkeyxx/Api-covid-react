import React from 'react'
import { Layout } from 'antd';
const { Header } = Layout
class HeaderComponent extends React.Component{
    render(){
        return (

            <Header >
                <div className="my-header">
                    <h1 style={{color : 'white' , textAlign : 'center' , padding : '10px 0'}}>Thong tin covid 19 nam 2020</h1>
                </div>
            </Header>

        )
    }
}
export default HeaderComponent