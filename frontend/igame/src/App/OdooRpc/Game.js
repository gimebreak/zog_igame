import Models from './OdooRpc';
export default class Game extends Models {
    constructor(...args){
        super(...args);
        this.model='og.igame';
    }
    /*
    参数： 无
    返回值： {[]}
     */
    get_users(){                    //获取所有用户
        this.exec('get_users',{},[]);
    }
    /*
     */
    register_game(...data){         //赛队报名
        this.exec('register_game',{},...data);
    }
    search2(){                      //查找所有比赛，这个方法现在没有用到
        this.exec('search2',{},[]);
    }
    search_user_match(){            //查找所有比赛，辨别用户是否参与此比赛
        this.exec('search_user_match',{},[]);
    }
    search_own_match(){             //根据用户ID查找用户参与的所有比赛
        this.exec('search_own_match',{},[]);
    }

    search_round_details(...data){         //根据gameID查轮次详细信息
        this.exec('search_round_details',{},...data);
        /**
         * params:gameId
         * return:[
                {id:1, begintime:'2018-07-07 10:00:00', endtime:'2018-07-07 11:00:00', course:'排位赛第一轮'},
                {id:2, begintime:'2018-07-07 11:15:00', endtime:'2018-07-07 12:15:00', course:'排位赛第二轮'}
            ]
         * 
         */
    }
    

}