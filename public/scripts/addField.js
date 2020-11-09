// Procurar o botao 
    document.querySelector("#add-time")
    .addEventListener('click',cloneField)
    //quando clicar no botao


//executar uma ação
   function cloneField(){
    //duplicar os campos. qual campo?
    const newFieldContainer=document.querySelector('.schedule-item').cloneNode(true)//boolean: true/false
    
    //pegar os campos . que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    //colocar na pagina: onde ??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
} 
    