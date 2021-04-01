
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from '../Graphql/Queries'

function Home() {

  const [getWeather, {loading, data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: "New York"},
  })

  if (error) return <h1>Error Found</h1>
  if (data) {
    console.log(data)
  }
  return (
    <div className="home">
      <h1>Search Weather</h1>
      <input id="text-input" type="text" placeholder="City name..."/>
      <button onClick={ () => getWeather()} id="search">Search</button>
    </div>
  );
}

export default Home;
