import React, { Component } from "react";
import intl from "react-intl-universal";
import { Icon, Label } from 'tinper-bee';
import Button from 'bee-button';
import Select from 'bee-select';
import 'bee-select/build/Select.css';
import "./index.less";
import { DOMAIN_PREFIX } from '../../util';

window.intl = intl;

class regionCode extends Component {
    state = {
        showList: false,
        active: '+86',
        data: [
            {
              label: "中国",
              value: "+86",
            },
            {
              label: "中国香港",
              value: "+852",
            },
            {
              label: "中国澳门",
              value: "+853",
            },
            {
              label: "中国台湾",
              value: "+886",
            },
        ]
    };

    componentDidMount() {
        const { data = [] } = this.state;
        const { onChange = () => {} } = this.props;
        onChange.call(this, data && data[0] && data[0]['value'] || '');

        document.addEventListener('click', e => {
            if(e.target.closest('.region-code')) {
                this.setState({
                    showList: true
                })
            } else {
                this.setState({
                    showList: false
                })
            }
        })
    }

    render() {
        const  { data = [], showList } = this.state;
        const  { active = data && data[0] && data[0]['value'] || '' } = this.state;

        return <span
              className="region-code"
          >
            { active }
            {
                showList &&
                <ul className="region-list">
                    {
                      data.map(v => <li
                          className={[active == v.value? ['active']:'']}
                          onClick={() => {
                              const { onChange = () => {} } = this.props;
                              this.setState({
                                  active: v.value,
                                  showList: false
                              }, () => {
                                  onChange.call(this, v.value)
                              })
                          }}
                          >
                          <span>{ v.label }</span>
                          <span>{ v.value}</span>
                      </li>)
                    }
                </ul>
            }
        </span>
    }
}

export default regionCode
