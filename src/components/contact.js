import React, { Component } from 'react';
import { Cell, Grid,Textfield, Button } from 'react-mdl'
// import me from '../profilepic.png'
class Contact extends Component {
    state = {

    }
    render() {

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
                                <Textfield
                                    onChange={() => { }}
                                    label="Name"
                                    style={{ width: '200px' }}
                                />
                                <br />
                                <Textfield
                                    onChange={() => { }}
                                    label="Email"
                                    style={{ width: '200px' }}
                                />
                                <br />
                                <Textfield
                                    onChange={() => { }}
                                    label="Message"
                                    rows={3}
                                    style={{ width: '200px' }}
                                />
                                <br/>
                                <Button type="submit" ripple>Submit</Button>

                            </div>




                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;