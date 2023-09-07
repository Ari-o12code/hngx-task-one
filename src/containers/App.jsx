import { useState, useEffect } from 'react';
import './App.css';
import displayImage from '../olayinka.jpg'

function App() {
  const [utcTime, setUTCTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentUTCDate = new Date().toUTCString();
      setUTCTime(currentUTCDate);
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  

  return (
    <div className='container'>
      <header>
        <img src={displayImage} alt="olaQuadri" data-testid="slackDisplayImage"/>
      </header>

      <main>
      <h1 data-testid="slackUserName">Slack Name: olaQuadri</h1>
        <div className='text' data-testid="currentDayOfTheWeek">
          Current Day Of The Week: <strong>{currentDayOfWeek}</strong> 
        </div>

        <div className='text' data-testid="currentUTCTime">
          Current UTC Time: <strong>{utcTime}</strong> 
        </div>

        <div className='text' data-testid="myTrack">
          Track: <strong>FrontEnd</strong>
        </div>

        <div className='text' data-testid="githubURL">
          <a href="https://github.com/Ari-o12code/hngx-task-one">GitHub URL</a>
        </div>
        
      </main>

    </div>
  );
}

export default App;
