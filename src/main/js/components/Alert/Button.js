import React from 'react';
import './Alert.css';

const Button = ({ onAlert }) => <button onClick={onAlert} className="delete" />;

export default Button;
