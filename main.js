// end point https://reqres.in/api/users

const getUser = ()=>{
    return new Promise((resolve, reject)=>{
        $.getJSON("https://reqres.in/api/users", (data)=>{
    const User = data.data;
    resolve(User)
    }).fail((err)=>{
        reject(err)
    })
    
    })
}

const createUser=(User)=>{
    return `<div class="col-6 col-sm-4 col-md-4 col-xl-3 my-1">
                <div class="card p-2 h-100 text-wrap" style="width: auto;">
                    <img src="${User.avatar}" class="card-img-top" alt="user-image" style="width: 75px;>
                    <div class="card-body d-flex align-items-end">
                      <h6 class="card-title text-capitalize">${User.first_name} ${User.last_name}</h6>
                      <h8>Email: <span style="font-weight: normal;">${User.email}</span></h8>
                      <p style="text-align: end;"><strong>${User.id}</strong></p>
                    </div>
                  </div>
            </div>`;
}

$( async function () {
    const Users = await getUser();

    Users.forEach( (User) => {
        const UserHTML= createUser(User)
        $("#emp-container").append(UserHTML)        
    });
    
})
