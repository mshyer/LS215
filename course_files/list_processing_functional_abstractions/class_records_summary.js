'use strict';
const EXAM_WEIGHT = .65;
const EXERCISE_WEIGHT = .35;
const LETTER_GRADES = {
  A: 93,
  B: 85,
  C: 77,
  D: 69,
  E: 60,
  F: 0,
};

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let gradesArray = generateGradesArray(scoreData);
  let examDataArray = generateExamDataArray(scoreData);
  return {
    studentGrades: gradesArray,
    exams: examDataArray,
  };
}

function generateGradesArray(scores) {
  let gpas = [];
  scores.forEach(obj => {
    gpas.push(GPA(obj['exams'], obj['exercises']));
  });
  return gpas.map(gpa => toGPAString(gpa));
}

function GPA(examScores, exerciseScores) {
  let examAverage = (examScores.reduce((acc, score) => {
    return acc + score;
  }) / examScores.length);
  let exerciseScore = exerciseScores.reduce((acc, score) => acc + score);
  return (Math.round(
    (examAverage * EXAM_WEIGHT) + (exerciseScore * EXERCISE_WEIGHT)
  ));
}

function toGPAString(gpa) {
  let letterGrade;
  let entries = Object.entries(LETTER_GRADES);
  for (let idx = 0; idx < entries.length; idx += 1) {
    if (entries[idx][1] <= gpa) {
      letterGrade = entries[idx][0];
      break;
    }
  }
  return `${gpa} (${letterGrade})`;
}

function generateExamDataArray(data) {
  let scoreData = [];
  data.forEach(obj => scoreData.push(obj['exams']));
  let examData = [];
  const NUM_EXAMS = scoreData[0].length;
  // for loop to the NUM EXAMS
  //   append { examAvg(data, idx) examMin(data, idx), examMax(data, idx) }
  //     to the examData array
  for (let idx = 0; idx < NUM_EXAMS; idx += 1) {
    let obj = {
      average: examAvg(scoreData, idx),
      minimum: examMin(scoreData, idx),
      maximum: examMax(scoreData, idx),
    };
    examData.push(obj);
  }
  // for each idx reduce the exam data to the average of one exam, and push that
  //   to the exam scores array
  // let examObj = {};
  //for (let idx = 0; idx < examData.length; idx += 1) {
  //  let sum = 0;
  //  examData.forEach(array => sum += array[idx]);
  //  examObj
  return examData;
}

function examAvg(data, examIdx) {
  const NUM_STUDENTS = data.length;
  //for (let idx = 0; idx < NUM_EXAMS; idx += 1) {
  let examAverage = (data.reduce((acc, scores) => {
    return acc + scores[examIdx];
  }, 0) / NUM_STUDENTS);
  return examAverage;
}

function examMin(data, examIdx) {
  let examScores = data.flatMap(array => array[examIdx]);
  return Math.min(...examScores);
}

function examMax(data, examIdx) {
  let examScores = data.flatMap(array => array[examIdx]);
  return Math.max(...examScores);
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));
