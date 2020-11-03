
///DADOS
const proffys =[
    {
    name:"Diego Fernandes",
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4 ", 
    whatsapp:"981721081", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    subject:"Quimica",
    cost:"20",
    weekday:[0], 
    time_from:[720],
    time_to:[1220]
    },
    {
    name:"Daniele Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4 ", 
    whatsapp:"981721081", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões"
    ,subject:"Quimica",
    cost:"20",
    weekday:[1], 
    time_from:[720],
    time_to:[1220]
    }  
]

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



function pageLanding(req,res){
    return res.render("index.html")
}
function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html",{proffys,filters,subjects,weekdays})
}
function pageGiveClasses(req,res){
    const data = req.query

   
    //se tiver dados
    const isNotEmpt = Object.keys(data).length >0
    if (isNotEmpt) {

        data.subject =getSubject(data.subject)

        //adicionar date a lista de proffys
        proffys.push(data)

        return res.redirect("/study")

    }
    //se nao adicionar, mostrar a pagina

    return res.render("giv-classes.html",{subjects,weekdays})
}

///SERVIDOR

const express=require ('express')
const server = express()


//configurar nunjucks (TEMPLATE ENGINE)
const nunjucks =require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache: true,

})

server
//configurar arquivos estaticos(css,scripts,imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/giv-classes",pageGiveClasses)

//START SERV
.listen(5500)

