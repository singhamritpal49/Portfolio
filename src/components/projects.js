import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions, CardMenu, IconButton, Tabs, Tab } from 'react-mdl'
class Project extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>Law Enforcement System</CardTitle>
                    <CardText>
                        Web Application that provides users an ability to write citation
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/law-enforcement-system" colored>GitHub Backend</Button>
                        <Button href="https://github.com/singhamritpal49/law-enforcement-system-FrontEnd" colored>GitHub Frontend</Button>
                        <Button colored>Demo (Coming Soon) </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://logodix.com/logo/374976.jpg) center / cover' }}>GregsList</CardTitle>
                    <CardText>
                        Web Application which allows users an ability to list, buy and sell items
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/GregsList" colored>GitHub Backend</Button>
                        <Button href="https://github.com/singhamritpal49/GregsList/tree/master/backend" colored>GitHub Frontend</Button>
                        <Button colored>Demo (Coming Soon) </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg) center / cover' }}>Reservations</CardTitle>
                    <CardText>
                        Website that allows users to create Restaurant Reservations
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/reservations" colored>GitHub</Button>
                        <Button colored>Demo (Coming Soon) </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://learnworthy.net/wp-content/uploads/2019/08/A-Complete-Guide-to-the-Ruby-Programming-World.png) center / cover' }}>Appointments</CardTitle>
                    <CardText>
                        Website that allows users to create Restaurant Reservations
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/Appointments-CLI/tree/Amrit-EDTING" colored>GitHub</Button>
                        <Button colored>Demo (Coming Soon) </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        
        
        
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React </Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Rails</Tab>
                    <Tab>Ruby</Tab>

                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()} </div>
                        </Cell>
                    </Grid>

                </section>

            </div>
        );
    }
}

export default Project;