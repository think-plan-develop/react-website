import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

function ServiceComponent() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          React Material UI Example{" "}
        </Typography>
        <Grid container spacing={3}>
          {data.map((character) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={character.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={character.img_url}
                />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {character.name}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {character.status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default ServiceComponent;