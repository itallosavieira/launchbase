const groupA = [
    {
        name: 'Itallo',
        grade: 9.8
    },
    {
        name: 'Leticia',
        grade: 10
    },
    {
        name: 'Rafa',
        grade: 2.2
    }
];

const groupB = [
    {
        name: 'Italla',
        grade: 2
    },
    {
        name: 'Leticio',
        grade: 5
    },
    {
        name: 'Rafo',
        grade: 7.2
    }
];

function calculaAverage(group) {
    let gradeOfStudent = 0;

    for (let i = 0; i < group.length; i++) {
        gradeOfStudent += group[i].grade;
    };

    return (gradeOfStudent / group.length).toFixed(2);
};

function sendMessage(group, average) {
    if (average >= 5) {
        console.log(`${group} average: ${average}. Congrats!`);
    } else {
        console.log(`${group} average ${average}. Bad!`)
    }
};

function checkIsApproved(group) {

    for (let student of group) {
        if (student.grade < 5) {
            student.approved = false;
        } else {
            student.approved = true;
        }
    }
};

function printApprovedOrFlunked(group) {
    checkIsApproved(group);

    for (let student of group) {
        if (student.approved) {
            console.log(`${student.name} grade: ${student.grade} > Approved(a)!`)
        } else {
            console.log(`${student.name} grade: ${student.grade} > Flunked(a)!`)
        }
    }
};

const averageA = calculaAverage(groupA);
const averageB = calculaAverage(groupB);

sendMessage('groupA', averageA);
sendMessage('groupB', averageB);

printApprovedOrFlunked(groupA);
printApprovedOrFlunked(groupB);

console.table(groupB);

























