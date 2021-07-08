import React, { Component } from "react";
import { Icon, Label } from 'tinper-bee';
import Button from 'bee-button';
import "./index.less";
import { DOMAIN_PREFIX } from '../../util';

class validCode extends Component {
    state = {
        title: '获取验证码',
        lock: 0
    }
    onClick = () => {
        const { delay = 60 } = this.props;
        (function countdown(count = delay) {
            const { onStart = () => {}, onEnd = () => {}} = this.props;
            const { lock } = this.state;
            if(count >= 0) {
                if(count == delay) {
                    onStart();
                }
                if(count == 0) {
                    onEnd();
                }
                this.setState({
                    lock: count
                })
                setTimeout(countdown.bind(this, count - 1), 1000)
            }
        }.bind(this))();
    }
    render() {
        const { title, lock } = this.state;
        const { phone } = this.props;

        return <Button className="valid-code" onClick={this.onClick} disabled={!phone || lock != 0}>
            { lock > 0? `${lock}s后重新获取` : title }
        </Button>
    }
}

export default validCode
