const subjects = [
    "Química",
    "Artes",
    "Música",
    "História",
    "Biologia",
    "Educação Física",
    "Física",
    "Geografia",
    "Matemática",
    "Linguagens",
];

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

function getSubject(subject) {
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":");
    return Number((hour * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}