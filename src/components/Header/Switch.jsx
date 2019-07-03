import React, { useState } from 'react';
import './Switch.css';

export default function Switch() {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle({ toggle: !toggle });
  };

  return (
    <div className={'background'}>
      <div className={toggle ? 'toggle-body--on' : 'toggle-body'}>
        <div
          className={toggle ? 'toggle-btn--on toggle-btn--scale' : 'toggle-btn'}
          onClick={handleChange}
        />
      </div>
    </div>
  );
}
