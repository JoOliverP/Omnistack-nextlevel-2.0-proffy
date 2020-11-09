const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugues",
    "Quimica",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado", 
]


//FUNCIONALIDADES
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}
function convertHoursToMinutes(time){
    const [hour,minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}


module.exports ={
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}