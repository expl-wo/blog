import { Avatar, Divider } from 'antd'
import '../style/author.css'

const Author = () => {
    return (
        <div className="author-div comm-div">
            {/* <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div> */}
            <div> <Avatar size={100} src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3739042935,800919441&fm=26&gp=0.jpg" /></div>
            <div className="author-introduction">
                钱端程序员，专注于WEB和移动前端开发，要做到全栈和构架师。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />
            </div>
        </div>
    )
}

export default Author;