import './App.scss';
import TapBar from "./components/TapBar/TapBar";

function App() {
    return (
        <main>
            <div className='app'>
                <p className='text'>Одноэтажный дом с двумя спальнями в стиле эклектика</p>
            </div>
            <div className='scrollDiv'></div>
            <TapBar/>
        </main>
    )
}

export default App;
