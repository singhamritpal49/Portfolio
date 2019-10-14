import React, { Component } from 'react';
import { Cell, Grid, Textfield, Button } from 'react-mdl'
import * as emailjs from 'emailjs-com'
// import {  Route } from 'react-router-dom'



// import me from '../profilepic.png'
class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { name, email, message } = this.state
        // let templateParams = {
        //     from_name: email,name,
        //     to_name: 'Amritpal',
        //     message_html: message,
        //    }
        //    emailjs.send(
        //     'gmail',
        //     'template_mxasHcu2',
        //      templateParams,
        //     'user_enegwgpZegOB1rxDXhL4h'
        //    )
           emailjs.send(
            'gmail',
            'template_mxasHcu2',
            {"from_name": name ,"to_name":"Amritpal","from_email": email,"message_html": message},
            'user_enegwgpZegOB1rxDXhL4h'
           )
           this.resetForm()
            // alert("Message Sent")
           this.props.history.push('/sent');

    }

    
    resetForm() {
        this.setState({
          name: '',
          email: '',
          message: ''
        })
      }

    render() {
        // console.log(this.state)
        return (
            <div className="contact-body">
                <Grid className="contact-grid">

                    <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            {/* <List> */}
                            {/* <ListItem> */}
                            {/* <ListItemContent icon="person">Amritpal Singh</ListItemContent> */}
                            {/* <p>HELLO</p> */}
                            {/* </ListItem> */}
                            {/* </List> */}
                            <div>
                                <form >
                                    <Textfield
                                        onChange={(event) => { this.handleNameChange(event) }}
                                        label="Name"
                                        style={{ width: '200px' }}
                                    // for="name"
                                    />
                                    <br />
                                    <Textfield
                                        onChange={(event) => { this.handleEmailChange(event) }}
                                        label="Email"
                                        type="email"
                                        style={{ width: '200px' }}
                                    // for="email"
                                    />
                                    <br />
                                    <Textfield
                                        onChange={(event) => { this.handleMessageChange(event) }}
                                        label="Message"
                                        rows={3}
                                        style={{ width: '200px' }}
                                    // for="message"
                                    />
                                    <br />
                                    <Button onClick={(e) => { this.handleSubmit(e) }} primary>Submit</Button>
                                    {/* <Button  primary>Submit</Button> */}
                                </form>
                            </div>




                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;