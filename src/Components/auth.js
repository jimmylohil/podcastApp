class auth {
    constructor(){
        this.authenticated = false;
        this.show = false;
    }

    login(callback){
        this.authenticated =true;
        callback();
    }

    logout(){
        this.authenticated =false;
    }
    isLogin(){
        return this.authenticated;
    }

    showPlayer(){
        this.show =true;
    }

    hidePlayer(){
        this.show =false;
    }
    isShow(){
        return this.show;
    }
}
export default new auth();