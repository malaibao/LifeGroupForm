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
        problem: '赛车',
        areaLeader: '张洁慈区长',
        submittedOn: Date.now()
    },

]

var areaLeaderData = [
    {   
        areaLeader: '张洁慈长老',
        cellGroupLeader:'黄惠香'
    },
    {   
        areaLeader: '张洁慈长老',
        cellGroupLeader:'黄仁意'
    },
    {   
        areaLeader: '张洁慈长老',
        cellGroupLeader:'邬忠源'
    },
    {   
        areaLeader: '张洁慈长老',
        cellGroupLeader:'杨意聪'
    },
    {   
        areaLeader: '张洁慈长老',
        cellGroupLeader:'周素珍'
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
        cellGroupLeader:'刘珮珊'
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
        cellGroupLeader:'洪子威'
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
        cellGroupLeader:'黄健光'
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
        areaLeader: '罗威玲长老',
        cellGroupLeader:'黄运梅'
    },
    {   
        areaLeader: '罗威玲长老',
        cellGroupLeader:'李晓薇'
    },
    {   
        areaLeader: '罗威玲长老',
        cellGroupLeader:'李燕玉'
    },
    {   
        areaLeader: '罗威玲长老',
        cellGroupLeader:'邱玉莲'
    },
    {   
        areaLeader: '罗威玲长老',
        cellGroupLeader:'沈玉珠'
    },
    {   
        areaLeader: '罗威玲长老',
        cellGroupLeader:'佘慧珍'
    },
    {   
        areaLeader: '罗凯伦长老',
        cellGroupLeader:'韩素贞'
    },
    {   
        areaLeader: '罗凯伦长老',
        cellGroupLeader:'李玉玲'
    },
    {   
        areaLeader: '罗凯伦长老',
        cellGroupLeader:'练秋娥'
    },
    {   
        areaLeader: '罗凯伦长老',
        cellGroupLeader:'邬菊玲'
    },
    {   
        areaLeader: '罗凯伦长老',
        cellGroupLeader:'谢美玲'
    },
    {   
        areaLeader: '罗凯伦长老',
        cellGroupLeader:'钟惠梅'
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

