import React, { Fragment } from 'react'
import { Row, Col, Breadcrumb, Icon, Avatar } from 'antd'
import Header from '../components/Header'
import Author from '../components/author'
import Advertise from '../components/advertisement'
import Footer from '../components/footer'
import '../style/detail.css'

const Detail = () => {
    let markdown = '# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        '\`console.log(111)\` \n\n' +
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n' +
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '``` var a=11; ```'
    
    return (
        <Fragment>
            <Head>
                <title>博客详情页</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                //!两栏布局，左侧
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <a href="/">首页</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    视频列表
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    XXX
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div>
                        <div className="detailed-title">
                            React实战视频教程-小新的蜡笔Blog开发(更新08集)
                        </div>

                        <div className="list-icon center">
                            <span><Icon type="calendar" /> 2019-06-28</span>
                            <span><Icon type="folder" /> 视频教程</span>
                            <span><Icon type="fire" /> 5498人</span>
                        </div>

                        <div className="detailed-content" >
                            详细内容，以后慢慢编写
                        </div>
                    </div>
                </Col>

                //!两栏布局，右侧
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Avatar />
                    <Author/>
                    <Advertise />
                </Col>
            </Row>
            <Footer />
        </Fragment>
    )

}

export default Detail;
