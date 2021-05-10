import React from 'react';
import Alert from './Alert';

const ShowNotification = ({ notifications, currentScene }) => {
  const { scene, visible, text, typeAlert } = notifications;
  if (scene === currentScene) {
    return <Alert textAlert={text} typeAlert={typeAlert} visibleAlert={visible} scene={scene} />;
  }
  return null;
};

export default ShowNotification;
