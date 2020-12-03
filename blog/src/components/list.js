import React, { Component } from 'react'
import '../style/header.css'
import { List, Icon } from 'antd'
import axios from 'axios'

export default class MyList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listDate: []
        }
    }

    getArticleList = async () => {
        const promise = new Promise((resolve) => {
            axios.get('http://127.0.0.1:7001/client/getArticleList').then(
                (res) => {
                    console.log('get the data from remote service', res.data.data)
                    this.setState({
                        listDate: [...res.data.data]
                    })
                    console.log(this.state.listDate);
                    resolve(res.data)
                }
            )
        })

        return promise;
    }

    componentDidMount() {
        this.getArticleList();

    }

    render() {
        return (
            <div className="list">
                <List
                    header={<div className="headTitle">最新日志</div>}
                    itemLayout="vertical"
                    dataSource={this.state.listDate}
                    renderItem={item => (

                        <List.Item>
                            <div className="list-title">{item.title}</div>
                            <div className="list-icon">
                                <span><Icon type="calendar" theme="twoTone" />{item.addTime}</span>
                                <span><Icon type="account-book" theme="twoTone" /> {item.typeName}</span>
                                <span><Icon type="bell" theme="twoTone" /> {item.view_count}人</span>
                            </div>
                            <div><span className="list-context">{item.introduction}</span></div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}





// const [listDate, setMyList] = useState([
//     { title: '50元加入小密圈 易钊带你学一年', context: '1111111。' },
//     { title: 'React实战视频教程-Blog开发(更新04集)', context: '22222' },
//     { title: 'React服务端渲染框架Next.js入门(共12集)', context: '3333333。' },
//     { title: 'React Hooks 免费视频教程(共11集)', context: '444444。' },
// ]);
