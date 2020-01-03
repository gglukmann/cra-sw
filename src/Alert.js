import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './Alert.css';

const Alert = ({ text, buttonText, type, onClick }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!onClick) {
      const timer = setTimeout(() => {
        dispatch({ type });
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="alert">
      {text} {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
};

export default Alert;
