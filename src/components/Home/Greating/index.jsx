import {Component} from "react";
import Typography from '@mui/material/Typography';
import ijselogo from "../../../assets/img/ijselogo.png"
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

class Greating extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        const {classes}=this.props;
        return(
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        Hello {this.props.name}
                    </Typography>
                </div>
                <div>
                    <img src={ijselogo} alt="http://ijse.lk"/>
                </div>
            </div>
        )
    }

}
export default withStyles(styleSheet) (Greating)
