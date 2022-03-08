// 3rd party packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import User from './pages/User';
import NotFound from './pages/NotFound';
// Components
import Alert from './components/layouts/Alert';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// Context Provider
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar />
                        <main className="container mx-auto px-3 pb-12">
                            <Alert />
                            <Routes>
                                <Route path="/" element={<Home />}></Route>
                                <Route
                                    path="/user/:login"
                                    element={<User />}
                                ></Route>
                                <Route path="/about" element={<User />}></Route>
                                <Route
                                    path="/notfound"
                                    element={<NotFound />}
                                ></Route>
                                {/* The last route is a catch-all, which shows NotFound */}
                                <Route path="/*" element={<NotFound />}></Route>
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
