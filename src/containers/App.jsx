import './App.css';
import displayImage from '../olayinka.jpg'

function App() {
  return (
    <div>
      <header>
        <img src={displayImage} alt="olaQuadri" data-testid="slackDisplayImage"/>
        <h1 data-testid="slackUserName">Slack Name: olaQuadri</h1>
      </header>

      <main>
        <div data-testid="currentDayOfTheWeek">
          Current Day Of The Week:
        </div>

        <div data-testid="currentUTCTime">
          Current UTC Time:
        </div>

        <div data-testid="myTrack">
          Track: FrontEnd
        </div>

        <div data-testid="githubURL">
          GitHub URL: https://github.com/Ari-o12code
        </div>
        
      </main>

    </div>
  );
}

export default App;
