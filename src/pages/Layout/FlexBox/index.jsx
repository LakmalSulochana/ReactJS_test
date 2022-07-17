import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import Typography from "@mui/material/Typography";




class FlexBoxLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props
        return (
          <div className={classes.container}>
              <div className={classes.title_container}>
                  <Typography variant="h4">
                      Title Is Here
                  </Typography>

              </div>
              <div className={classes.form_container}>
                  <div className={classes.left_Form}></div>
                  <div className={classes.right_form}></div>
              </div>
              <div className={classes.btn_container}></div>
          </div>

        )
    }
}

export default withStyles(styleSheet)(FlexBoxLayout)