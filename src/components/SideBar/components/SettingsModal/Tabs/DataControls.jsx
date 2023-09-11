import {Col, Row, Switch, Typography} from "antd";
import React, {useContext} from "react";
import {IncognitoModeContext} from "../../../../../context/IncognitoModeContext";
import {CLEAR_HISTORY_ATTENTION, INCOGNITO_MODE_TITLE} from "../../../../../constants/textConstants";

const DataControls = () => {
    const {incognitoMode, setIncognitoMode} = useContext(IncognitoModeContext);

    const switchChange = () => setIncognitoMode(!incognitoMode);

    return (
        <>
            <Row justify="space-between" align="middle" style={{marginBottom: "10px"}}>
                <Col>
                    { INCOGNITO_MODE_TITLE }
                </Col>
                <Col>
                    <Switch checked={!incognitoMode} onChange={switchChange} className="switcher"/>
                </Col>
            </Row>
            <Row>
                <Typography style={{fontSize: "9px"}} className="attention-text">
                    { CLEAR_HISTORY_ATTENTION }
                </Typography>
            </Row>
        </>
    )
};

export default DataControls;