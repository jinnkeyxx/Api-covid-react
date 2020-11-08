import React from 'react'
import {Row , Col , Card ,Skeleton} from 'antd'
import MyContext from '../Context/MyContext'
class GlobalComponent extends React.Component{
    render(){
        return(
            <MyContext.Consumer>
                {context => {
                    if(context.isLoading || context.virust === undefined){
                        return <Skeleton active />
                    }
                    return(
                        <Row>
                            <Col span={8}>
                                <Card title="Nhiem Benh" bordered={true}>
                    <p>--Moi Nhiem : {context.virust.Global.NewConfirmed}</p>
                    <p>--Tong so nhiem : {context.virust.Global.TotalConfirmed}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Tu Vong" bordered={true}>
                    <p>--Moi Tu vonng : {context.virust.Global.NewDeaths}</p>
                    <p>--Tong so ca tu vong : {context.virust.Global.TotalDeaths}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Khoi Benh" bordered={true}>
                    <p>--Moi Khoi benh : {context.virust.Global.NewRecovered}</p>
                    <p>--Tong so ca Khoi benh: {context.virust.Global.TotalRecovered}</p>
                                </Card>
                            </Col>
                         </Row>
                    )
                }}
            </MyContext.Consumer>

        )

    }
}
export default GlobalComponent