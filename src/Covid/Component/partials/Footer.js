import React from 'react'
import { Layout } from 'antd'
const { Footer } = Layout
class FooterComponent extends React.Component{
    render(){
        return (
            <>
            <Footer>
                <div className="footer">
                    <h1 style={{textAlign : 'center'}}>CopyRight  	&copy; 2020 - Bool </h1>
                </div>
            </Footer>
            </>
        )
    }
}
export default FooterComponent
