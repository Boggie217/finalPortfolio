// ModeToggleButtons.js
import React from 'react';

const ModeToggleButtons = ({ mode, onModeChange }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <button
        className={`btn btn-${mode === 'standard' ? 'primary' : 'outline-primary'} me-2`}
        onClick={() => onModeChange('standard')}
      >
        Light mode
      </button>
      <button
        className={`btn btn-${mode === 'dark' ? 'dark' : 'outline-dark'} me-2`}
        onClick={() => onModeChange('dark')}
      >
        Dark Mode
      </button>
      <button
        className={`btn btn-${mode === 'light' ? 'secondary' : 'outline-secondary'}`}
        onClick={() => onModeChange('light')}
      >
        Standard mode
      </button>
    </div>
  );
};

export default ModeToggleButtons;