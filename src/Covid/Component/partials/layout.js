import React from 'react'
import {Layout} from 'antd'
import { Row, Col } from 'antd';
import HeaderComponent from './Header'
import FooterComponent from './Footer'
const {Content} = Layout
class LayoutComponent extends React.Component{

    render(){
        return(
            <Layout>
                <HeaderComponent/>
                <Content>
                    <Row>
                        <Col span={20} offset={3}>
                        {this.props.children}
                        </Col>
                    </Row>
                </Content>
                <FooterComponent/>
            </Layout>
        )


    }
}
export default LayoutComponent