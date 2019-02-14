import React, { Component } from 'react';


class Header extends Component {
    render() {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '56px',
          justifyContent: 'center',
        }}>
          <i className="material-icons" style={{
            justifyContent: 'start'
          }}>
            close
          </i>
        <div style={{
            fontSize: '19px',
            color: '#353535',
            textTransform: 'uppercase',
            letterSpacing: '8px',
        }}>
          <div>
            {this.props.title}
          </div>
        </div>
        </div>
      );
    }
}

export default Header;