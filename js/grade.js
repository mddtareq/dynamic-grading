const banglaCalculate=document.getElementById("bangla-calculate");
const englishCalculate=document.getElementById("english-calculate");
const ictCalculate=document.getElementById("ict-calculate");
const totalCalculate=document.getElementById("total-calculate");

banglaCalculate.addEventListener('click',function(){
    const banglaMark = document.getElementById('bangla-mark').value;
    const banglaMarkNumber = parseFloat(banglaMark);
    totalMark(banglaMarkNumber);
    let banglaGrade=numberToGrade(banglaMarkNumber);
    document.getElementById('bangla-grade').innerText=banglaGrade;
});
englishCalculate.addEventListener('click',function(){
    const englishMark = document.getElementById('english-mark').value;
    const englishMarkNumber = parseFloat(englishMark);
    totalMark(englishMarkNumber);
    let englishGrade=numberToGrade(englishMarkNumber);
    document.getElementById('english-grade').innerText=englishGrade;
});
ictCalculate.addEventListener('click',function(){
    const ictMark = document.getElementById('ict-mark').value;
    const ictMarkNumber = parseFloat(ictMark);
    totalMark(ictMarkNumber);
    let ictGrade=numberToGrade(ictMarkNumber);
    document.getElementById('ict-grade').innerText=ictGrade;
});
totalCalculate.addEventListener('click',function(){
    const totalMark=parseFloat(document.getElementById("total").innerText);
    const averageMark=Math.ceil(totalMark/3);
    const grade=overallGrade(averageMark);
    document.getElementById('total-grade').innerText=grade;
});

function totalMark(subjectNumber){
    const addTotal=parseFloat(document.getElementById("total").innerText);
    if(subjectNumber>=0&&subjectNumber<=100){
    const total=addTotal+subjectNumber;
    document.getElementById("total").innerText=total;}
}

function numberToGrade(mark){
    if(0<=mark<=100){
        if((0<=mark&&mark<=32)){
            return "F";
        }
        else if(33<=mark&&mark<=39){
            return "D";
        }
        else if(40<=mark&&mark<=49){
            return "c";
        }
        else if(50<=mark&&mark<=59){
            return "B";
        }
        else if(60<=mark&&mark<=69){
            return "A-";
        }
        else if(70<=mark&&mark<=79){
            return "A";
        }
        else if(80<=mark&&mark<=100){
            return "A+";
        }
    }
    return "F";
}
function overallGrade(averageNumber){
    const banglaGradeSign=document.getElementById('bangla-grade').innerText;
    const englishGradeSign=document.getElementById('english-grade').innerText;
    const ictGradeSign=document.getElementById('ict-grade').innerText;
    if(banglaGradeSign!="F" && englishGradeSign!="F" && ictGradeSign!="F"){
        const total= numberToGrade(averageNumber);
        return total;
    }
    else{
        return "F";
    }
}