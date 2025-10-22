import profileImg from '../../../../assets/icons/profile.jpeg';
import styles from './CommentsSection.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//https://www.mockaroo.com/ for the data
export const USER_DATA = [
    {
        "id": 1,
        "firstName": "Shay",
        "lastName": "Dabnot",
        "fullName": "Shay Dabnot",
        "date": "12/29/2024",
        "profileImage": "http://dummyimage.com/189x100.png/dddddd/000000", "comment": "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla"
    },
    { "id": 2, "firstName": "Celestina", "lastName": "Geraudel", "fullName": "Celestina Geraudel", "date": "4/4/2025", "profileImage": "http://dummyimage.com/245x100.png/cc0000/ffffff", "comment": "purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus" },
    { "id": 3, "firstName": "Marie", "lastName": "Ganley", "fullName": "Marie Ganley", "date": "4/14/2025", "profileImage": "http://dummyimage.com/235x100.png/ff4444/ffffff", "comment": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor" },
    { "id": 4, "firstName": "Peadar", "lastName": "Voice", "fullName": "Peadar Voice", "date": "5/3/2025", "profileImage": "http://dummyimage.com/143x100.png/5fa2dd/ffffff", "comment": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et" },
    { "id": 5, "firstName": "Adriane", "lastName": "Olyff", "fullName": "Adriane Olyff", "date": "1/20/2025", "profileImage": "http://dummyimage.com/180x100.png/cc0000/ffffff", "comment": "congue elementum in hac habitasse platea dictumst morbi vestibulum velit" },
    { "id": 6, "firstName": "Elsbeth", "lastName": "Glenister", "fullName": "Elsbeth Glenister", "date": "3/23/2025", "profileImage": "http://dummyimage.com/237x100.png/5fa2dd/ffffff", "comment": "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut" },
    { "id": 7, "firstName": "Emili", "lastName": "Oehm", "fullName": "Emili Oehm", "date": "5/19/2025", "profileImage": "http://dummyimage.com/102x100.png/ff4444/ffffff", "comment": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices" },
    { "id": 8, "firstName": "Agatha", "lastName": "Stanmer", "fullName": "Agatha Stanmer", "date": "1/6/2025", "profileImage": "http://dummyimage.com/176x100.png/ff4444/ffffff", "comment": "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis" },
    { "id": 9, "firstName": "Burg", "lastName": "Roe", "fullName": "Burg Roe", "date": "12/23/2024", "profileImage": "http://dummyimage.com/121x100.png/5fa2dd/ffffff", "comment": "nam dui proin leo odio porttitor id consequat in consequat ut" },
    { "id": 10, "firstName": "Mattias", "lastName": "Tolle", "fullName": "Mattias Tolle", "date": "7/11/2025", "profileImage": "http://dummyimage.com/103x100.png/5fa2dd/ffffff", "comment": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum" }]

const CommentsSection = ({ onCountChange }) => {
    const [newComment, setNewComment] = useState('');
    const [listOfComments, setListOfComments] = useState(USER_DATA);

    useEffect(() => {
        if (typeof onCountChange === 'function') {
            onCountChange(listOfComments.length);
        }
    }, [listOfComments, onCountChange]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setListOfComments(prevState => {
            const myComment = {
                id: prevState.length,
                fullName: 'Uilecan Valentin',
                date: 'right now',
                comment: newComment,
            }

            setNewComment('');
            return [myComment, ...prevState];
        })
    }

    return (
        <section className={styles.commentsInputContainer}>
            <div>
                <img src={profileImg} alt="" />
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder='Write a comment...'
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button type="submit">Add Comment</button>
                </form>
            </div>
            <div className={styles.commentsList}>
                {listOfComments && listOfComments.map((comment, id) => {
                    return (
                        <div className={styles.comments} key={id}>
                            <div className={styles.userInfo}>
                                <Link to='/'>
                                    <img src={profileImg} alt="Profile pic" className={styles.profilePictureImg} />
                                    <span>{comment.fullName}</span>
                                </Link>
                            </div>
                            <div className={styles.commentInfo}>
                                <p>{comment.comment}</p>
                                <p className={styles.timeOfPost}>{comment.date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CommentsSection;