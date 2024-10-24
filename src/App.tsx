import './App.css'
// import { getAllUser } from './graphql/user'
import { useAllUserQuery } from './generated'

function App(): JSX.Element {
  // const { loading, data } = useQuery(getAllUser)
  const { loading, data } = useAllUserQuery()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.users &&
          data.users.map((item) => <p key={item.id}>{item.name}</p>)
        )}
      </div>
    </>
  )
}

export default App
