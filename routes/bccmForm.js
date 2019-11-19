var express                 = require('express'),
    router                  = express.Router(),
    CellGroupFormSubmission = require('../models/cellGroupForm'),
    areaLeaderList          = require('../models/areaLeader'),
    removeOldData		    = require('../removeOldData');

//var al = ['张洁慈区长','张顺恩区长','萧植仁区长','黄德惟长老区长','罗威玲长老区长'];

 router.get('/', (req, res) =>{
     res.render('bccm/form'); 
})

router.post('/', (req, res) =>{
    CellGroupFormSubmission.findOne({'cellGroupDate': req.body.cellGroupDate, 'leader': req.body.leader}, (err,foundSub)=>{
        console.log('foundSub for adding new sub');
        console.log(foundSub);
        if(err){
            res.redirect('back');
        };
        if(foundSub == [] || foundSub == null || foundSub == undefined || foundSub == {} || foundSub == '[]'){
            areaLeaderList.findOne({'cellGroupLeader': req.body.leader}, (err, foundAreaLeader)=>{
                if(err)
                    console.log('error finding areaLeader from DB');
                else{
                    let pivotDate = new Date();
                    // pivotDate = new Date(pivotDate.getFullYear)
                    pivotDate.setMonth(pivotDate.getMonth() - 2);
                    console.log('pivotDate is ' + pivotDate.toLocaleString());
                    console.log('req.body.cellGroupDate is ' + req.body.cellGroupDate);
                    console.log('typeof req.body.cellGroupDate is ' + typeof req.body.cellGroupDate);

                    let d = new Date(req.body.cellGroupDate);
                    console.log('d is ' + d.toISOString());

                    if(d < pivotDate){
                        console.log('d < pivotDate');
                        res.render('bccm/lateSubmission', {msg: '小组聚会日期不在两个月内，请输入最新日期资料!'}); 
                    }else{
                        var newSub = {
                            cellGroupDate: req.body.cellGroupDate,
                            leader: req.body.leader,
                            numPpl: req.body.numPpl,
                            newPpl: req.body.newPpl == ''? 0 : req.body.newPpl,
                            activity: req.body.activity == '其他'? req.body.otherActivity : req.body.activity,
                            message: req.body.message == '其他'? req.body.otherMsg : req.body.message,
                            problem: req.body.problem,
                            areaLeader: foundAreaLeader.areaLeader,
                            submittedOn: Date.now()
                        }
                    
                        CellGroupFormSubmission.create(newSub, (err, newSubmission) => {
                            if(err)
                                console.log('Problem adding new submission in POST');
                            else{
                                res.render('bccm/confirmation', {newSub: newSubmission, msg: '资料已成功输入如下'}); 
                            }
                        });
                    }
                    
                }
                
            })
        }else{ 
            //res.send('You already submitted one copy.');   
            res.render('bccm/doubleSubmission', { leader: req.body.leader, date: req.body.cellGroupDate });    
        }
    })
});

router.get('/bccmTable', (req, res)=>{
    removeOldData();
    var results = {};

    CellGroupFormSubmission.find({}).sort({cellGroupDate : 'desc'}).exec( (err, submissions)=>{
        if(err)
            console.log('Problem loading all submission from db');
        else{
            var results = {};
            var a = 'a', 
                b = 'b', 
                c = 'c', 
                d = 'd', 
                e = 'e';  
            
            var aNum = 0, 
                bNum = 0, 
                cNum = 0, 
                dNum = 0, 
                eNum = 0; 

                results[a] = [];
                results[b] = [];
                results[c] = [];
                results[d] = [];
                results[e] = [];

            submissions.forEach(function(x){
                // console.log('What is inside a ' + x[a]);
               
                // console.log(typeof x);
                if(x.areaLeader.toString() == '张洁慈区长' && aNum < 20){
                    results[a].push(x);
                    aNum++;
                }else if(x.areaLeader == '张顺恩区长' && bNum < 20){
                    results[b].push(x);
                    bNum++;
                }else if(x.areaLeader == '萧植仁区长' && cNum < 20){
                    results[c].push(x);
                    cNum++;
                }else if(x.areaLeader == '黄德惟长老区长' && dNum < 20){
                    results[d].push(x);
                    dNum++;
                }else if(x.areaLeader == '罗威玲长老区长' && eNum < 20){
                    results[e].push(x);
                    eNum++;
                }
            });
            res.render('bccm/bccmTable', {results: results});
        }  
    })
});

router.get('/dataAnalysis', (req, res)=>{
    res.render('bccm/dataAnalysis');
});

router.get('/retrieve/:areaLeader', (req, res)=>{
    removeOldData();
    CellGroupFormSubmission.find({areaLeader: req.params.areaLeader}).sort({cellGroupDate : 'asc'}).exec( (err, foundData)=>{
        if(err){
            res.send('Problem ehhhh');
        }else{
            areaLeaderList.find({areaLeader: req.params.areaLeader}, (err, leadersLists) =>{
                if(err)
                    res.send('Problem retrieving leaders list from area leader.');
                else{
                    res.send({ data:foundData, leadersList: leadersLists });
                }
            })    
        }
    })
    
    // res.send('HELLO12345678');
});

module.exports = router;