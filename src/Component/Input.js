import React from 'react'
import PropsTypes from 'prop-types'
class Input extends React.Component{
    render(){
        return(
            <>
                <input onChange={this.props.change} type={this.props.type} defaultValue={this.props.value} name={this.props.name}  />
            </>
        )
    }
}
Input.propsTypes = {
    change : PropsTypes.func.isRequired
}

export default Input