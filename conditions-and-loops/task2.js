let averageGrade = 57;

function studentAssessment (s) {
    let result;
    
    switch(true) {
        case s < 60 && s > 0:
            result = `Незадовільно`
            break;
        case s >= 60 && s <= 70:
            result = `Задовільно`
            break;
        case s >= 71 && s <= 80:
            result = `Добре`
            break;
        case s >= 81 && s <= 90:
            result = `Дуже добре`
            break;
        case s >= 91 && s <= 100:
            result = `Відмінно`
            break;
        default:
            result = `Помилка`
            break;
    }

    return console.log(`${result}, ${result !== 'Помилка' ? `бал студента ${s}` : `оцiнки ${s} не може бути`}`);
}

studentAssessment(averageGrade);
studentAssessment(61);
studentAssessment(71);
studentAssessment(81);
studentAssessment(95);
studentAssessment(505);
studentAssessment(-2);