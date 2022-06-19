import React, { useContext } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Headshot from './assets/headshot.jpg';
import { DarkModeContext } from './context/DarkModeContext';
import { LanguageContext } from './context/LanguageContext';

import './App.css';


const App = () => {
  const { isDark, updateMode } = useContext(DarkModeContext);
  const { isChinese, updateLanguage } = useContext(LanguageContext);

  return (
    <div className={isDark ? "App-dark": "App"}>
      <header className="header">
        <div className="switch-container">
            <FormControlLabel 
              control= {
                <Switch onClick={updateMode} color= "secondary" checked={isDark ? true : false} />
              }
              label= "Light | Dark"
            />
            <FormControlLabel
              control={
                <Switch onClick={updateLanguage} color="secondary" checked={isChinese ? true : false} />
              }
              label= "ENG | 简体"
            />
        </div>
      </header>
      <div className="main-content">
        <img 
          alt="a headshot of the creator of this website, Xiangmin Mo, wearing glasses and a blue collared shirt under a grey sweatshirt looking leftwards at trees in a park"
          src={Headshot}
          className={isDark ? "headshot-dark": "headshot"}
        />
        <div className="social-container">
          <GitHub onClick={() => window.location.href="https://github.com/mxmsunny"} alt="GitHub Icon" sx={{fontSize: 40, cursor: 'pointer'}} />
          <LinkedIn onClick={() => window.location.href="https://www.linkedin.com/in/xiangminmo/"}  alt="LinkedIn Icon" sx={{fontSize: 40, cursor: 'pointer'}} />
        </div>
        {isChinese ? <>
            <div>
              <h1>哈喽!~ &#128075;</h1>
              <h1>我是莫湘闽(Sunny)</h1>
            </div>
            <p>&#128029; <a className="link-decoration" href="https://bombas.com/">Bombas</a> | 成为更好的自己 &#127795;</p>
          </> : 
          <>
            <div>
              <h1>Hi! &#128075;</h1>
              <h1>I am Xiangmin (Sunny) Mo</h1>
            </div>
            <p>&#128029; Bee-ing Better @ <a className="link-decoration" href="https://bombas.com/">Bombas</a> &#128081;</p>
          </>
        }
      </div>
    </div>
  );
}

export default App;
