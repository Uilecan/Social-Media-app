import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import ProfilePage from './pages/profile/profilePage';

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App


