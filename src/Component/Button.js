import React from 'react'
import PropTypes from 'prop-types'
// check props type of componet

class Button extends React.Component{


    render(){
        return(
            <>
                <button style={this.props.style} onClick={this.props.click} type={this.props.type} className="btn btn-primary">{this.props.children}</button>
            </>
        )
    }
}
Button.propsTypes = {
    click : PropTypes.func.isRequired,
    type : PropTypes.string.isRequired,
    children : PropTypes.string.isRequired,
    style : PropTypes.object.isRequired,
}
Button.defaultProps = {
    style : {
        width : '20%',
        background : "#000",
        color : "#fff",
    },
}

export default Button