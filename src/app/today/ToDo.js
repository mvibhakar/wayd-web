import React, { Component } from "react";
import Card from "../_shared/Card";
import Checkbox from "@material-ui/core/Checkbox";

class ToDo extends Component {
    state = {
        items: [
          {
              isChecked: true,
              event: "Nullam nisl"
          },
          {
              isChecked: false,
              event: "Quisque porta ex"
          },
          {
              isChecked: false,
              event: "Vestibulum ornare, nisl nec malesuada hendrerit, erat elit fringilla eros, in auctor lacus"
          },
          {
              isChecked: false,
              event: "Praesent sed nisl justo. Morbi consectetur felis non suscipit tincidunt. "
          }
      ]
    };

    handleChange = (event, idx) => {
        const isChecked = event.target.checked;
        const items = this.state.items;

        items[idx].isChecked = isChecked;
        this.setState({ items });
    };

    render() {
        return (
            <div>
                <Card title="to-do">
                {this.state.items.map((item, idx) => (
                    <div
                    style={{
                        display: "flex",
                        borderBottom: "0.5px solid #D8D8D8",
                        marginBottom: '15px'
                    }}>
                    <Checkbox
                        checked={item.isChecked}
                        onChange={event =>
                            this.handleChange(event, idx)
                        }
                        value="box1"
                        style={{
                            color: "#A3A3A3",
                            fill: 'white',
                            textAlign: "left",
                            marginLeft: '-15px',
                            height: '0px',
                        }}
                    />
                    <p>{item.event}</p>
                    </div>
                ))}
                </Card>
            </div>
        );
    }
}

export default ToDo;
