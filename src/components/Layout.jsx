import PropTypes from 'prop-types';
import Navigation from './Navigation.jsx';

const Layout = ({children}) => {
    return (
        <>
        <Navigation></Navigation>
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
};


export default Layout;
