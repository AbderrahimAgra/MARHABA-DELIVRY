const isAunthenticated = () =>{

  const role = localStorage.getItem('role')

  if(role){
     return role
  }

  return false
}

export default isAunthenticated