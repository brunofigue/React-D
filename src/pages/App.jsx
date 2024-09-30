import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Layout from './Layout'
import Home from "./Home"

function App() {
  

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
