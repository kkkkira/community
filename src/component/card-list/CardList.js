import React, {Component} from 'react';
import { Card } from 'antd';
import { formatTime } from 'src/utils/utils';
import {Link, NavLink} from 'react-router-dom'

import './index.less';
const { Meta } = Card;

const type = ['攻略','评测','资讯','视频'];

class CardList extends Component {
    render() {
        const listData = this.props.listData;
        return (
            <div>
                {
                    listData.map((data) =>
                        <Link key={data.id} to={'/article/' + data.id}>
                            <Card
                                className="article-card"
                                title = {data.title}
                                cover = { <img src={data.img} /> }
                            >
                                <Meta
                                    description = {data.intro}
                                />
                                <div className="article-card-footer">
                                    <span className={'article-card-cate card-cate-'+ data.type}>{type[data.type-1]}</span>
                                    <span className="article-card-time">{ formatTime(data.push_time, 'yyyy-MM-dd hh:mm:ss') }</span>
                                </div>
                            </Card>
                        </Link>
                    )
                }
            </div>
        )
    }
}

export default CardList;


