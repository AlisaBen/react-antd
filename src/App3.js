import React from 'react';
import {Button,Radio,Icon} from 'antd';
import 'antd/dist/antd.css';

/**
 * Button属性的size
 * Icon代替icon属性
 * Button.Group
 * Radio
 */
class ButtonSize extends React.Component{
    state = {
        size:'large',
        type:'left',
    };
    handleSizeChange = e =>{
        this.setState({size:e.target.value});
    }
    handleTypeChange = e => {
        this.setState({type:e.target.value});
    }
    render(){
        const {size,type} = this.state;
        return (
            <div>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">large</Radio.Button>
                    <Radio.Button value="default">default</Radio.Button>
                    <Radio.Button value="small">small</Radio.Button>
                </Radio.Group>
                <br /><br />
                <Radio.Group value={type} onChange={this.handleTypeChange}>
                    <Radio.Button value="left">left</Radio.Button>
                    <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
                <br /><br />
                <Button type="primary" size={size}>Primary</Button>
                <Button size={size}>Default</Button>
                <Button type="dashed" size={size}>Dashed</Button>
                <Button type="danger" size={size}>Danger</Button>
                <Button type="link" size={size}>link</Button>
                <br /><br />
                <Button type="primary" shape="round" size={size} icon="download">Primary</Button>
                <Button icon="download" size={size}>Default</Button>
                <Button icon="download" type="dashed" size={size}>Dashed</Button>
                <Button icon="download" type="danger" size={size}>Danger</Button>
                <Button icon="download" type="link" size={size}>link</Button>
                <br /><br />
                <Button.Group size={size}>
                    {/* <Icon.Group type={type}> */}
                        <Button type="primary">
                            <Icon type="right"></Icon> 
                            Backward
                        </Button>
                        {/* <Button type="primary">
                            <Icon type="right"></Icon>
                            Forward
                        </Button> */}
                        <Button type="primary">
                            <Icon></Icon>
                            Backward1
                        </Button>
                    {/* </Icon.Group> */}

                </Button.Group>
            </div>

        );

    };
}

export default ButtonSize;