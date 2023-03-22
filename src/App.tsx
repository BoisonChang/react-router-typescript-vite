import { Routes, Route } from 'react-router-dom';
import ProtectedPage from './pages/ProtectedPage';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './contexts/AuthContext';
import { Path } from './const';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={Path.LOGIN} element={<LoginPage />} />
        <Route path={Path.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Path.ABOUT} element={<About />} />
          <Route
            path={Path.DASHBOARD}
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path={Path.PROTECTED}
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path={Path.OTHERS} element={<NoMatch />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
