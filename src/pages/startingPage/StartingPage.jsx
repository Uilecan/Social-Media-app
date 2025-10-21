import useFetch from '../../hooks/useFetch';
import styles from './StartingPage.module.scss';
import Newsfeed from './newsfeed/Newsfeed.jsx';
import { useEffect, useState } from 'react';
import postService from '../../services/postService.js';

const StartingPage = () => {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await postService.get();
            setPostList(response);
            return response;
        }
        getPosts().catch(error => {
            console.error('Error fetching posts:', error);
        })
    }, [])

    return (
        <div className={styles.mainContainer}>
            <aside className={styles.leftAside}>Left side(folosim components leftside)</aside>
            <section className={styles.newsfeed}>
                {postList && postList.map(post => {
                    return <Newsfeed postData={post} key={post.id}></Newsfeed>
                })}
                {posts && posts.map(post => {
                    return <Newsfeed postData={post} key={post.id}></Newsfeed>
                })}
            </section>
            <aside className={styles.rightAside}>Right side(folosim components rightside)</aside>
        </div>
    )
}

export default StartingPage;