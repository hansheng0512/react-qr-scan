import React from 'react';
import QrReader from 'react-qr-scanner'

function App() {

  const [result, setResult] = React.useState('No result');
  const [delay, setDelay] = React.useState(100);

  const handleScan = (data: any) => {
    setResult(data?.text || "Nothing")
  }

  const handleError = (err: any) => {
    console.error(err)
  }

  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <QrReader
            delay={delay}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
        />
        <p>{result}</p>
      </div>
    </>
  );
}

export default App;
