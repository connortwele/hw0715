var twoDimArray = [['month', 07],['day', 15], ['year', 2020]];

function attemptOne (uhh) {
    for (var i = 0; i < uhh.length; i++){
        for (var j = 0; j < uhh[i].length; j++){
            console.log(uhh[i][j])
        }
    }
};

attemptOne(twoDimArray)

var threeDimArray = [[[1,2],[3,4]],[[5,6],[7,8]]];

function tooEasy(too,easy){
    if (too > easy){
        return too
    } else {
        return easy
    }
};
console.log(tooEasy(69,420));

function ifYouCheckTheHomeworkLetMeKnowYouSawThis(un,believeable){
    if (un === believeable){
        return 'True value and type aka strict'
    } else if (un == believeable){
        return 'True value but not type'
    } else {
        return 'Not even close, not the same value, not the same type. What are you even doing??'
    }
    
}

console.log(ifYouCheckTheHomeworkLetMeKnowYouSawThis(2,2));
console.log(ifYouCheckTheHomeworkLetMeKnowYouSawThis('yeahyeah','yeahyeah'));
console.log(ifYouCheckTheHomeworkLetMeKnowYouSawThis(5,'5'));
console.log(ifYouCheckTheHomeworkLetMeKnowYouSawThis('.5',2/4));
console.log(ifYouCheckTheHomeworkLetMeKnowYouSawThis('yeah I know', 'this isnt what you asked for'));
console.log(ifYouCheckTheHomeworkLetMeKnowYouSawThis('but I would say I understand the question and what was asked','wouldnt you?'))
