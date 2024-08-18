import './App.css'
import useCanvas from './lib/useCanvas'


function App() {
  const canvas = useCanvas();
  return (
    <>
      <h1>canvas test app</h1>
      <pre>{JSON.stringify(canvas, (_k, v) => v === undefined ? "undefined" : v)}</pre>
    </>
  )
}

export default App
