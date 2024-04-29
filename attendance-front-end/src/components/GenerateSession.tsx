import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './GenerateSession.css';

const GenerateSession: React.FC = () => {
  const [sessionName, setSessionName] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');

  const generateRandomId = () => {
    // Generate random ID logic here for now
    const randomId = Math.random().toString(36).substring(7);
    setQRCodeData(randomId);
  };

  const handleSessionNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSessionName(e.target.value);
  };

  return (
    <div id='session-container'>
      <label id='session-label' htmlFor="sessionName">Generate Session</label>
      <input
        type="text"
        id="sessionName"
        value={sessionName}
        onChange={handleSessionNameChange}
      />
      <button id='generate-qr' onClick={generateRandomId}>Generate QR Code</button>
      <QRCode value={qrCodeData} />
    </div>
  );
};

export default GenerateSession;