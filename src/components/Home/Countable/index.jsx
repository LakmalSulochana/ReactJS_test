import React,{Component} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

class Countable extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    /*increment method*/
    incrementCount(){
        console.log("increment function calling")
        this.setState({
            count: this.state.count + 1
        })
    }
    /*decrement method*/
    decrementCount(){
        console.log("decrement function calling")
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount(){
        console.log("Reset function calling")
        this.setState({
            count: 0
        })
    }

    render() {
        return(
            <div>
                <Typography variant="h4" gutterBottom>
                    Count:{this.state.count}
                </Typography>
                {/*increment button*/}
                <Button variant="contained"
                        onClick={()=>{
                            console.log('clicked')
                            this.incrementCount()
                        }}
                >
                    Increase</Button>

                {/*decrement button*/}
                <Button variant="outlined"
                        onClick={()=>{
                            console.log('clicked')
                            this.decrementCount()
                        }}
                        style={{marginLeft:'15px'}}
                >
                    Decrease</Button>

                <Button variant="outlined" color="error"
                        onClick={()=>{
                            console.log('clicked')
                            this.resetCount()
                        }}
                        style={{marginLeft:'15px'}}
                >
                    Reset</Button>
            </div>
        )
    }
}
export default Countable