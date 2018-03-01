import React, {Component} from 'react';
import {Carousel } from 'antd-mobile'


class Slide extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 150,
        slideIndex: 0
    };
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
            });
        }, 100);
    }
    render() {
        return (
                <Carousel
                    autoplay={true}
                    autoplayInterval="4000"
                    infinite
                    selectedIndex={1}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                key={val}
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>
        );
    }
}

export default Slide;
