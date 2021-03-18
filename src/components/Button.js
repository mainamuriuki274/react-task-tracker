import PropTypes from 'prop-types';
import { FaPlus, FaTimes } from 'react-icons/fa'

const Button = (props) => {


    return (
        <button 
        style={{ backgroundColor: props.color}}
        onClick = { props.onClick }
        className='btn'>
        {props.title} {props.icon}</button>
    )
}

Button.defaultProps = {
    color:  "blue"
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button
