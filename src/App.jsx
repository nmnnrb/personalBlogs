import { useContext , useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-quill/dist/quill.snow.css';
import ContentCreate from './components/contentCreat'; 
import { ColorContext } from './context/ColorContext';
import { Moon ,Sun } from 'lucide-react';
import PostPage from './components/PostPage';
import AllPosts from './components/AllPosts';


function App() {
  const { theme, toggleTheme} = useContext(ColorContext);
  useEffect(() => {
    if (theme.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme.mode]);
  
  return (
    <BrowserRouter>
     <div className={`${theme.bg} ${theme.text}  min-h-screen flex flex-col items-center justify-center`}>
      <button
        className={`${theme.bg } absolute right-3 top-8 hover:cursor-pointer hover:scale-125  ${theme.text} mb-4 px-4 py-2   rounded`}
        onClick={toggleTheme}
      >
        {theme.mode === 'light' ?   <Moon  className={`${theme.bg } ${theme.text}`} /> : <Sun className={`${theme.bg } ${theme.text}`}  />}
      </button>



    <Routes>
       <Route path="/create" element={<ContentCreate />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/" element={<AllPosts />} />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
