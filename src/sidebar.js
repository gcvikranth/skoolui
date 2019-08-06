import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/students">
        Register Student
      </a>

      <a className="menu-item" href="/courses">
        Start a new Course
      </a>

    </Menu>
  );
};