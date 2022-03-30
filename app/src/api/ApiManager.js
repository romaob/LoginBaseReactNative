const manager = {
    //Values definition
    API_URL: 'localhost:3000',

    //Routes definition
    routes: {
        login: '/login',
        users: '/users',        
    },

    //Methods accepted by the API
    methods: {
        getUsers: () => {
            return apiFetch(manager.routes.users)            
        },

        postLogin: (email, password) => {
            let body = {email, password}
            return apiFetch(manager.routes.login, 'POST',{},body)                
        }
    },

    //User session information
    session: {

    }

}

//Main fetch function
const apiFetch = (route, method, headers, body, expected) => {
    return new Promise((resolve, reject) => {
        let url = manager.API_URL + route
        let expectedStatus = expected ? expected : 200

        let parameters = {
            method: method ? method : 'GET',
            headers: {
                //default api headers
                ...headers
            },            
        }        
        if(body) parameters.body = body
        
        fetch(url, parameters).then(res => {
            if(res.status !== expectedStatus) return reject(res)
            return resolve(res)
        }).catch(e => {
            return reject(e)
        })
        
    })
    

}

export default manager;