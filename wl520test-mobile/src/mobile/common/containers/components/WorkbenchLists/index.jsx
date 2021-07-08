import React, { Component } from 'react'
import intl from "react-intl-universal";
import { Carousel } from 'antd-mobile'
import {arrTrans } from '../../../actions/utils'

/* 工作台apps 组件 */
export default class WorkbenchLists extends Component {
    render() {
        let appsLists = [
            {id:1,icon:'',appName: '测试1'},
            {id:2,icon:'',appName: '测试2'},
            {id:3,icon:'',appName: '测试3'},
            {id:4,icon:'',appName: '测试4'},
            {id:5,icon:'',appName: '测试5'},
            {id:6,icon:'',appName: '测试6'},
            {id:7,icon:'',appName: '测试7'},
            {id:8,icon:'',appName: '测试8'},
            {id:9,icon:'',appName: '测试9'},
            {id:10,icon:'',appName: '测试10'},
            {id:11,icon:'',appName: '测试11'},
            {id:12,icon:'',appName: '测试12'},
            {id:13,icon:'',appName: '测试13'},
            {id:14,icon:'',appName: '测试14'},
            {id:15,icon:'',appName: '测试15'},
            {id:16,icon:'',appName: '测试16'},
            {id:17,icon:'',appName: '测试17'},
            {id:18,icon:'',appName: '测试18'},
            {id:19,icon:'',appName: '测试19'},
            {id:20,icon:'',appName: '测试20'},
            {id:21,icon:'',appName: '测试21'},
            {id:22,icon:'',appName: '测试22'},
            {id:23,icon:'',appName: '测试23'},
            {id:24,icon:'',appName: '测试24'},
            {id:25,icon:'',appName: '测试25'},
        ]
        let appsList = arrTrans(20, appsLists)
        return (
            <Carousel 
                autoplay={false} 
                infinite 
                // dotActiveStyle={{ backgroundColor: '#E14C46' }}
                dotStyle={{ backgroundColor: '#E6E6E6' }}
            >
                {appsList.length ? (
                    appsList.map((item) => {
                        return (
                            <div key={item[0].id} className="work-main-c">
                                {item.map((inItem) => {
                                    return (
                                        // <div
                                        //     onClick={() => goToHomePage(inItem.url, inItem.appName)}
                                        //     key={inItem.id}
                                        //     className="work-m-item"
                                        // >
                                        <div
                                            key={inItem.id}
                                            className="work-m-item"
                                        >
                                            <dl>
                                                <dt>
                                                    <img src={inItem.icon} />
                                                </dt>
                                                <dd>{inItem.appName}</dd>
                                            </dl>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })
                ) : (
                    <div className="work-main-c-none">
                        <dl className={"none-icon"}>
                            <dt></dt>
                            <dd>{intl.get("noApp")}</dd>
                        </dl>
                    </div>
                )}
            </Carousel>
        )
    }
}
