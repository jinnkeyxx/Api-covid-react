import React from 'react'
import PropTypes from 'prop-types'
class Result extends React.Component{
    render(){
        return(
            <>
                <h1>{this.props.result}</h1>
            </>
        )
    }
}
Result.propsTypes = {
    result : PropTypes.number,
}

Result.defaultProps = {
    result : 0,
}

export default Result