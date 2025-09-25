import PropTypes from 'prop-types';
import Navigation from './Navigation.jsx';
import styles from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <>
        <Navigation></Navigation>
            <main className={styles.mainContent}>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
};


export default Layout;
