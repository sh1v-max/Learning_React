import { useRouteError } from 'react-router'

const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <div className="error-container">
      <main className="error-content">
        <h1>Oops!</h1>
        <h2>Something went wrong</h2>
        <p>
          {err.status}: {err.statusText}
        </p>
      </main>
    </div>
  )
}

export default Error
