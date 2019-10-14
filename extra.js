import React, { Component } from 'react';
import { Cell, Grid,Textfield, Button } from 'react-mdl'


// import me from '../profilepic.png'
class Contact extends Component {
    state = {
            name: '',
            email: '',
            Message: ''
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
        console.log("You Submited")
    }

    render() {
        console.log(this.state)
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
                                <form>
                                <Textfield
                                    onChange={(event) => {this.handleNameChange(event) }}
                                    label="Name"
                                    style={{ width: '200px' }}
                                    // for="name"
                                />
                                <br />
                                <Textfield
                                    onChange={(event) => {this.handleEmailChange(event) }}
                                    label="Email"
                                    style={{ width: '200px' }}
                                    // for="email"
                                />
                                <br />
                                <Textfield
                                    onChange={(event) => {this.handleMessageChange(event) }}
                                    label="Message"
                                    rows={3}
                                    style={{ width: '200px' }}
                                    // for="message"
                                />
                                <br/>
                                <Button onSubmit={(event) => {this.handle(event) }} primary>Submit</Button>
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