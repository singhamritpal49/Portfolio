import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Button, CardActions, Tabs, Tab } from 'react-mdl'
// CardMenu, IconButton, 
class Project extends Component {
    state = {
        activeTab: 0
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>Law Enforcement System</CardTitle>
                    <CardText>
                        Web Application that provides users an ability to write citation
                        
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/law-enforcement-system" colored>GitHub Backend</Button>
                        <Button href="https://github.com/singhamritpal49/law-enforcement-system-FrontEnd" colored>GitHub Frontend</Button>
                        <Button href="https://youtu.be/GiJKKVNprAc" colored>Demo </Button>
                    </CardActions>
                    {/* <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/funciones-en-javascript-t1.png) center / cover' }}>GregsList</CardTitle>
                    <CardText>
                        Web Application which allows users an ability to list, buy and sell items
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/GregsList" colored>GitHub Backend</Button>
                        <Button href="https://github.com/singhamritpal49/GregsList/tree/master/backend" colored>GitHub Frontend</Button>
                        <Button href="https://www.youtube.com/watch?v=IWpFfEuS1GQ&feature=youtu.be" colored>Demo </Button>
                    </CardActions>
                    {/* <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3876/1*uKibwseMgeqaYahlvv-BfA.png) center / cover' }}>ChatItUp</CardTitle>
                    <CardText>
                    Web Application that allows users to send messages to other users
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/ChatItUp" colored>GitHub</Button>
                        <Button href="https://www.youtube.com/watch?v=uyM3gMY0EbQ&feature=youtu.be"colored>Demo</Button>
                    </CardActions>
                    {/* <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://learnworthy.net/wp-content/uploads/2019/08/A-Complete-Guide-to-the-Ruby-Programming-World.png) center / cover' }}>Appointments</CardTitle>
                    <CardText>
                        Application that allows users to create appointments
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/Appointments-CLI/tree/Amrit-EDTING" colored>GitHub</Button>
                        <Button href="https://www.youtube.com/watch?v=eXLlWQTAuDI&feature=youtu.be"colored>Demo</Button>
                    </CardActions>
                    {/* <CardMenu style={{ color: '#fff' }}> */}
                        {/* <IconButton name="share" />
                    </CardMenu> */}
                </Card>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <Card shadow={5} style={{ width: '450px', margin: 'auto' }} >
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg) center / cover' }}>Task Manager (BackEnd Server) </CardTitle>
                    <CardText>
                        Node.js Application That allows users to create tasks
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/singhamritpal49/task-manager" colored>GitHub</Button>
                        
                    </CardActions>
                    {/* <CardMenu style={{ color: '#fff' }}> */}
                        {/* <IconButton name="share" />
                    </CardMenu> */}
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
                    <Tab>Node</Tab>


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