import React from 'react';
import axios from 'axios';
import "../sendMail"

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-12 text-center py-4 my-4">
                                <h1>Have Some Question?</h1>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md 5 d-flex justify-content-center">
                                <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                            </div>
                            <div className="col-md-6">
                                <form id="contact-form" onSubmit={this.submitEmail.bind(this)} method="POST">
                                    <div className="mb-3">
                                        <label htmlFor="exampleForm" className="form-label">Full Name</label>
                                        <input name="name" type="text" className="form-control" id="exampleForm" placeholder="John Smith" onChange={this.onNameChange.bind(this)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={this.onEmailChange.bind(this)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                        <textarea name="comment" className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={this.onMsgChange.bind(this)}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-dark">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;