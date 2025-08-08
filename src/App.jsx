import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App


