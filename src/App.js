import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import DiaryCovid from './pages/DiaryCovid'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AdminBlankPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HistoryCountry from './pages/HistoryCountry';
import GlobalResume from './pages/GlobalResume';


function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<GlobalResume/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/totalCountrys' element={<DiaryCovid/>} />
                <Route exact path='/historyCountry/:id' element={<HistoryCountry/>} />
                <Route exact path='/blank-page' element={<AdminBlankPage/>} />
            </Routes>  
        </Router>
    )
}

export default App;
