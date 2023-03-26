import { Link } from "react-router-dom";


function HeaderCEmployee() {
    return(
    <div>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
        </div>
    </div>
    )
}

export default HeaderCEmployee;