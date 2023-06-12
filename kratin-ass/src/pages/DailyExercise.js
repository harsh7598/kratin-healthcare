import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
  CardHeader,
  CardContent,
  Tabs,
  Tab,
  Grid,
  Paper,
  Avatar,
  IconButton,
} from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CheckIcon from "@material-ui/icons/Check";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

const DailyExercise = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const workoutPlans = [
    {
      title: "Weight Loss",
      description:
        "A workout plan focused on burning calories and shedding excess weight.",
      exercises: ["Exercise 1", "Exercise 2", "Exercise 3"],
    },
    {
      title: "Muscle Gain",
      description:
        "A workout plan designed to build muscle mass and increase strength.",
      exercises: ["Exercise 4", "Exercise 5", "Exercise 6"],
    },
    {
      title: "General Fitness",
      description:
        "A versatile workout plan for overall fitness and health improvement.",
      exercises: ["Exercise 7", "Exercise 8", "Exercise 9"],
    },
  ];

  const exerciseLibrary = [
    {
      name: "Exercise 1",

      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-68KzKjJixAjdpEaXh1J-4auaz3p-NqtJXA&usqp=CAU",
      video:
        "https://www.youtube.com/watch?v=8BcPHWGQO44&ab_channel=DartmouthHealth",
    },
    {
      name: "Exercise 2",

      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcmQf2SfRrh1fjo5PQVqk1LXsuf2FhkhAag&usqp=CAU",
      video:
        "https://www.youtube.com/watch?v=8BcPHWGQO44&ab_channel=DartmouthHealth",
    },
  ];

  const customizableWorkouts = [
    {
      title: "My Custom Workout 1",
      exercises: ["Exercise 1", "Exercise 3"],
    },
    {
      title: "My Custom Workout 2",
      exercises: ["Exercise 2", "Exercise 4"],
    },
  ];

  const renderWorkoutPlans = () => {
    return workoutPlans.map((plan, index) => (
      <Card
        key={index}
        style={{ marginBottom: "1rem", backgroundColor: "#f3f3f3" }}
      >
        <CardHeader title={plan.title} style={{ backgroundColor: "#fafafa" }} />
        <CardContent>
          <Typography variant="body1">{plan.description}</Typography>
          <List>
            {plan.exercises.map((exercise, exerciseIndex) => (
              <ListItem key={exerciseIndex}>
                <ListItemIcon>
                  <FitnessCenterIcon style={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary={exercise} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    ));
  };

  const renderExerciseLibrary = () => {
    return exerciseLibrary.map((exercise, index) => (
      <Card
        key={index}
        style={{ marginBottom: "1rem", backgroundColor: "#f3f3f3" }}
      >
        <CardHeader
          title={exercise.name}
          style={{ backgroundColor: "#fafafa" }}
        />
        <CardContent>
          <Typography variant="body1">
            Instructions: {exercise.instructions}
          </Typography>
          <img
            src={exercise.image}
            alt={exercise.name}
            style={{ marginBottom: "1rem" }}
          />
          <div style={{ paddingBottom: "26.25%", height: 0 }}>
            <iframe
              src={exercise.video}
              title={exercise.name}
              allow="autoplay"
              allowFullScreen
              style={{
                position: "absolute",
                width: "50%",
                height: "50%",
              }}
            />
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderCustomizableWorkouts = () => {
    return customizableWorkouts.map((workout, index) => (
      <Card
        key={index}
        style={{ marginBottom: "1rem", backgroundColor: "#f3f3f3" }}
      >
        <CardHeader
          title={workout.title}
          style={{ backgroundColor: "#fafafa" }}
        />
        <CardContent>
          <List>
            {workout.exercises.map((exercise, exerciseIndex) => (
              <ListItem key={exerciseIndex}>
                <ListItemIcon>
                  <CheckIcon style={{ color: "blue" }} />
                </ListItemIcon>
                <ListItemText primary={exercise} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div>
      <Typography
        variant="h5"
        style={{ marginBottom: "1rem", color: "#333333" }}
      >
        Daily Exercise
      </Typography>
      <IconButton
        onClick={() => navigate("/dashboard")}
        style={{ position: "absolute", top: 0, left: 0, margin: "1rem" }}
      >
        <Home />
      </IconButton>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        style={{ marginBottom: "1rem" }}
      >
        <Tab label="Workout Plans" />
        <Tab label="Exercise Library" />
        <Tab label="Customizable Workouts" />
      </Tabs>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            hidden={activeTab !== 0}
            style={{ backgroundColor: "#ffffff", padding: "1rem" }}
          >
            {renderExerciseLibrary()}
          </Paper>
          <Paper
            hidden={activeTab !== 1}
            style={{ backgroundColor: "#ffffff", padding: "1rem" }}
          >
            {renderWorkoutPlans()}
          </Paper>
          <Paper
            hidden={activeTab !== 2}
            style={{ backgroundColor: "#ffffff", padding: "1rem" }}
          >
            {renderCustomizableWorkouts()}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DailyExercise;