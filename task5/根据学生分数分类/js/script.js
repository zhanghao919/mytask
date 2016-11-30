var score = prompt("请输入你的分数");
function getLevel(score){
    if(score<0 || score>100 || isNaN(score) || score==null ){
        alert('请输入正确的分数');
    }
    else if(score==100){
        level = 1;
    }else{
        level = 10 - Math.floor(score/10);
    }
    console.log('根据您的分数你是'+level+'等生');
}
getLevel(score);