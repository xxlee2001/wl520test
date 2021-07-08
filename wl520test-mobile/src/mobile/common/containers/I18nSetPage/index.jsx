import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { NavBar, Icon, List, Radio } from "../../components/antd";
import intl from 'react-intl-universal'
import BackIcon from '../../components/Icon/Back'
import { addStyle } from '../../utils/thememArray'

// import { useTheLang } from '../../../client/workbench'

import "./index.css";
import { useEffect } from "react";

const RadioItem = Radio.RadioItem;

import { getDomainPrefix } from '@utils'; 

const DOMAIN_PREFIX = getDomainPrefix();

const list =()=> [
    {
        label: intl.get('defaultLang'),
        value: "default",
    },
    {
        label: intl.get('zhsimp'),
        value: "zh-CN",
    },
    {
        label: intl.get('zhtr'),
        value: "zh-TW",
    },
];
const useTheLang = () => {
  // const [initDone, setInitDone] = useState(false)
    let currentLocale = intl.determineLocale({
        urlLocaleKey: "lang",
        cookieLocaleKey: "language",
        localStorageLocaleKey:'language'
    });

    if (currentLocale === 'default') {
  // console.log()
        currentLocale = window.navigator.language
        if (window.navigator.language.includes('en')) {
            console.log('init langs2',window.navigator.language.includes('en'))
            currentLocale = 'zh-cn'
        }
    }

    intl.init({
        currentLocale,
        locales: {
            [currentLocale]: require(`../../../common/components/utils/${currentLocale.toLowerCase()}`).default
        }
    }).then(() => {
  // setInitDone( true )
    })

}

const I18nSetPage = ({ theme }) => {
    addStyle(theme)
    const [value, setValue] = useState(
    window.localStorage.getItem("language") || "default"
  );
    useTheLang()
    const onChange = (v) => {
        window.localStorage.setItem("language", v);
        setValue(v);

    };

    return (
        <div className={"i18nsetting"}>
            <NavBar
                mode="light"
                icon={
                    <Link to={`${DOMAIN_PREFIX}/workbench/setting`} replace>
                        {/* <Icon style={{ color: "#333" }} type="left" /> */}
                        <BackIcon />
                    </Link>
        }
      >
                {intl.get('i18n')}
            </NavBar>
            <div className={'white-space-20'}></div>
            <List className="lanuage-botoom-line">
                {[...intl.get('langSet')].map((i) => (
                    <RadioItem
                        key={i.value}
                        checked={value === i.value}
                        onChange={() => onChange(i.value)}
          >
                        {i.label}
                    </RadioItem>
        ))}
            </List>
        </div>
    );
};
export default connect((state) => {
    return {
        theme: state.loginMessage.theme,
    };
},null)(I18nSetPage);
