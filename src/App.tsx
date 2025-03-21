import React from 'react';
import './styles.css';
import './index.css';

import {ThemeProvider} from "@mui/material";
import theme from "./hooks/theme";
import TextButton from "./UI/components/buttons/TextButton";
import FilledButton from "./UI/components/buttons/FilledButton";
import LanguageDropdownMenu from "./UI/components/dropdowns/LanguageDropdownMenu";
import AuthTextInput from "./UI/components/textInputs/textInputFabric";
import StoryTextInput from "./UI/components/textInputs/StoryTextInput";
import Footer from "./UI/components/Footer";
import Header from "./UI/components/Header";
import AuthForm from "./UI/components/forms/AuthForm";
import VideoPreview from "./UI/components/VideoPreview";
import PreviewCarousel from "./UI/components/PreviewCarousel";
import ProgressBar from "./UI/components/ProgressBar";
import AudioPlayer from "./UI/components/AudioPlayer";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="app">
              <Header/>
              <AudioPlayer audioUrl={'./assets/music.mp3'} />
              <Footer/>
          </div>

      </ThemeProvider>

  );
}

export default App;
