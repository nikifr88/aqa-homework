let averageGrade = 57;

function studentAssessment (s) {
    let result;

    if (s < 60 && s > 0) {
        result = `Незадовільно`
    } else if (s >= 60 && s <= 70) {
        result = `Задовільно`
    } else if (s >= 71 && s <= 80) {
        result = `Добре`
    } else if (s >= 81 && s <= 90) {
        result = `Дуже добре`
    } else if (s >= 91 && s <= 100) {
        result = `Відмінно`
    } else {
        result = `Помилка`
    }
    return console.log(`${result}, ${result !== 'Помилка' ? `бал студента ${s}` : `оцiнки ${s} не може бути`}`)
}

studentAssessment(averageGrade);
studentAssessment(61);
studentAssessment(71);
studentAssessment(81);
studentAssessment(95);
studentAssessment(505);
studentAssessment(-2);