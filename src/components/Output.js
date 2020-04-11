import React, {Component} from 'react';

class Output extends Component {


    render() {
        let {output} = this.props;
        return (
            <div className="output">
                <p>{output}</p>
            </div>
    )
        ;
    }
}


export default Output;