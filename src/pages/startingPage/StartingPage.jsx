import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss';
import Newsfeed from './NewsFeed/NewsFeed.jsx';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (
        <div className={styles.mainContainer}>
            <aside className={styles.leftAside}>Left side(folosim components leftside)</aside>
            <section className={styles.newsfeed}>
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id}></Newsfeed>
                })}
            </section>
            <aside className={styles.rightAside}>Right side(folosim components rightside)</aside>
        </div>
    )
}

export default StartingPage;