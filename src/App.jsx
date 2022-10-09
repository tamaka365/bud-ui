import "./App.css";

import Tree from "./components/tree";

const treeList = [
  {
    title: "最新",
    id: "1",
    children: [
      {
        title: "连接与收藏",
        id: "1-1",
      },
      {
        title: "与我分享",
        id: "1-2",
      },
      {
        title: "加星",
        id: "1-3",
      },
    ],
  },
  {
    title: "我的文件夹",
    id: "2",
    icon: "",
    children: [
      {
        title: "ES6",
        id: "2-1",
      },
      {
        title: "读书笔记",
        id: "2-2",
      },
      {
        title: "小说",
        id: "2-3",
        children: [
          {
            title: "末日诅咒",
            id: "2-3-1",
          },
          {
            title: "我的 WIFI 连三界",
            id: "2-3-2",
          },
          {
            title: "默认文件夹",
            id: "2-3-3",
          },
        ],
      },
      {
        title: "默认文件夹",
        id: "2-4",
      },
    ],
  },
  {
    title: "回收站",
    id: "3",
  },
];

function App() {
  return (
    <div className="app">
      <div className="header"></div>
      <div className="main">
        <div className="sidebar">
          <Tree list={treeList} onSelect={console.log} />
        </div>
        <div className="article-list">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="article">
          <div className="article-main"></div>
          <div className="article-mulu"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
