import {useState} from "react";
import styles from './TapBar.module.scss'
import shareIcon from "../../assets/share-icon.svg";
import scrollUpIcon from "../../assets/scroll-up-icon.svg";
import commentsIcon from "../../assets/comments-icon.svg";
import heartIcon from "../../assets/heart-icon.svg";
import {useVisible} from "../../helpers/useVisible";
import {scrollToTop, sharePage} from "../../helpers/helpers";

function TapBar() {

    const [comments, setComments] = useState(0);
    const [liked, setLiked] = useState(0);
    const isVisible = useVisible();

    const addComments = () => setComments(prevState => prevState + 1);
    const addLiked = () => setLiked(prevState => prevState + 1)

    return (
        <ul className={isVisible ? styles.list : `${styles.list} ${styles.hidden}`}>
            <li onClick={sharePage}><img src={shareIcon} alt="share-icon"/></li>
            <li onClick={scrollToTop}><img src={scrollUpIcon} alt="scroll-up-icon"/></li>
            <li onClick={addComments}><img src={commentsIcon} alt="comments-icon"/><span>{comments}</span></li>
            <li onClick={addLiked}><img src={heartIcon} alt="heart-icon"/><span>{liked}</span></li>
        </ul>
    );
}

export default TapBar;