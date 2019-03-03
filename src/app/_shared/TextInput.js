import React, { Component } from "react";

class TextInput extends Component {
    render() {
        return (
            <div
                style={{
                    borderBottom: "0.5px solid #D8D8D8"
                }}
            >
                <i class="material-icons">{this.props.title}</i>
                <form>
                    <input type="text" name="user_email" />
                </form>
            </div>
        );
    }
}

export default TextInput;
