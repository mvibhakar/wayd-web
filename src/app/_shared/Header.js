import React, { Component } from 'react';


class Header extends Component {
    render() {
      return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#353535',
            height: '56px',
            textTransform: 'uppercase',
            letterSpacing: '8px',
        }}>
          <div>
            {this.props.title}
          </div>
        </div>
      );
    }
}

export default Header;