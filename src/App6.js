import React from 'react';
import {Divider,Typography} from 'antd';

import 'antd/dist/antd.css';

const {Title,Paragraph,Text} = Typography;
function App(){
    return (
        <Typography>
            <Title>Introduction</Title>
            <Paragraph>
                In the process of internal desktop
            </Paragraph>
            <Paragraph>
                After....
                <Text strong>
                    uniform the user interface
                </Text>
            </Paragraph>
            <Title level={2}>Guidelines</Title>
            <Paragraph>
                We supply...
            </Paragraph>
        </Typography>
    )
}

export default App;