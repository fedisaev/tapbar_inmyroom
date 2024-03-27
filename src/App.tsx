import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import shareImage from './assets/share-icon.png';

function App() {

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <img src={shareImage} alt="share-icon"/>
            <h1>TAPBAR</h1>
        </>
    )
}

export default App
