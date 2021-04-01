
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from '../Graphql/Queries'

function Home() {
  return (
    <div className="home">
      <h1>Search Weather</h1>
      <input id="text-input" type="text" placeholder="City name..."/>
      <button id="search">Search</button>
    </div>
  );
}

export default Home;
