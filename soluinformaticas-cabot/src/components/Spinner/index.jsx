import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner() {
    return (
        <div className="spinner">
            <Backdrop
                invisible={true}
                sx={{ color: "#CA8A04", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
