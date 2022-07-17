import {Component} from "react";
import GDSEButton from "../../../components/common/Button";
import {withStyles} from "@mui/styles";
import not_found from "../../../assets/img/404img.jpg"
import {Link} from "react-router-dom";

const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '10px'
    }

})

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.img_container}>
                    <img src={not_found} alt=""/>
                </div>
                <Link to="/">
                <GDSEButton
                    variant="contained"
                    label="Back To HomePage"
                />


                </Link>
            </div>
        )
    }
}

export default withStyles(styleSheet)(NotFound)