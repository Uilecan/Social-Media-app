import PropTypes from 'prop-types';
import Navigation from './Navigation.jsx';
import styles from './Layout.module.scss';

import { useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';

const Layout = ({children}) => {

    const user = useSelector(selectUser);
    const isLoggedIn = user.isAuthenticated;
    return (
        <>
        {isLoggedIn && <Navigation></Navigation>}
            <main className={styles.mainContent}>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
};


export default Layout;
