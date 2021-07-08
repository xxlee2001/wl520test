import React, { Component } from "react";
import { Icon, Label } from 'tinper-bee';
import mtl from "mtl-js-sdk";
import { Toast } from 'antd-mobile'

import Button from 'bee-button';
import 'bee-button/build/Button.css';
import { Link, useHistory } from "react-router-dom";
import Form from 'bee-form';
import 'bee-form/build/Form.css';
import FormControl from 'bee-form-control';
import 'bee-form-control/build/FormControl.css';
import Loading from 'bee-loading';
import 'bee-loading/build/Loading.css';
import Message from 'bee-message';
import 'bee-message/build/Message.css';

import "./index.less";
import AvatarDefaultIcon from "../../static/images/Avatar_default@2x.png";
import { DOMAIN_PREFIX } from '../../util';
import ValiadCode from "../../components/validCode";
import RegionCode from "../../components/regionCode";
import Empty from "../../components/empty";
import Env from "../../../common/config.env";
import {
    getAppInfoByHash,
    sendValidCodeByHash,
    loginByPassword,
    loginByValidCode
} from  './actions';

const { FormItem } = Form;

class Home extends Component {
    state = {
        values: {},
        data: {},
        defaultValues: {},
        loading: false,
        inited: false,
        iSubmitable: false,
        rules: [
            {
                value: 'phone',
                field: 'authAccount',
                type: 'authAccount', // email、phone
            },
            {
                value: 'password',
                field: 'authPass',
                type: 'authPass', // password、validCode
            },
            {
                value: '',
                label: '手机号',
                field: 'phone',
                type: 'phone',
                validateTrigger: 'onBlur',
                rules: [{
                    required: true,
                    pattern: /^[1]([3-9])[0-9]{9}$/
                }],
                relyon: {
                    authAccount: ['phone']
                },
                options: {
                    suffix: <label className="label">手机号</label>,
                    getPrefix: (_this, rules, rule) => {
                        const authPassRule = rules.find(v=> v.field == 'authPass');
                        if(authPassRule.value != 'validCode') {
                            const onClick = (e) => {
                                const { rules } = this.state;
                                const rule = rules.find(v=> v.field == 'authAccount');
                                rule.value = 'email';
                                this.setState({
                                    rules
                                }, this.validateFields)
                            }
                            return <Icon className="icon-transform" onClick={onClick}/>
                        }
                    }
                },
                // getValue(val) {
                //     return (this.region || '') + (val || '');
                // }
            },
            {
                value: '',
                label: '邮箱',
                field: 'email',
                type: 'email',
                validateTrigger: 'onBlur',
                rules: [{
                    required: true,
                    pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                }],
                relyon: {
                    authAccount: ['email']
                },
                options: {
                    suffix: <label className="label">邮箱</label>,
                    prefix: (() => {
                        const onClick = (e) => {
                            const { rules } = this.state;
                            const rule = rules.find(v=> v.field == 'authAccount');
                            rule.value = 'phone';
                            this.setState({
                                rules
                            }, this.validateFields)
                        }
                        return <Icon className="icon-transform" onClick={onClick}/>
                    })()
                }
            },
            {
                value: '',
                label: '密码',
                field: 'password',
                type: 'password',
                validateTrigger: 'onBlur',
                rules: [{
                    required: true,
                }],
                relyon: {
                    authPass: ['password']
                },
                options: {
                    maxLength: 20,
                    suffix: <label className="label">密码</label>,
                    prefix: (() => {
                        const toggleTypePass = (e) => {
                            const { rules } = this.state;
                            const rule = rules.find(v=> v.field == 'password');
                            rule.type = rule.type == 'text'? 'password': 'text';
                            this.setState({
                                rules
                            })
                            if(e &&
                                e.target) {
                                e.target.className = e.target.className.replace(/icon\-([^-]+)\-eye/, function($0, $1, input){
                                    return /close/.test($0) ? 'icon-open-eye': 'icon-close-eye';
                                })
                            }
                        }
                        return <Icon className="icon-close-eye"
                            onClick={toggleTypePass}
                        />;
                    })()
                },
            },
            {
                value: '',
                label: '验证码',
                field: 'validCode',
                type: 'validCode',
                validateTrigger: 'onBlur',
                rules: [{
                    required: true,
                    pattern: /^\d{6}$/
                }],
                relyon: {
                    authPass: ['validCode']
                },
                options: {
                    maxLength: 6,
                    disabled: true,
                    suffix: <label className="label">验证码</label>,
                    getPrefix: (_this, rules, rule) => {
                        const { values } = this.state;
                        return <ValiadCode
                            className="get-valid-code"
                            delay={ 60 }
                            phone={ values['phone'] }
                            onStart={() => {
                                const { rules, values } = this.state;
                                const rule = rules.find(v=> v.field == 'validCode');
                                rule.value = '';
                                rule.options.disabled = false;
                                this.setState({
                                    rules
                                }, this.validateFields)
                                sendValidCodeByHash({
                                    data: (() => {
                                        const formData = new FormData();
                                        formData.append('phone', values['phone'] || '');
                                        return formData;
                                    })()
                                })
                            }}
                        />;
                    }
                }
            },
        ]
    }

    /**
     * 自动登陆友空间
     * @param {*} url
     */
    autoLoginInUpesn(url = '') {
        console.log('----------autoLoginInUpesn-----------', {
            env: Env.HTTP_HPAPAAS_URL,
            platform: mtl.platform,
            url,
        });
        if (url && /upesn/i.test(mtl.platform)) {
            mtl.upesn.login({
                url: Env.HTTP_HPAPAAS_URL,
                success(res) {
                    const { code } = res;
                    if (code == '200') {
                        console.log('Login Upesn Success.', res)
                        Toast.success('即将跳转友空间');
                        setTimeout(function(){
                            location.href = url;
                        }, 100)
                    } else {
                        console.error('Login Upesn Error.', res)
                    }
                },
                fail(err) {
                    console.error('Login Upesn Error.', err)
                }
            })
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        getAppInfoByHash()
        .then(({ code , data = {} } = {}) => {
          if (typeof data.info == 'string') {
              try {
                Object.assign(data, JSON.parse(data.info));
              } catch (e) {}
          }
          const { rules } = this.state,
                authPassRule = rules.find(v=> v.field == 'authPass'),
                authAccountRule = rules.find(v=> v.field == 'authAccount');

            /**
             * 详情页面跳转url拼接billID
             * @author rongqb@yonyou.com
             * @date 20201222
             */
            if (data.url) {
                data.url = data.url.replace(/([\&\?]mode=browse&_id=[^=\&\?]*)?$/, ([undefined, 0, ''].includes(data.billID) ? '' : `${/\?/.test(data.url)? '&':'?'}mode=browse&_id=${data.billID}`))
            }

            switch(data.auth.toLocaleLowerCase()) {
                case 'anonymous':
                    location.href = data.url;
                    return;
                case 'phone':
                    authPassRule.value = 'validCode';
                    break;
                case 'yht':
                default:
                    authPassRule.value = 'password';
                    break;
            }

            if (!['anonymous'].includes(data.auth.toLocaleLowerCase())) {
                this.autoLoginInUpesn(data.url);
            }

            this.setState({
                inited: true,
                loading: false,
                data,
                rules,
            }, this.validateFields.bind(this));
        })
        .catch((err) => {
            this.setState({
                inited: true,
                loading: false,
                ...((err && err.code == 50050)? {
                  data: {
                      expireAt: Date.now()
                  },
                }:{})
            }, this.validateFields.bind(this));
        })
    }

    validateFields(callback = ()=>{}) {
        this.props.form.validateFields((err, values) => {
            const { rules, defaultValues = {} } = this.state;
            Object.keys(values).forEach((field) => {
                const rule = rules.find(rule => rule.field === field);
                if(rule) {
                    if(rule.getValue) {
                        rule.value = values[field] = rule.getValue(values[field]);
                    } else {
                        rule.value = values[field];
                    }
                }
            })
            console.log('validateFields', values, defaultValues)
            this.setState({
              iSubmitable: !err && (!Object.keys(defaultValues).length || Object.keys(values).some(v => values[v] !== defaultValues[v])),
                rules,
                values
            }, typeof callback == 'function'? callback.bind(this): () => {});
        });
    }

    submit = async () => {
        const { values, data: { auth, url, tenantId = '' } = {} } = this.state;
        this.setState({
            loading: true
        })
        try {
            let res = null;
            switch(auth.toLocaleLowerCase()) {
                case 'yht':
                    res = await loginByPassword({
                        data: {
                            username: values['email'] || values['phone'] || '',
                            password: values['password'] || '',
                            tenantId,
                        }
                    });
                break;
                case 'phone':
                    res = await loginByValidCode({
                        data: (() => {
                            const formData = new FormData();
                            formData.append('phone', values['phone'] || '');
                            formData.append('validCode', values['validCode'] || '');
                            return formData;
                        })()
                    });
                break;
            }
            const { code, data, message } = res || {};
            if(code == 0) {
                location.href = url;
            } else {
                if(message) {
                    Message.destroy();
                    Message.create({content: message, color: 'danger'});
                }
            }
        } catch (e) {
            if(e && e.message) {
                Message.destroy();
                Message.create({content: e.message, color: 'danger'});
            }
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { values, rules, iSubmitable, defaultValues, data, loading = false, inited = false } = this.state;
        const { form: { getFieldProps, getFieldError } = {} } = this.props;
        const isExpireAt = data.expireAt <= Date.now() && data.expireAt > 0;

        return (
            <div className="home-container">
                {/* Loading */}
                <Loading container={this} show={loading}></Loading>

                {/* Avatar */}
                {
                    !isExpireAt && inited &&
                    <div className="avatar">
                        <img
                            src={ data.appIcon || AvatarDefaultIcon }
                            onError={(e) => (e.target.src = AvatarDefaultIcon)}/>
                    </div>
                }

                {/* title */}
                {
                    !isExpireAt && inited &&
                    data.appName &&
                    <h2 className="title">欢迎来到{ data.appName }</h2>
                }

                {/* form */}
                {
                    isExpireAt ?
                    <Empty title="二维码已失效,请重新生成"></Empty>:
                    inited && <Form className="form">
                        {
                            rules.map((rule, index, list) => {
                                const { label, field, type, value, validateTrigger, rules, options = {}, relyon } = rule;
                                if(!relyon ||
                                    !Object.keys(relyon).length ||
                                    Object.keys(relyon).every((field, index) => {
                                        const relyonRule = list.find(v => v.field == field);
                                        if(relyonRule) {
                                            const value = relyon[field],
                                                relyonValue = values[field] ?? relyonRule['value'];
                                            switch(Object.prototype.toString.call(value).slice(8, -1)) {
                                                case 'Array': return value.includes(relyonValue);
                                                case 'RegExp': return value.test(relyonValue);
                                                default: return value === relyonValue;
                                            }
                                        }
                                        return false;
                                    })) {

                                    let Content = null;
                                    const { getPrefix = () => {}, getSuffix = () => {} } = options;

                                    if(/^email$/i.test(type)) {
                                        const props = getFieldProps(field, {
                                            initialValue: value,
                                            value: value,
                                            validateTrigger,
                                            rules
                                        });
                                        Content = (<div className="email-bar main-content">
                                            <FormControl
                                                type={type}
                                                value={value}
                                                prefix={getPrefix(this, list, rule)}
                                                suffix={getSuffix(this, list, rule)}
                                                {...options}
                                                {...props}
                                                onChange={(value, e) => {
                                                    props.onChange(value, e);
                                                    this.validateFields();
                                                }}
                                            />
                                        </div>)
                                    }else if(/^phone$/i.test(type)) {
                                        const props = getFieldProps(field, {
                                            initialValue: value,
                                            value: value,
                                            validateTrigger,
                                            rules
                                        });
                                        Content = (<div className="phone-bar">
                                            <RegionCode
                                                allowClear={false}
                                                showSearch={false}
                                                dropdownClassName="region-code-dropdown"
                                                className="region-code"
                                                onChange={v => {
                                                    rule.region = v;
                                                    this.validateFields();
                                                }}
                                            >
                                            </RegionCode>
                                            <FormControl
                                                type={type}
                                                value={value}
                                                prefix={getPrefix(this, list, rule)}
                                                suffix={getSuffix(this, list, rule)}
                                                {...options}
                                                {...props}
                                                onChange={(value, e) => {
                                                    props.onChange(value, e);
                                                    this.validateFields();
                                                }}
                                            />
                                        </div>)
                                    } else if(/^(password|text|validCode)$/i.test(type)) {
                                        const props = getFieldProps(field, {
                                            initialValue: value,
                                            value: value,
                                            validateTrigger,
                                            rules
                                        });
                                        Content = (<FormControl
                                                type={type}
                                                value={value}
                                                prefix={getPrefix(this, list, rule)}
                                                suffix={getSuffix(this, list, rule)}
                                                {...options}
                                                {...props}
                                                onChange={(value, e) => {
                                                    props.onChange(value, e);
                                                    this.validateFields();
                                                }}
                                            />
                                        )
                                    }
                                    return Content && <FormItem key={index}>
                                        { Content }
                                    </FormItem>
                                }
                            })
                        }
                        <FormItem>
                            <Button colors="primary" onClick={this.submit} disabled={!iSubmitable}>登录</Button>
                        </FormItem>
                    </Form>
                }
            </div>
        );
    }
}

export default Form.createForm()(Home);
