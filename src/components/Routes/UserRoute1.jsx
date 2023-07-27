import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const UserRoute1 = ({ children }) => {
    const location = useLocation();
    var role = location.state?.role;

    role = 'user';
    if (role === "user") {
        return <>{children}</>;
    } else {
        return <h1>Page not found</h1>;
    }
};

UserRoute1.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserRoute1;
