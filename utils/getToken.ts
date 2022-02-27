export function getToken(){
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token')
}