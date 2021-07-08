import React, { Component } from "react";
import { Icon, Label } from 'tinper-bee';
import "./index.less";

class Empty extends Component {
    render() {
        const { title } = this.props;
        return <div className="empty-container">
            <span class="icon-empty">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
                <span class="path5"></span>
                <span class="path6"></span>
                <span class="path7"></span>
                <span class="path8"></span>
                <span class="path9"></span>
                <span class="path10"></span>
                <span class="path11"></span>
                <span class="path12"></span>
                <span class="path13"></span>
            </span>
            {
                title &&
                <div className="empty-title">{ title }</div>
            }
        </div>
    }
}

export default Empty
