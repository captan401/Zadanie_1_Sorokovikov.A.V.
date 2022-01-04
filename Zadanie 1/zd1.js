function getStatistics(marks) {
    var Student1 = marks[0].avgMark;
    var Student2 = marks[1].avgMark;
    var avgMarks = (Student1 + Student2) / 2;
    if (Student1 > Student2) {
        return { avgMarks: avgMarks, higMark: marks[0].name, lowMark: marks[1].name };
    }
    else {
        return { avgMarks: avgMarks, higMark: marks[1].name, lowMark: marks[0].name };
    }
}
var testMarks = [{
        name: 'Vasya', avgMark: 3.75
    }, {
        name: 'Lena', avgMark: 4.89
    }];
console.log(getStatistics(testMarks)); //*{avgMark: 4.32, higestMark: 'lena', lowesMark: 'Vasya'}
