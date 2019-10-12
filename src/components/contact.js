import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl'
import me from '../profilepic.png'
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Amritpal Singh</h2>
                        <img
                            src={me}
                            alt="avatar"
                            style={{ height: '250px', fontFamily: 'Indie Flower' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> Full Stack Developer with experience building web applications. With experience using frontend and backend technologies
                            such as  Ruby on Rails, JavaScript, and React and a background in Electrical Engineering and Tax Accounting. As a Flatiron
                             School Software Engineering graduate, I am excited to learn more about the tech field and utilize the skills I learned to create a positive impact.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr />
                        <div className="contact-list">

                            <List>
                                <ListItem>
                                    <ListItemContent>Amritpal Singh</ListItemContent>
                                </ListItem>
                            </List>

                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;