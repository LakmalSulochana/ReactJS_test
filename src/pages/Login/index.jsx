import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../components/common/Button";

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
                        <TextField id="outlined-basic" label="User Name" variant="outlined" />
                        <TextField id="outlined-basic" type="password" label="Password"  variant="outlined" />

                    </div>
                    <div className={classes.btnContainer}>
                        <GDSEButton variant="contained" label="Login"/>
                    </div>
                </div>



            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)