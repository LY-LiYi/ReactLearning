import React from 'react'
//循环渲染列表


function ListItem(props) {
    const item={
        listStyle:'none',
       

    }

    return <li style={item}>{props.value}</li>;
}

function NumberList(props) {

    const numbers = props.numbers;

    //循环遍历出li组件 然后返回
    const listItems = numbers.map((number) => 
        <ListItem key={number.toString()} value={number} />
    )

    return <ul>{listItems}</ul>;
}

class LoopRendring extends React.Component {

    render() {

        const numbers = ['嘻嘻', '哈哈', '为什么', '没有为什么', '好吧'];

        return (
            <div>
                <NumberList numbers={numbers} />
               
            </div>
        );
    }

}


export default LoopRendring;