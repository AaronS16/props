import Joke from './components/Joke';
import jokesInfo from './jokesInfo'
import './index.css';

const App = () => {
  const jokeElement = jokesInfo.map(joke => 
  <Joke
    setup={joke.setup}
    punchline={joke.punchline}
  />
  )
  return (
    <div>
      {jokeElement}
    </div>
  );
}

export default App;
