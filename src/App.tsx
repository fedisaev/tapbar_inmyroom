import './App.scss';
import {useState} from "react";
import shareIcon from './assets/share-icon.svg';
import scrollUpIcon from './assets/scroll-up-icon.svg';
import commentsIcon from './assets/comments-icon.svg';
import heartIcon from './assets/heart-icon.svg';

function App() {

    const [tapBar, setTapBar] = useState(true);
    const [comments, setComments] = useState(0);
    const [liked, setLiked] = useState(0);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 200) {
            setTapBar(false);
        } else {
            setTapBar(true);
        }
    });

    const sharePage = () => {
        if (navigator.share) {
            navigator.share({url: window.location.href});
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert('Ссылка скопирована в буфер обмена'))
                .catch((error) => console.error('Ошибка при копировании в буфер обмена:', error));
        }
    };

    function addComments() {
        setComments(prevState => prevState + 1);
    }

    function addLiked() {
        setLiked(prevState => prevState + 1);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <main>
            <div className='app'>
                <p className='text'>Одноэтажный дом с двумя спальнями в стиле эклектика</p>
            </div>
            <div className='scrollDiv'></div>
            <ul className={tapBar ? 'list' : 'list hidden'}>
                <li onClick={sharePage}><img src={shareIcon} alt="share-icon"/></li>
                <li onClick={scrollToTop}><img src={scrollUpIcon} alt="scroll-up-icon"/></li>
                <li onClick={addComments}><img src={commentsIcon} alt="comments-icon"/><span>{comments}</span></li>
                <li onClick={addLiked}><img src={heartIcon} alt="heart-icon"/><span>{liked}</span></li>
            </ul>
        </main>
    )
}

export default App;
