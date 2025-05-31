import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Dashboard from './components/layout/Dashboard';
import Home from './components/pages/Home';
import Academics from './components/pages/Academics';
import Attendance from './components/pages/Attendance';
import Fee from './components/pages/Fee';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Home />
                </Dashboard>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/academics" 
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Academics />
                </Dashboard>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/attendance" 
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Attendance />
                </Dashboard>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/fee" 
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Fee />
                </Dashboard>
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;