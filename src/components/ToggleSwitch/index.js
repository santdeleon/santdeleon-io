import React from 'react';
import cx from 'classnames';

import { useTheme } from '../../hooks/useTheme.js';

import Moon from '../../assets/img/moon.svg';

import './index.css';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <span
      className={cx('ToggleSwitch', {
        'ToggleSwitch--light': theme === 'light',
        'ToggleSwitch--dark': theme === 'dark',
      })}
      role="checkbox"
      title={`Activate ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      aria-label={`Activate ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      aria-checked="false"
      tabIndex="0"
    >
      <div className="ToggleSwitch__Div--track"></div>
      <div
        className={cx('ToggleSwitch__Div--thumb', {
          'bg-dark': theme === 'light',
          'ToggleSwitch__Div--thumb-dark': theme === 'dark',
        })}
        style={
          theme === 'light'
            ? { transform: 'translateX(-2px)' }
            : { transform: 'translateX(18px)' }
        }
        onClick={toggleTheme}
      >
        <img src={Moon} alt="Moon" className="w-100" />
      </div>
    </span>
  );
};

export default ToggleSwitch;
