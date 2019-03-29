import React from 'react';
import {Avatar, List} from 'antd';
import {Javascript, Nodejs, Reactjs, Sass} from './images';

const Item = List.Item;
const Meta = Item.Meta;

const data = [
  {
    title: 'React',
    src: Reactjs,
  },
  {
    title: 'Node',
    src: Nodejs,
  },
  {
    title: 'SASS',
    src: Sass,
  },
  {
    title: 'Modern Javascript',
    src: Javascript,
  },
];

function Doing() {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={item => (
        <Item>
          <Meta
            avatar={<Avatar src={item.src}/>}
            title={item.title}
            description='😎'
          />
        </Item>
      )}
    />
  );
}

export default Doing;
