import Header from './components/Header'
import Home from './components/Home'
import {useRoutes} from "react-router";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";



function App() {

    const element = useRoutes([
        { path: '/', element: <Home/>  },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup />}
            ])

  return (
      <>
          <div className="blog  container mx-auto ">
              <Header />

              {element}
          </div>
      </>
  )
}

export default App
