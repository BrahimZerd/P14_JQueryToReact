import { Link } from "react-router-dom";
import Wealth from '../assets/wealth.png'


function HeaderCEmployee() {
    return(
    <div className='logo' id="header">
        
        <img src={Wealth} alt='logo' />
        
        
            <div>
            <h1>HRnet</h1>
            <h2>Create Employee</h2>
            </div>
        <div className="container">
            <div className='list'>
            
            <Link to="/employee-list">View Current Employees</Link>
            </div>
        </div>
    </div>
    )
}

export default HeaderCEmployee;