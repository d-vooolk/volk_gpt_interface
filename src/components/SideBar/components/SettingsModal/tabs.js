import {ReactComponent as SettingsIcon} from "../../../../static/settings.svg";
import {ReactComponent as DataControlsIcon} from "../../../../static/dataControls.svg";
import {Button, Col, Divider, Dropdown, Row, Space, Switch, Typography} from "antd";
import {DownOutlined} from '@ant-design/icons';
import React, {useRef} from "react";
import './styles.scss';

const CLEAR_HISTORY_ATTENTION = 'Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices.';

const GeneralSettings = () => {
    const items = [
        {
            key: `${this?.label}${Math.random()}`,
            label: 'System',
        },
        {
            key: `${this?.label}${Math.random()}`,
            label: 'Dark',
        },
        {
            key: `${this?.label}${Math.random()}`,
            label: 'Light',
        }
    ];

    const themeText = useRef(null);

    const themeHandler = {
        items,
        onClick: (e) => {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            console.log(prefersDarkScheme);
            themeText.current.textContent = e.domEvent.target.textContent;
        }
    }

    return (
        <div>
            <Row justify="space-between" align="middle">
                <Col>
                    <Typography className="tab-text">Theme</Typography>
                </Col>
                <Col>
                    <Dropdown
                        menu={themeHandler}
                        arrow={false}
                        placement="top"
                        trigger={['click']}
                        overlayClassName="dropdown"
                        className="dropdown"
                    >
                        <Button>
                            <Space>
                                <Typography ref={themeText} className="dropdown-text">
                                    Theme
                                </Typography>
                                <DownOutlined style={{ fontSize: "10px" }}/>
                            </Space>
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
            <Divider className="divider"/>
            <Row justify="space-between" align="middle">
                <Col>
                    <Typography className="dropdown-text">Clear all chats</Typography>
                </Col>
                <Col>
                    <Button type="primary" danger>
                        Clear
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

const DataControls = () => {
    const switchChange = () => {
        console.log('switched')
    }

    return (
        <>
            <Row justify="space-between" align="middle" style={{ marginBottom: "10px" }} >
                <Col>
                    Chat history & training
                </Col>
                <Col>
                    <Switch defaultChecked onChange={switchChange} className="switcher"/>
                </Col>
            </Row>
            <Row>
                    <Typography style={{fontSize: "9px"}} className="dropdown-text">
                        {CLEAR_HISTORY_ATTENTION}
                    </Typography>
            </Row>
        </>
    )
}

export const modalTabs = [
    {
        label: (
            <div className="tabs-label">
                <SettingsIcon className="settings-icon"/>
                <Typography className="tab-text">General</Typography>
            </div>
        ),
        key: 'generalSettingsKey',
        children: <GeneralSettings/>,
    },
    {
        label: (
            <div className="tabs-label">
                <DataControlsIcon />
                <Typography className="settings-icon">Data controls</Typography>
            </div>
        ),
        key: 'DataControlsSettingsKey',
        children: <DataControls/>,
    }
]