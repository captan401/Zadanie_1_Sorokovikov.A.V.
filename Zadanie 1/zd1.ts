interface Student {
    name : string
    avgMark : number
  }
  
  interface Statistics{
    avgMarks : number
    higMark : string
    lowMark :string
  }
  
  function getStatistics(marks : Student[]): Statistics
  {
    let Student1 = marks[0].avgMark
    let Student2 = marks[1].avgMark
  
    let avgMarks = (Student1+Student2)/2
  
    if (Student1>Student2){
        return  {avgMarks : avgMarks, higMark : marks[0].name, lowMark : marks[1].name}
    }
    else {
      return  {avgMarks : avgMarks, higMark : marks[1].name, lowMark : marks[0].name}
    }
  }
  
  const testMarks = [{
  name : 'Vasya', avgMark : 3.75
  },{
  name : 'Lena', avgMark : 4.89
  }]
  
  console.log(getStatistics(testMarks))//*{avgMark: 4.32, higestMark: 'lena', lowesMark: 'Vasya'}
  