import {Component} from "react";


class Message extends Component{

    constructor() {
        super();
        this.state = {
            message: 'Please Subscribe us! '
        }
    }


    changeOnButtonClick(){
        this.setState({
            message: 'Thank You!'
        })
    }

    render() {

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeOnButtonClick()}>Subscribe</button>
            </div>
        )
    }


}

export default Message