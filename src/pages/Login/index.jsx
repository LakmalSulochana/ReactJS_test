import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.loginCover}>
                    <div className={classes.titleContainer}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.fillContainer}>

                    </div>
                    <div className={classes.btnContainer}></div>
                </div>



            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)