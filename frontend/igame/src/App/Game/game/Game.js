import React, { Component } from 'react';
import settings from '../game/settings';
import Table from './Table';
import Bid from './BidPanel'
import Result from '../Point/Result'

/**
 * Game  是一局比赛，涉及到了比赛者，以及和比赛相关的其他信息。重点在于比赛。
 * Table 是一桌游戏的界面：重点在于 一桌
 */

class Game extends Component {
    state={
        scene:0
    }
    constructor(props){
        /**
         * 属性列表：
         *  屏幕大小
         * 
         */
        super(props);
        this.width = window.screen.width;
        this.height = window.screen.height;
        console.log('width:'+this.width)
        console.log('height:'+this.height)
        if(this.width < 400) settings.scale = 0.5;
    }
    toResult=()=>{
        this.setState({
            scene:1
        })
    }
    componentDidMount(){
        this.props.setHiddenState(true);
    }
    render(){
        return(
            <div>
                {this.state.scene===0?
                <Table toResult={this.toResult}>
                    <Bid />
                </Table>
                :null}
                {this.state.scene===1?
                <Result />
                :null
                }
            </div>
            
        );
    }
}

//export default Table
export default Game