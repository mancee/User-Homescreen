import React from 'react';
import { Menu, Dropdown, Button, Icon, message, DatePicker } from 'antd';
import './Home.css'

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
function onChange(date, dateString) {
    console.log(date, dateString);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            Delhi
    </Menu.Item>
        <Menu.Item key="2">
            Hyderabad
    </Menu.Item>
        <Menu.Item key="3">
            Mumbai
    </Menu.Item>
        <Menu.Item key="3">
            Bangalore
    </Menu.Item>
    </Menu>
);
const menu2 = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Icon type="smile" />
            Comedy
    </Menu.Item>
        <Menu.Item key="2">
            <Icon type="video-camera" />
            Movie
    </Menu.Item>
    </Menu>
);
class Drop extends React.Component{
    render(){
        return(
            <div className="loc-event-date" >
                <Dropdown overlay={menu} >
                    <Button className="butcss" size="large">
                        Location <Icon type="down" />
                    </Button>
                </Dropdown>
                <Dropdown overlay={menu2}>
                    <Button className="butcss" size="large">
                        Event Type <Icon type="down" />
                    </Button>
                </Dropdown>

                <DatePicker onChange={onChange} className="datepick" placeholder="Select Date" />
                <Button className="butcss" size="large" style={{ background:'#cfcebe'}}>
                    Search
                </Button>
            </div>
        )
    }
 
    }
   export default Drop;