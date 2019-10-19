import {Affix,Button} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

class App extends React.Component{
    state = {
        top:10,
        bottom:10,
    };
    render(){
        return (
            <div>
                <Affix offsetTop={this.state.top}>
                    <Button
                        type="primary"
                        onClick={() =>{
                            this.setState({top:this.state.top+10})
                        }}
                    >
                        Affix top
                    </Button>
                </Affix>
                <Affix offsetBottom={this.state.bottom}>
                    <Button
                        type="primary"
                        onClick={() =>{
                            this.setState({
                                bottom:this.state.bottom + 10,
                            })
                        }}
                    >
                        Affix bottom
                    </Button>
                </Affix>

            </div>
        )
    }
}

class Demo extends React.Component{
    render(){
        return (
            <div
                className="scrollable-container"
                ref={node=>{
                    this.container = node;
                }}
            >
                <div className="background">
                    <Affix target={() => this.container} onChange={affixed => console.log(affixed)}>
                        <Button type="primary">Fixed ath the top of container</Button>
                    </Affix>

                </div>

            </div>
        )
    }
}


export {App,Demo};
