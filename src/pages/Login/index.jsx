import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../components/common/Button";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pw: 'admin',
            fillData:{
                user_name:'',
                password:''
            }

        }
    }

    checkValidity() {
        console.log("Login button Clicked")
        console.log("USer name: " + this.state.userName)
        console.log("password: " + this.state.pw)
        console.log(this.state.fillData)
        let fillData=this.state.fillData
        if (fillData.user_name==this.state.userName && fillData.password==this.state.pw){
            console.log("login success")
        }else {
            console.log("password or user name Didn't match ")
        }


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
                        <TextField id="outlined-basic"
                                   label="User Name"
                                   variant="outlined"
                                   onChange={(e) => {
                                       console.log(e.target.value)
                                       let fillData=this.state.fillData
                                       fillData.user_name=e.target.value
                                       this.setState({fillData})
                                   }}/>

                        <TextField id="outlined-basic"
                                   type="password" label="Password"
                                   variant="outlined"
                                   onChange={(e) => {
                                       console.log(e.target.value)
                                       let fillData=this.state.fillData
                                       fillData.password=e.target.value
                                       this.setState({fillData})
                                   }}/>

                    </div>
                    <div className={classes.btnContainer}>
                        <GDSEButton variant="contained" label="Login"
                                    onClick={() => {

                                        this.checkValidity()
                                    }}/>
                    </div>
                </div>


            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)