import React, { Component } from 'react'
import SpaceIcon from "./spaceIcon.png"
import './index.css'
/* 租户组件 */
export default class TenantOptions extends Component {
    state = {
        tenantList: []
    }
    cutTenantName = (tenantName) => {
        if (tenantName.length > 20) {
          return `${tenantName.substring(0, 15)}...`
        } else {
          return tenantName
        }
    }
    render() {
        const { tenantList } = this.props
        return (
                <ul className={"select-box"}>
                    {tenantList.map((item) => {
                        return (
                            <li onClick={() => this.props.selectAction(item)}>
                                <p>
                                    <img className={"select-box-icon"} src={SpaceIcon}></img>
                                </p>
                                {this.cutTenantName(item.tenantName)}
                                <span className={"select-box-spacetype"}>企业</span>
                            </li>
                        );
                    })}
                </ul>
        )
    }
}
