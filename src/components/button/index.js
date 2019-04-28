import React,{Component} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Button extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    const buttonClass = classNames(['ui-button',this.props.type && 'ui-button-'+this.props.type,this.props.disabled && 'disabled',this.props.loading && 'loading'])
    return (
      <a href="javascript:" 
        onClick={(e)=>{
          this.props.onClick && this.props.onClick(e)
        }} 
        className={buttonClass} 
        role="button">
        {this.props.children}
      </a>
    )
  }
}
Button.propTypes = {
  type: PropTypes.oneOf(['primary','success','warning','']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  loading: false,
  onClick:function(){}
}

export default Button