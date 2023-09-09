import {Col, Row, Switch, Typography} from "antd";
import React from "react";

const DataControls = () => {
    const CLEAR_HISTORY_ATTENTION = 'Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices.';

    const switchChange = () => {
        console.log('switched')
    }

    return (
        <>
            <Row justify="space-between" align="middle" style={{marginBottom: "10px"}}>
                <Col>
                    Chat history & training
                </Col>
                <Col>
                    <Switch defaultChecked onChange={switchChange} className="switcher"/>
                </Col>
            </Row>
            <Row>
                <Typography style={{fontSize: "9px"}} className="attention-text">
                    {
                        CLEAR_HISTORY_ATTENTION
                    }
                </Typography>
            </Row>
        </>
    )
};

export default DataControls;