import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './providers/AuthProvider';
import SignIn from './pages/SignIn';
import ProtectedRoute from './routes/ProtectedRoute';
import Layout from './Layout/Layout';
import PublicRoute from './routes/PublicRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        
        <Route element={<PublicRoute />}>
        <Route
              path="/login"
              element={
                <Layout>
                  <SignIn />
                </Layout>
              }
            />
        </Route>


          <Route element={<ProtectedRoute />}>
            <Route
              path="/table"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
          </Route>

          <Route
              path="*"
              element={
                <Layout>
                  <h1 style={{fontSize: "40px"}}>404</h1>
                  <h2>This is not the page you are looking for.</h2>
                </Layout>
              }
            />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
