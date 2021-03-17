import PropTypes from 'prop-types';

const Button = (props) => {


    return (
        <button 
        style={{ backgroundColor: props.color}}
        onClick = { props.onClick }
        className='btn'>
        {props.title}</button>
    )
}

Button.defaultProps = {
    color:  "blue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button
