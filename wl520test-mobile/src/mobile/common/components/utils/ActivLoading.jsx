import React, { Component } from 'react'
import { ActivityIndicator } from 'antd-mobile'

export default class ActivLoading extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}> 
                <ActivityIndicator {...this.props}/> 
            </div>
        )
    }
}

