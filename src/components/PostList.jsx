import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.scss';
import Modal from './Modal';

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHanlder() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

  return (
    <>
        {modalIsVisible && (
            <Modal onClose={hideModalHanlder}>
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} 
                />
            </Modal>
        )}
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Manuel" body="Check out the full course!" />
        </ul>
    </>
  );
}

export default PostsList;