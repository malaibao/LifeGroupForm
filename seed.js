var mongoose = require('mongoose');

var CellGroupFormSubmission = require('./models/cellGroupForm');
var areaLeader = require('./models/areaLeader');

var data = [
    {
        cellGroupDate: new Date(2019, 9, 23),
        leader: '黄惠香',
        numPpl: 20,
        newPpl: 1,
        activity: '小组聚会',
        message: '认识神PPT',
        comment: '感谢神',
        problem: '下雨天',
        areaLeader: '张洁慈区长',
        submittedOn: Date.now()
    },
    {
        cellGroupDate: new Date(2019, 9, 23),
        leader: '周素珍',
        numPpl: 14,
        newPpl: 0,
        activity: '小组聚会',
        message: '认识神PPT',
        comment: '感谢神',
        problem: '赛车',
        areaLeader: '张洁慈区长',
        submittedOn: Date.now()
    },

]

var areaLeaderData = [
    {   
        areaLeader: '张洁慈区长',
        cellGroupLeader:'黄惠香'
    },
    {   
        areaLeader: '张洁慈区长',
        cellGroupLeader:'黄仁意'
    },
    {   
        areaLeader: '张洁慈区长',
        cellGroupLeader:'周素珍'
    },
    {   
        areaLeader: '张洁慈区长',
        cellGroupLeader:'冼镇寰'
    },
    {   
        areaLeader: '张顺恩区长',
        cellGroupLeader:'何道良'
    },
    {   
        areaLeader: '张顺恩区长',
        cellGroupLeader:'李环环'
    },
    {   
        areaLeader: '张顺恩区长',
        cellGroupLeader:'林礼协'
    },
    {   
        areaLeader: '张顺恩区长',
        cellGroupLeader:'张凯淞'
    },
    {   
        areaLeader: '张顺恩区长',
        cellGroupLeader:'赵德福'
    },
    {   
        areaLeader: '萧植仁区长',
        cellGroupLeader:'何紫雄'
    },
    {   
        areaLeader: '萧植仁区长',
        cellGroupLeader:'华曼萍'
    },
    {   
        areaLeader: '萧植仁区长',
        cellGroupLeader:'黄惠和'
    },
    {   
        areaLeader: '萧植仁区长',
        cellGroupLeader:'黄建光'
    },
    {   
        areaLeader: '萧植仁区长',
        cellGroupLeader:'卓玉庭'
    },
    {   
        areaLeader: '黄德惟长老区长',
        cellGroupLeader:'郭桂珠'
    },
    {   
        areaLeader: '黄德惟长老区长',
        cellGroupLeader:'黄健威'
    },
    {   
        areaLeader: '黄德惟长老区长',
        cellGroupLeader:'雷明珠'
    },
    {   
        areaLeader: '黄德惟长老区长',
        cellGroupLeader:'杨善荣'
    },
    {   
        areaLeader: '黄德惟长老区长',
        cellGroupLeader:'杨秀娥'
    },
    {   
        areaLeader: '罗威玲长老区长',
        cellGroupLeader:'黄运梅'
    },
    {   
        areaLeader: '罗威玲长老区长',
        cellGroupLeader:'李晓薇'
    },
    {   
        areaLeader: '罗威玲长老区长',
        cellGroupLeader:'李燕玉'
    },
    {   
        areaLeader: '罗威玲长老区长',
        cellGroupLeader:'邱玉莲'
    },
    {   
        areaLeader: '罗威玲长老区长',
        cellGroupLeader:'佘慧珍'
    },
]

function seedDB(){
    CellGroupFormSubmission.deleteMany({}, function(err){
        if (err){ 
            console.log(err);
        }
        console.log("REMOVED SUBMISSION");
        
        data.forEach( seed => {
            CellGroupFormSubmission.create(seed, (err, newSub)=>{
                if(err)
                    console.log('error adding new submission to database');
                else{
                    console.log('successfully adding new submission to database');
                }
            });
        });
    });

    areaLeader.deleteMany({}, (err) =>{
        if(err)
        ;
        console.log('REMOVED AREALEADERS IN DB');
        areaLeaderData.forEach( seed => {
            areaLeader.create(seed, (err, areaLeaderList)=>{
                if(err)
                    console.log("error adding arealeader list into db");
                else
                    ;
            });
        });
        console.log('successfully adding arealeader list to database');
    });
};

module.exports = seedDB;

