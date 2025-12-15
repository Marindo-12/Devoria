import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { DeveloperPage } from './pages/Developers/DeveloperPage';
import './index.css'
import './utils/data/i18n'
import { DeveloperInsideProfile } from './pages/Developers/InsideProfile/DeveloperInsideProfile';
import { Projects } from './pages/Projects/Projects';
import { RequestService } from './pages/Developers/InsideProfile/RequestService/RequestService';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Comments from './pages/Developers/Comments';
import { ProjectInsideProfil } from './pages/Projects/ProjectInsideProfil';
import { SendMessage } from './pages/Developers/InsideProfile/SendMessage/SendMessage';
import { Communities } from './pages/Communities/Communities';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { RouteLoader } from './pages/LoadScreen/RouteLoader';

export function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
    <RouteLoader>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='developers' element={<DeveloperPage />} />
        <Route path='developer/:id' element={<DeveloperInsideProfile />} />
        <Route path='projects' element={<Projects />} />
        <Route path='developer/:id/describe-project' element={<RequestService />} />
        <Route path='comments' element={<Comments />} />
        <Route path='project/:id' element={<ProjectInsideProfil />} />
        <Route path='developer/:id/send-message' element={<SendMessage />} />
        <Route path='communities' element={<Communities />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </RouteLoader>    
    </>
  );
}

export default App