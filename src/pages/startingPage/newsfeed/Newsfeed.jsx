import styles from './Newsfeed.module.scss';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';

import profile from '../../../assets/icons/profile.jpeg';
import post1 from '../../../assets/images/post1.jpeg';
import post2 from '../../../assets/images/post2.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors';
import CommentsSection, { USER_DATA } from './comments/CommentsSection';

const Newsfeed = ({ postData }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
    const [isShared, setIsShared] = useState(false);
    const [shares, setShared] = useState(Math.floor(Math.random() * 100));
    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    const [commentCount, setCommentCount] = useState(USER_DATA.length);

    const toggleComments = () => {
        setIsCommentsVisible(prev => !prev);
    };

    const user = useSelector(selectUser);

    const postImages = {
        0: post1,
        1: post2
    }

    const handleLike = () => {
        if (!isLiked) {
            setLikes(prevState => prevState + 1);
        }
        else {
            setLikes(prevState => prevState - 1);
        }
        setIsLiked(prevState => !prevState);
    }

    const handleShare = () => {
        if (!isShared) {
            setShared(prevState => prevState + 1);
        }
        else {
            setShared(prevState => prevState - 1);
        }
        setIsShared(prevState => !prevState);
    }
    return (
        <div className={styles.mainPost}>

            <div className={styles.userInfo}>

                <Link to={`/profile/${postData.id}`}>
                    <img src={profile} alt="Profile Picture" className={styles.profilePictureImg} />
                </Link>
                <Link to={`/profile/${postData.id}`}>Userul meu</Link>
                <div className={styles.contextMenu}>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
            </div>
            <section className={styles.content}>
                <p>{postData.title}</p>
                <div className={styles.imageWrapper}>
                    <img src={postImages[postData.id % 2]} alt="post content" className={styles.mainPostImage} />
                    <div className={styles.infoIcon}>
                        <InfoIcon fontSize='large' color='info' />
                    </div>
                </div>
                <p>{postData.body}</p>
            </section>

            <section className={styles.reacts}>
                <div className={styles.likesnumber}>
                    <ThumbIcon />
                    <span className={styles.reactCounts}>{likes}</span>
                </div>
                <div className={styles.commentsnumber}>

                    <span className={styles.reactCounts}>{commentCount}</span>
                    <span>comments</span>
                </div>

                <div className={styles.share}>
                    <span className={styles.reactCounts}>{shares}</span>
                    <span>shares</span>
                </div>
            </section>

            <section className={styles.reactActions}>
                <div className={`${styles.reaction} ${isLiked && styles.blue}`} onClick={handleLike}>
                    <ThumbIcon />
                    <span>Like</span>
                </div>
                <div className={styles.reaction} onClick={toggleComments}>
                    <CommentIcon />
                    <span>Comment</span>
                </div>

                <div className={`${styles.reaction} ${isShared && styles.blue}`} onClick={handleShare}>
                    <ShareIcon />
                    <span>Share</span>
                </div>
            </section>
            {isCommentsVisible && <CommentsSection onCountChange={setCommentCount} />}
        </div>
    );
}

Newsfeed.propTypes = {
    postData: PropTypes.object.isRequired
};
export default Newsfeed; 