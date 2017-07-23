var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='Nav'>
      <li>
        <NavLink exact activeClassName='active' className='nav-link' to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/battle'>
          Battle
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
