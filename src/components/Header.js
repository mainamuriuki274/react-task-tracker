import PropTypes from 'prop-types'
import Button from './Button'
import { FaPlus, FaTimes } from 'react-icons/fa'

const Header = (props) => {
    const onClick = () =>{
        console.log('click')
    }
    return (
        <header>
           <h1>{props.title}</h1> 
           <Button title={props.showAddTask ? 'Close'  : 'Add Task' } color={props.showAddTask ? 'red' : 'green'}  onClick = { props.onAdd } icon ={props.showAddTask ?  <FaTimes style={{ color: 'white' }}/> : <FaPlus style={{ color: 'white'}} />
           } />
        </header>
    )
}

Header.defaultProps = {
    title:  "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

// //CSS in JS
// const headingStyle = {
// color: "red",
// backgroundColor: "blue"

// }

export default Header
