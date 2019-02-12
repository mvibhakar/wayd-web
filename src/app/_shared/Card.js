import React, { Component } from 'react';


class Card extends Component {
    render() {
      return (
        <div style={{
            backgroundColor: 'white',
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            marginTop: '10px',
            padding: '20px',
            alignItems: 'center',
            justifyContent: 'start',
            fontSize: '18px',
            color: 'black',
            borderRadius: '10px',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '7px',
                fontWeight: '600',
                marginBottom: '10px',
            }}>
                {this.props.title}
            </div> 
            <div style={{
                letterSpacing: '1px',
                fontSize: '15px',
            }}>
                {this.props.children}
            </div>
        </div>
      );
    }
}

export default Card;