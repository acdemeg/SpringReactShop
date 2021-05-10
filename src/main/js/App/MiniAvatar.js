import React from 'react';

function MiniAvatar({ image }) {
  const imagePath = image || 'default_avatar.png';
  return (
    <li>
      <div>
        <img src={`/upload/users/${imagePath}`} alt="avatar" width="45px" height="45px" />
      </div>
    </li>
  );
}

export default MiniAvatar;
