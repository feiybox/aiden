import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Button, Popover} from 'antd';
import names from "./constant";
import {QuestionCircleTwoTone, GithubOutlined, HomeOutlined} from '@ant-design/icons';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>Aiden</div>
                <br/>
                <div>
                    <div id={"desc"}>选择一个你满意的名称 <span/>
                        <Popover placement="left" color={"#282c34"} content={content}>
                            <QuestionCircleTwoTone twoToneColor="orange" className={"question-icon"}/>
                        </Popover>
                    </div>
                    <br/>
                    <div id={"name"} className={"name_content"}>...</div>
                    <br/>
                    <Button id={"choose"} type="primary" size="large" shape="round"
                            onClick={() => choose()}>选择一个</Button>
                    <br/>
                    <br/>
                    <div id={"ph"}></div>
                </div>
                <div className={"App-bottom"}>
                    <br/>
                    <br/>
                    <Button type="link"
                            href="https://github.com/feiybox/aiden/issues/new"><GithubOutlined/>有好的名称或建议，推荐给我吧</Button>
                    <br/>
                    <Button type="link"
                            href="https://feiybox.com"><HomeOutlined/>来我的主页 feiybox.com 一起交流吧</Button>
                </div>
            </header>
        </div>
    );
}

function choose() {
    let t = document.getElementById("name").innerText
    let ns = names.copyWithin(0, 0).filter((value) => {
        return value !== t
    })

    let index = parseInt(Math.random() * ns.length)
    document.getElementById("name").innerText = ns[index]
    document.getElementById("choose").innerText = "重新选择"
    document.getElementById("ph").innerText = "满意么？用它给你的项目 / 产品 / 平台命名吧！"
}

const content = (
    <div className={"App-popover"}>
        <div>选择一个满意名称有什么用？</div>
        <div>在工作中</div>
        <div>会遇到很多项目、平台、产品，都有着有意思的名称</div>
        <div>当我们的平台需要一个有辨识度又很有寓意的名称时</div>
        <div>很多时候</div>
        <div>我们想不到比较好的名称</div>
        <div>那怎么办？</div>
        <div>试一下这儿的名称吧</div>
        <div>可以</div>
        <div>直接使用</div>
        <div>也可以</div>
        <div>给你一些灵感</div>
    </div>
);

export default App;
