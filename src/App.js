import { Component } from 'react'
import LoginPage from './components/LoginPage'
import Feed from './components/Feed'
import Profiledetails from './components/Profiledetails'
import { Route, Routes } from 'react-router-dom'
// import Context from './context/Context'
import EditProfile from './components/EditProfile'

class App extends Component {

  changeName = name => {
    this.setState({ name })
  }
  changeBio = bio => {
    this.setState({ bio })
  }
  render() {
    return (
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Feed />} />
        <Route path="/profile" element={<Profiledetails />} />
        <Route path='/editprofile' element={<EditProfile />} />
      </Routes>
    )
  }
}

export default App

