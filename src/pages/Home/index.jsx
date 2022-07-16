import {Component, Fragment} from "react";
import Greating from "../../components/Home/Greating";
import Countable from "../../components/Home/Countable";
import Divider from '@mui/material/Divider';

class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Fragment>
                <Greating name="IJSE"/>
                <Divider />
                <Countable/>
            </Fragment>


        )
    }
}
export default HomePage