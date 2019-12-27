import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './Alert.css';

const Alert = ({ text, type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type });
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return <div className="alert">{text}</div>;
};

export default Alert;
