// end point https://reqres.in/api/users

const getEmpleado = ()=>{
    $.getJSON("https://reqres.in/api/users", (data)=>{
        console.log(data.data)
    })
}

getEmpleado()
