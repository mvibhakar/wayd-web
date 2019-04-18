import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress style={{ margin: "0 auto" }} />
    </div>
);
export default Loading;
