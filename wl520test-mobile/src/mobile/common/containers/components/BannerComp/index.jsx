import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import './index.css'

/* banner 组件 */
export default class BannerComp extends Component {
    render() {
        let bannerData = {
            interval: 1000,
            images: [
                {
                    src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3535786093,2303627311&fm=26&gp=0.jpg',
                    type: 'png',
                    href: 'string'
                },
                {
                    src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3682031172,3048319726&fm=26&gp=0.jpg',
                    type: 'png',
                    href: 'string'
                },

            ]
        }
        return (
            <div className="work-banner">
                <Carousel
                    autoplay={false}
                    autoplayInterval={bannerData.interval}
                    infinite
                    // dotActiveStyle={{ backgroundColor: '#E14C46' }}
                    dotStyle={{ backgroundColor: '#E6E6E6' }}
                >
                    {
                        bannerData?.images?.map(({ src, type, href } = {}) => (
                            <div
                                className="banner-top-item"
                                style={{
                                    backgroundImage: `url(${src})`,
                                    backgroundSize: "100% 100%",
                                }}
                            >
                            </div>
                        ))
                    }
                </Carousel>
            </div >
        )
    }
}
