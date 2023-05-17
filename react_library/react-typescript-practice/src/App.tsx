import React, { useState } from 'react';
import './App.css';

interface WarningBannerProps {
  warn: boolean;
}

function WarningBanner(props: WarningBannerProps) {
  if (!props.warn)
    return null;
  return (
    <div>
      Warning!
    </div>
  )
}

function App() {
  const [showWarning, setShowWarning] = useState(false);
  let handleToggleClick = () => {
    setShowWarning(!showWarning);
  }
  return (
    <div className="App">
      <WarningBanner warn={showWarning}/>
      <button onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default App;
