import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const AdminRoute1 = ({ children }) => {
    
    var location = useLocation();
    var role = location.state.role;
    
    if (role == "admin") {
        return <>{children}</>;
    } else {
        return <h1>Page not found</h1>;
    }
};

AdminRoute1.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminRoute1;
