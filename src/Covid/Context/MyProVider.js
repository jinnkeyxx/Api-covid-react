import React from 'react'
import MyContext from './MyContext'
import {api} from '../Api/index'
class ApiProVider extends React.Component{
    constructor(){
        super()
        this.state = {
            virust : [],
            isLoading : true
        }
    }
    setStateAsync = (state) => {
        return new Promise(resolve => {
            this.setState(state , resolve)
        })
    }
    async componentDidMount(){
        await this.setStateAsync({isLoading : true})
        const data = await api.getData()
        await this.setStateAsync({...this.state, isLoading:false, virust : data})
    }
    render() {
        return (
            <>
                <MyContext.Provider value={this.state}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}
export default ApiProVider