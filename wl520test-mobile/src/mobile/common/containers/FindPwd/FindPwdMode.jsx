/* 找回密码方式（手机号/密码） */
import { Component } from 'react'
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { NavBar, List } from "../../components/antd";
import intl from "react-intl-universal";
import { getDomainPrefix } from '@utils'; 
import BackIcon from '../../components/Icon/Back'
import './index.css'

const DOMAIN_PREFIX = getDomainPrefix();
class FindPwdMode extends Component {
    handleChange = key => {
        this.props.history.push({pathname: `${DOMAIN_PREFIX}/workbench/findPwd/firststep`, state: { key }})
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={
                        <Link to={`${DOMAIN_PREFIX}/workbench/login`} replace>
                            <BackIcon />
                        </Link>
                     }
                >
                    <span className="find-pwd-title">{intl.get("findPwd")}</span> 
                </NavBar>
                <List renderHeader={() => ""}>
                    {intl.get("findPwdList")?.map((item) => {
                        return (
                            <List.Item 
                                className="find-pwd-content"
                                key={item.value} 
                                extra={<RightOutlined style={{ color: "#BFBFBF" }} />}
                                onClick={ ()=>this.handleChange(item.value)}
                            >
                                <span style={{ color: '#111111'}}>{item.label}</span>
                            </List.Item>
                        );
                    })}
                </List>
            </div>
        )
    }
}
export default FindPwdMode
