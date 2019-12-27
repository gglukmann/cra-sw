import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './Alert.css';

const Alert = ({ text, type, onClick }) => {
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
      {text} {!!onClick && <button onClick={onClick}>Update</button>}
    </div>
  );
};

export default Alert;
