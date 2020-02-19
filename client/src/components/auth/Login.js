import React,{Component} from 'react'


export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            errors:{}
        }
  
        this.onChange=this.onChange.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]:e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        const User={
            email:this.state.email,
            password:this.state.password
        }

        console.log("onsubmit login",User)

      
    }

    render(){
        return (

            <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Log In</h1>
                  <p className="lead text-center">Sign in to your DevConnector account</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="email"
                       className="form-control form-control-lg" 
                       value={this.state.email}
                       onChange={this.onChange}
                       placeholder="Email Address" name="email" />
                    </div>
                    <div className="form-group">
                      <input type="password" 
                      className="form-control form-control-lg"
                      value={this.state.password}
                      onChange={this.onChange}
                      placeholder="Password" name="password" />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}