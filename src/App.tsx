import './App.scss';
import {useEffect, useState} from "react";
import shareIcon from './assets/share-icon.svg';
import scrollUpIcon from './assets/scroll-up-icon.svg';
import commentsIcon from './assets/comments-icon.svg';
import heartIcon from './assets/heart-icon.svg';

function App() {

    const [comments, setComments] = useState<number>(0);
    const [liked, setLiked] = useState<number>(0);

    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [scrollTimeout, setScrollTimeout] = useState<number>(1000);

    useEffect(() => {
        const handleScroll = () => {
            const currentPos = window.scrollY;
            if (currentPos >= 200 && currentPos > prevScrollPos) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setPrevScrollPos(currentPos);
            setScrollTimeout(
                setTimeout(() => {
                    setIsVisible(true);
                }, 1000)
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [prevScrollPos, scrollTimeout]);

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
            <ul className={isVisible ? 'list' : 'list hidden'}>
                <li onClick={sharePage}><img src={shareIcon} alt="share-icon"/></li>
                <li onClick={scrollToTop}><img src={scrollUpIcon} alt="scroll-up-icon"/></li>
                <li onClick={addComments}><img src={commentsIcon} alt="comments-icon"/><span>{comments}</span></li>
                <li onClick={addLiked}><img src={heartIcon} alt="heart-icon"/><span>{liked}</span></li>
            </ul>
        </main>
    )
}

export default App;
