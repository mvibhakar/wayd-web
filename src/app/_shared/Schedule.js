import React from "react";
import Card from "./Card";
import Loading from "../_shared/Loading";
import { Link } from "react-router-dom";

const Schedule = ({ loading, events }) => {
    const timeStyle = {
        flex: "1",
        marginRight: "5px",
        textAlign: "left",
        color: "#7EB4CE",
        fontWeight: "600",
        fontStyle: "italic"
    };

    const eventStyle = {
        flex: "1"
    };

    return (
        <Card title="schedule">
            {loading ? (
                <Loading />
            ) : (
                events.map((item, idx) => (
                    <Link to="/signup">
                        <div
                            key={idx}
                            style={{
                                display: "flex"
                            }}
                        >
                            <p style={timeStyle}>
                                {item.start_time} - {item.end_time}
                            </p>
                            <p style={eventStyle}>{item.title}</p>
                        </div>
                    </Link>
                ))
            )}
        </Card>
    );
};

export default Schedule;
