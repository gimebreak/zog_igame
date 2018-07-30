export default class Initial{
    constructor(){
        this.topInfo={};
        this.topInfo.scoreSN=0;           //SN方位得分  ** 
        this.topInfo.scoreEW=0;           //EW方位得分  ** 
        this.topInfo.piersSN=0;           //  ** 
        this.topInfo.piersEW=0;           //  ** 
        this.topInfo.claimCount=0;        // claim值

        this.topInfo2={}
        this.topInfo2.contract=null;       //定约
        this.topInfo2.declarer=null;       //庄家方位
        
        this.playerInfo={};
        this.playerInfo.myDirect=null;       //我所在方位
        this.playerInfo.myName=null;        //我的名字
        this.playerInfo.topDirect=null;      //对家
        this.playerInfo.topName=null;        //对家
        this.playerInfo.rightDirect=null;    //右侧
        this.playerInfo.rightName=null;      //右侧
        this.playerInfo.leftDirect=null;     //左侧
        this.playerInfo.leftName=null;       //左侧

        this.playCards={};
        this.playCards.currentCardB=null;   // 我，当前出的牌 
        this.playCards.currentCardT=null;   // 我的对家，当前出的牌 
        this.playCards.currentCardL=null;   // 左侧，当前出的牌 
        this.playCards.currentCardR=null;   // 右侧，当前出的牌 
        this.playCards.currentPiers=[];     // 当前墩 

        this.callCards={};
        this.callCards.dataSource=[{        //叫牌表格
            key:0,
            N:'',
            E:'',
            S:'',
            W:'',
        }];
        this.callCards.columns = [
            { title: 'N', dataIndex: 'N', key: 'N'},
            { title: 'E', dataIndex: 'E', key: 'E'},
            { title: 'S', dataIndex: 'S', key: 'S'},
            { title: 'W', dataIndex: 'W', key: 'W'},];

        this.msg={};
        this.msg.call=false;          //是否处于叫牌状态
        this.msg.play=false;          //是否处于打牌状态
        this.msg.dummy=null;          //明手方位
        this.msg.dummyCardsNum=null;  //我的牌，全数字
        this.msg.callDirect=null;     //当前应该哪个方位叫牌  ** 
        this.msg.currentDirect=null;  //当前应该哪个方位打牌 
    }
}