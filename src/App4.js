import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component{
    state = {
        loading:false,
        iconLoading:false,
    };

    enterLoading = () => {
        this.setState({loading:true});
    };

    enterIconLoading = () => {
        this.setState({iconLoading:true});
    };

    render() {
        return (
            <div>
                <Button type="primary" loading>Loading</Button>
                <Button 
                    type="primary" 
                    loading={this.state.loading} 
                    onClick={this.enterLoading}
                >Click me</Button>
                <Button 
                    type="primary" 
                    icon="poweroff"
                    loading={this.state.iconLoading} 
                    onClick={this.enterIconLoading}
                >Click me</Button>
                <Button type="primary" disabled>disabled</Button>
            </div>
        )
    }
}

export default App;