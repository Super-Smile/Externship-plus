import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Header from "../layout/header";

class StudentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
    render() {
        return (
            <>
            <Header role="Student."/>
            <MDBContainer className="mt-5 shadow-lg py-5">
                <MDBRow>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <p className="h4 text-center mb-4">Student Register</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Your name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Phone number
                            </label>
                            <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
                            <br />
                            {/* <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Your message
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" /> */}
                            <div className="text-center mt-4">
                                <button type="button" className="btn btn-primary">
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6" className="text-center">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"></img>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </>
        );
    }
} 

export default StudentPage;
