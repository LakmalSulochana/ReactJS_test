import React, {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import {Autocomplete, TextField, Typography} from "@mui/material";
import {styleSheet} from "./style";
import GDSEButton from "../../../components/common/Button";

class GridLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [{label: 'City of God', year: 2002},
                {label: 'Se7en', year: 1995},
                {label: 'The Silence of the Lambs', year: 1991},
                {label: "It's a Wonderful Life", year: 1946},
                {label: 'Life Is Beautiful', year: 1997},
                {label: 'The Usual Suspects', year: 1995},
                {label: 'Léon: The Professional', year: 1994},
                {label: 'Spirited Away', year: 2001},
            ]
        }

    }


    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <Typography variant="h4">
                    Customer Manage
                </Typography>
                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">
                            Customer Name
                        </Typography>
                        <TextField id="outlined-basic" placeholder="Name" label="Customer Name" variant="outlined"
                                   size="small" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} style={{width: '100%'}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            //sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Movie" style={{width: '100%'}}/>}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">
                            Customer NIC
                        </Typography>
                        <TextField id="outlined-basic" placeholder="NIC" label="Customer NIC" variant="outlined" size="small" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">
                            Customer Address
                        </Typography>
                        <TextField id="outlined-basic" placeholder="address" label="Customer Address" variant="outlined"
                                   size="small" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>

                        <GDSEButton size="small" label="save"/>
                    </Grid>

                </Grid>
            </Fragment>

        )
    }
}

export default withStyles(styleSheet)(GridLayout)