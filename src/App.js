import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Footer from './shared/components/Footer';
import React from 'react';
import Start from './pages/Start'; // Start 컴포넌트 경로
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout'; // 로그아웃 컴포넌트 경로
import ForgotPassword from './pages/auth/ForgotPassword';
import HowToUse from './pages/HowToUse'; // 앱 사용 방법 컴포넌트 경로
import QuestHeader from './shared/components/QuestHeader';
import QuestE4 from './pages/quests/QuestE4';
import SignUp from './pages/auth/SignUp';
import AccountCreationComplete from './pages/auth/AccountCreationComplete';
import Attendance from './pages/Attendance';
import QuestE5 from './pages/quests/QuestE5';
import QuestE6 from './pages/quests/QuestE6';
import QuestM1 from './pages/quests/QuestM1';
import QuestM2 from './pages/quests/QuestM2';
import QuestM3 from './pages/quests/QuestM3';
import QuestE4H from './pages/questsHard/QuestE4H';
import QuestE4M from './pages/questsMiddle/QuestE4M';
import QuestE4L from './pages/questsLow/QuestE4L';
import QuestE5H from './pages/questsHard/QuestE5H';
import QuestE5M from './pages/questsMiddle/QuestE5M';
import QuestE5L from './pages/questsLow/QuestE5L';
import QuestE6H from './pages/questsHard/QuestE6H';
import QuestE6M from './pages/questsMiddle/QuestE6M';
import QuestE6L from './pages/questsLow/QuestE6L';
import QuestM1H from './pages/questsHard/QuestM1H';
import QuestM1M from './pages/questsMiddle/QuestM1M';
import QuestM1L from './pages/questsLow/QuestM1L';
import QuestM2H from './pages/questsHard/QuestM2H';
import QuestM2M from './pages/questsMiddle/QuestM2M';
import QuestM2L from './pages/questsLow/QuestM2L';
import QuestM3H from './pages/questsHard/QuestM3H';
import QuestM3M from './pages/questsMiddle/QuestM3M';
import QuestM3L from './pages/questsLow/QuestM3L';
import QuestPage from './pages/QuestPage';
import LearnAgain from './pages/LearnAgain';
import LearnAgainQuest from './pages/LearnAgainQuest';
import Profile from './pages/auth/Profile';
import SignOut from './pages/auth/SignOut';
import Introduce from './pages/Introduce';
import Terms from './pages/auth/Terms';
import LearningReport from './pages/LearningReport';
import Option from './pages/Option';
import Help from './pages/Help';
import Review from './pages/Review';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/start" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/accountcreationcomplete" element={<AccountCreationComplete />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/howtouse" element={<HowToUse />} />
        <Route path="/questHeader" element={<QuestHeader />} />
        <Route path="/questE4" element={<QuestE4 />} />
        <Route path="/questE5" element={<QuestE5/>}/>
        <Route path="/questE6" element={<QuestE6/>}/>
        <Route path="/questM1" element={<QuestM1/>}/>
        <Route path="/questM2" element={<QuestM2/>}/>
        <Route path="/questM3" element={<QuestM3/>}/>
        <Route path="/questE4H" element={<QuestE4H/>}/>
        <Route path="/questE4M" element={<QuestE4M/>}/>
        <Route path="/questE4L" element={<QuestE4L/>}/>
        <Route path="/questE5H" element={<QuestE5H/>}/>
        <Route path="/questE5M" element={<QuestE5M/>}/>
        <Route path="/questE5L" element={<QuestE5L/>}/>
        <Route path="/questE6H" element={<QuestE6H/>}/>
        <Route path="/questE6M" element={<QuestE6M/>}/>
        <Route path="/questE6L" element={<QuestE6L/>}/>
        <Route path="/questM1H" element={<QuestM1H/>}/>
        <Route path="/questM1M" element={<QuestM1M/>}/>
        <Route path="/questM1L" element={<QuestM1L/>}/>
        <Route path="/questM2H" element={<QuestM2H/>}/>
        <Route path="/questM2M" element={<QuestM2M/>}/>
        <Route path="/questM2L" element={<QuestM2L/>}/>
        <Route path="/questM3H" element={<QuestM3H/>}/>
        <Route path="/questM3M" element={<QuestM3M/>}/>
        <Route path="/questM3L" element={<QuestM3L/>}/>
        <Route path="/questPage" element={<QuestPage/>}/>
        <Route path="/learnAgain" element={<LearnAgain/>}/>
        <Route path="/learnAgainQuest" element={<LearnAgainQuest/>}/>
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/learningreport" element={<LearningReport />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/option" element={<Option />} />
        <Route path="/help" element={<Help />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;