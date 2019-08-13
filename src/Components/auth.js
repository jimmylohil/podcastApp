import axios from 'axios'

class auth {
    constructor(){
        this.authenticated = false;
        this.show = false;
    }

    login(callback){
        this.authenticated =true;
        callback();
    }

    logout(callback){
        this.authenticated =false;
        callback();
    }

    isLogin(){
        axios.get('http://localhost:8000/api/testToken/?token='.concat(sessionStorage.getItem("JWT")))
        .then(
            (response) => {
                if(response.data.message === "token is valid"){
                    this.authenticated = true;        
            }}
            ) 
            .catch(function(error){
            console.log(error);
            })
            
        return this.authenticated;
    }

    showPlayer(){
        this.show = true;
    }

    hidePlayer(){
        this.show = false;
    }
    isShow(){
        return this.show;
    }
}
export default new auth();