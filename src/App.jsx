import Card from './components/Card'
import './App.css'

function App() {
  
  return (
    <>
      <div>
      <Card image="../src/img/gray-bg.png">
        <h3>Title 1</h3>
        <p>Content 1</p>
        <button>Go Somewhere</button>
      </Card>

      <Card>
        <h3>Title 2</h3>
        <p>Content 2</p>
        <button>Go Somewhere</button>
      </Card>
    </div>
    </>
  )
}

export default App
