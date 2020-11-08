import React from 'react'
import { Layout } from 'antd'

import LayoutComponent from './Component/partials/layout'
import GlobalComponent from './Component/global'
import Country from './Component/country'
import ApiProVider from './Context/MyProVider'
class Corona extends React.Component{

    render() {
        return (

            <LayoutComponent>
                <ApiProVider>
                    <h3 style={{textAlign :'center' , padding:'20px 0'}}>Thong Tin Chung</h3>
                    <GlobalComponent/>
                    <h3 style={{textAlign :'center' , padding:'20px 0'}}>Thong Tin Chi Tiet Cac Nuoc</h3>

                    <Country/>
                </ApiProVider>
            </LayoutComponent>

        )
    }


}
export default Corona