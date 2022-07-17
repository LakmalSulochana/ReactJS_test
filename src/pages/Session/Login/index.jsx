import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../components/common/Button";
import IJSESnackBar from "../../../components/common/SnackBar";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pw: 'admin',
            fillData:{
                user_name:'',
                password:''
            },
           //for snack bar
           open:false,
            message:'',
            severity:''


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
            this.setState({
                open:true,
                message:'login success',
                severity:'success'

            })
        }else {
            console.log("password or user name Didn't match ")
            this.setState({
                open:true,
                message:'password or user name Did not match',
                severity:'error'

            })
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
                <IJSESnackBar
                    open={this.state.open}
                    onClose={()=>{
                        this.setState({open:false})
                    }}
                    message={this.state.message}
                    autoHideDuration={1000}
                    severity={this.state.severity}
                    variant="filied"
                />


            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)