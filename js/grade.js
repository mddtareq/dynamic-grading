const banglaCalculate=document.getElementById("bangla-calculate");
const englishCalculate=document.getElementById("english-calculate");
const ictCalculate=document.getElementById("ict-calculate");
const totalCalculate=document.getElementById("total-calculate");

banglaCalculate.addEventListener('click',function(){
    const banglaMarkNumber = subjectNumber('bangla-mark');
    let banglaGrade=numberToGrade(banglaMarkNumber);
    document.getElementById('bangla-grade').innerText=banglaGrade;
    totalMark(banglaMarkNumber);
});

englishCalculate.addEventListener('click',function(){
    const englishMarkNumber = subjectNumber('english-mark');
    let englishGrade=numberToGrade(englishMarkNumber);
    document.getElementById('english-grade').innerText=englishGrade;
    totalMark(englishMarkNumber);
});

ictCalculate.addEventListener('click',function(){
    const ictMarkNumber = subjectNumber('ict-mark');
    let ictGrade=numberToGrade(ictMarkNumber);
    document.getElementById('ict-grade').innerText=ictGrade;
    totalMark(ictMarkNumber);
});

totalCalculate.addEventListener('click',function(){
    const totalMark=parseFloat(document.getElementById("total").innerText);
    const averageMark=Math.ceil(totalMark/3);
    const grade=overallGrade(averageMark);
    document.getElementById('total-grade').innerText=grade;
});

function totalMark(subjectNumber){
    const addTotal=parseFloat(document.getElementById("total").innerText);
    if(subjectNumber>=0 && subjectNumber<=100){
    const total=addTotal+subjectNumber;
    document.getElementById("total").innerText=total;}
}

function subjectNumber(subject){
    const mark = document.getElementById(subject).value;
    return parseFloat(mark);
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
            return "C";
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