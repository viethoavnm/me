import React from 'react';

export default class Logo extends React.PureComponent {
  render = () => (
    <a href="#home" className="logo">
      <small className="logo__icon">VH</small>
      <h1 className="logo__text">@viethoavnm</h1>
    </a>
  )
}