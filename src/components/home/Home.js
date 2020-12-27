import React, {Component} from "react";
import {Card, CardContent, Collapse, Grid, IconButton, Typography} from "@material-ui/core";
import {Email, GitHub, LinkedIn, YouTube} from "@material-ui/icons";
import pfp from "./images/pfp.jpg";
import "./Home.css";


const styles = {

    largeIcon: {
        width: 60,
        height: 60,
        color: "primary"
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: "50%",
        border: "7px solid #30476b"
    },
    header: {
        paddingTop: 10,
    },
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {collapsed: false};
    }

    componentDidMount() {
        this.setState({collapsed: true});
    }

    render() {
        const collapsed = this.state.collapsed;
        return (
            <div className={"home"}>
                <Collapse in={collapsed} timeout={2000}>
                    <div className={"content"}>
                        <Card>
                            <Typography variant={"h2"} style={styles.header}> Grant Perkins </Typography>
                            <CardContent>
                                <img src={pfp} alt={"me"} style={styles.image}/>
                                <Grid container spacing={2} direction={"row"} justify={"center"}>
                                    <Grid item>
                                        <IconButton href={"https://github.com/GrantPerkins"}>
                                            <GitHub style={styles.largeIcon}/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton href={"https://www.linkedin.com/in/grant-perkins-35ba00170/"}>
                                            <LinkedIn style={styles.largeIcon}/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton href={"mailto:gcperkins@wpi.edu"}>
                                            <Email style={styles.largeIcon}/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton href={"https://www.youtube.com/channel/UCbBPHIVcsizYd1IPcwIbL5g"}>
                                            <YouTube style={styles.largeIcon}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default Home;