import React, { Component } from "react";
import Card from "./Card";

class Schedule extends Component {
    state = {
        items: [
            {
                time: "8:ooam - 10:00am",
                event: "Nullam nisl"
            },
            {
                time: "12:00pm - 3:00pm",
                event: "Quisque porta ex"
            },
            {
                time: "6:00pm - 7:00pm",
                event: "Vestibulum ornare, nisl nec malesuada hendrerit, erat elit fringilla eros, in auctor lacus"
            },
            {
                time: "8:00pm - 10:00pm",
                event: "Praesent sed nisl justo. Morbi consectetur felis non suscipit tincidunt. "
            }
        ]
    };

    render() {
        const timeStyle = {
            // width: "143px",
            flex: '1',
            marginRight: "5px",
            textAlign: "left",
            color: "#7EB4CE",
            fontWeight: "600",
            fontStyle: "italic"
        };

        const eventStyle = {
            // width: "182px",
            flex: '1',
        };

        return (
            <div>
                <Card title="schedule">
                    {this.state.items.map((item, idx) => (
                        <div key={idx}
                            style={{
                                display: "flex"
                            }}
                        >
                            <p style={timeStyle}>{item.time}</p>
                            <p style={eventStyle}>{item.event}</p>
                        </div>
                    ))}
                </Card>
            </div>
        );
    }
}

export default Schedule;
