function users() {
  get = function () {
    return axios.get("http://localhost:3000/users");
  };

  post = function (formname, formcity) {
    return axios.post("http://localhost:3000/addUser", {
       name: formname,
       city: formcity
    })
  };

  bla = function (name) {
    return axios.delete("http://localhost:3000/deleteUser", {
      data: name
    })
  };

  put = function(index,nameUp,cityUp) {
    console.log(index)
    console.log(nameUp)
    console.log(cityUp)
    return axios.put(`http://localhost:3000/updateUser/${index}`, {
      name : nameUp,
      city : cityUp  
    })
  }

 
  

  return {
    get: get,
    post: post,
    bla: bla,
    put: put
  };
}
