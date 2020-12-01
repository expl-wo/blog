import React, { useState } from 'react'
import '../style/header.css'
import { List, Icon } from 'antd'

const MyList = () => {
    const [listDate, setMyList] = useState([
        { title: '50元加入小密圈 易钊带你学一年', context: '1111111。' },
        { title: 'React实战视频教程-Blog开发(更新04集)', context: '22222' },
        { title: 'React服务端渲染框架Next.js入门(共12集)', context: '3333333。' },
        { title: 'React Hooks 免费视频教程(共11集)', context: '444444。' },
    ]);
    return (
        <div className="list">
            <List
                header={<div className="headTitle">最新日志</div>}
                itemLayout="vertical"
                dataSource={listDate}
                renderItem={item => (

                    <List.Item>
                        <div className="list-title">{item.title}</div>
                        <div className="list-icon">
                            <span><Icon type="alert" theme="twoTone" /> 2019-02-19</span>
                            <span><Icon type="account-book" theme="twoTone" /> 视频教程</span>
                            <span><Icon type="bell" theme="twoTone" /> 2019人</span>
                        </div>
                        <div><span className="list-context">{item.context}</span></div>
                    </List.Item>
                )}
            />
        </div>
    )

}
export default MyList;