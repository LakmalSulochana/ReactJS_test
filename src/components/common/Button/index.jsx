import React,{Component} from "react";
import {PropTypes} from "@mui/material";
class Button extends Component{
    static propTypes={
        onClick:PropTypes.func,
        children:PropTypes.node,
        variant:PropTypes.string,
        className:PropTypes.any,
        label:PropTypes.string,
        size:PropTypes.string,
        disabled: PropTypes.bool,
        color:PropTypes.string,
        type:PropTypes.string,
        endIcon:PropTypes.string,
        startIcon:PropTypes.string


    }
    static defaultProps={
        
    }
}