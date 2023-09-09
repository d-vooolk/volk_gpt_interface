import React, {useContext, useRef} from "react";
import {ThemeContext} from "../../../../../context/ThemeContext";
import {CUSTOM_TYPE, DARK_THEME, LIGHT_THEME, SYSTEM_TYPE, THEME_KEY} from "../../../../../constants/colorTheme";
import {Button, Col, Divider, Dropdown, Row, Space, Typography} from "antd";
import {DownOutlined} from "@ant-design/icons";

const items = [
    {
        key: 'SystemTheme',
        label: 'System',
    },
    {
        key: 'DarkTheme',
        label: 'Dark',
    },
    {
        key: 'LightTheme',
        label: 'Light',
    }
];

const labelFirstToUpper = (label) => `${label[0].toUpperCase()}${label.slice(1)}`;

const themeIdent = (e, setTheme) => {
    const themeProps = {
        theme: null,
        type: null
    };

    const targetText = e.domEvent.target.innerText;

    if (targetText === SYSTEM_TYPE) {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        themeProps.theme = prefersDarkScheme ? DARK_THEME : LIGHT_THEME;
        themeProps.type = SYSTEM_TYPE;
        localStorage.setItem(THEME_KEY, JSON.stringify(themeProps));
        setTheme(themeProps);
    } else {
        themeProps.theme = targetText.toLowerCase();
        themeProps.type = CUSTOM_TYPE;
        localStorage.setItem(THEME_KEY, JSON.stringify(themeProps));
        setTheme(themeProps);
    }
}

const GeneralSettings = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const themeText = useRef(null);


    const themeHandler = {
        items,
        onClick: (e) => themeIdent(e, setTheme)
    }

    return (
        <div>
            <Row justify="space-between" align="middle">
                <Col>
                    <Typography className="dark-tab-text">Theme</Typography>
                </Col>
                <Col>
                    <Dropdown
                        menu={themeHandler}
                        arrow={false}
                        placement="bottom"
                        trigger={['click']}
                        overlayClassName="dropdown"
                        className="dropdown"
                    >
                        <Button>
                            <Space>
                                <Typography ref={themeText} className="dropdown-text">
                                    {
                                        theme.type === SYSTEM_TYPE ? SYSTEM_TYPE : labelFirstToUpper(theme.theme)
                                    }
                                </Typography>
                                <DownOutlined style={{fontSize: "10px"}}/>
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

export default GeneralSettings;