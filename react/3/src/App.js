import { useState } from 'react';
import './App.css';
import {Content,NavList,LeftMenu} from './view/page';
function App() {
  const text=[
    '每只蚂蚁 都有眼睛鼻子',
    '它美不美丽 偏差有没有一毫厘',
    '有何关系',
    '每一个人 伤心了就哭泣',
    '饿了就要吃 相差大不过天地',
    '有何刺激',
    '有太多太多魔力 太少道理',

    '太多太多游戏 只是为了好奇',
    '还有什么值得 歇斯底里',
    '对什么东西 死心塌地',
    '一个一个偶像 都不外如此',
    '沉迷过的偶像 一个个消失',
    '谁曾伤天害理 谁又是上帝',
    '我们在等待 什么奇迹',
    '最后剩下自己 舍不得挑剔',
    '最后对着自己 也不大看得起',
    '谁给我全世界 我都会怀疑',
    '心花怒放',
    '却开到荼蘼'
  ]
  const NavData=['gitHub','blog',]
  const [val,setVal]=useState('')
  const changVal=(value)=>{
    setVal((value === 'colse'?'':'colse'))
  }
  return (
    <div>
      <NavList NavData={NavData}></NavList>
      <Content>
        <div className='page'>
          <div className='title'>
            开到荼蘼
          </div>
          <div className='content'>
            {text.map((item,ind)=>(
              <p key={ind} title='点击听歌♪(´▽｀)'
              dangerouslySetInnerHTML={{__html:`<a href="https://music.163.com/#/song?id=299190"> ${item}</a>`}}></p>
            )
            )}
          </div>
        </div>
      </Content>
      <LeftMenu onClick={changVal}></LeftMenu>
    </div>
  );
}

export default App;
