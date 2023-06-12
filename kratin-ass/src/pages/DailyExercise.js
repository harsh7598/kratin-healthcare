import React from "react";
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
} from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CheckIcon from "@material-ui/icons/Check";

const DailyExercise = () => {
  const workoutPlans = [
    {
      title: "Weight Loss",
      description: "A workout plan focused on burning calories and shedding excess weight.",
      exercises: ["Exercise 1", "Exercise 2", "Exercise 3"],
    },
    {
      title: "Muscle Gain",
      description: "A workout plan designed to build muscle mass and increase strength.",
      exercises: ["Exercise 4", "Exercise 5", "Exercise 6"],
    },
    {
      title: "General Fitness",
      description: "A versatile workout plan for overall fitness and health improvement.",
      exercises: ["Exercise 7", "Exercise 8", "Exercise 9"],
    },
  ];

  const exerciseLibrary = [
    {
      name: "Exercise 1",
      muscleGroups: ["Legs", "Glutes"],
      equipmentNeeded: "Dumbbells",
      difficultyLevel: "Intermediate",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "exercise1.jpg",
      video: "exercise1.mp4",
    },
    {
      name: "Exercise 2",
      muscleGroups: ["Arms", "Shoulders"],
      equipmentNeeded: "Barbell",
      difficultyLevel: "Advanced",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "exercise2.jpg",
      video: "exercise2.mp4",
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

  const trackWorkoutProgress = () => {};

  const scheduleWorkout = () => {};

  const generatePersonalizedRecommendations = () => {};

  const renderWorkoutPlans = () => {
    return workoutPlans.map((plan, index) => (
      <Card key={index} style={{ marginBottom: "1rem", backgroundColor: "#f3f3f3" }}>
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
      <Card key={index} style={{ marginBottom: "1rem", backgroundColor: "#f3f3f3" }}>
        <CardHeader title={exercise.name} style={{ backgroundColor: "#fafafa" }} />
        <CardContent>
          <Typography variant="body1">Muscle Groups: {exercise.muscleGroups.join(", ")}</Typography>
          <Typography variant="body1">Equipment Needed: {exercise.equipmentNeeded}</Typography>
          <Typography variant="body1">Difficulty Level: {exercise.difficultyLevel}</Typography>
          <Typography variant="body1">Instructions: {exercise.instructions}</Typography>
          <img src={exercise.image} alt={exercise.name} style={{ marginBottom: "1rem", maxWidth: "100%" }} />
          <video src={exercise.video} controls style={{ maxWidth: "100%" }} />
        </CardContent>
      </Card>
    ));
  };

  const renderCustomizableWorkouts = () => {
    return customizableWorkouts.map((workout, index) => (
      <Card key={index} style={{ marginBottom: "1rem", backgroundColor: "#f3f3f3" }}>
        <CardHeader title={workout.title} style={{ backgroundColor: "#fafafa" }} />
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
      <Typography variant="h5" style={{ marginBottom: "1rem", color: "#333333" }}>
        Daily Exercise
      </Typography>

      <Tabs value={0} indicatorColor="primary" textColor="primary" style={{ marginBottom: "1rem" }}>
        <Tab label="Workout Plans" />
        <Tab label="Exercise Library" />
        <Tab label="Customizable Workouts" />
      </Tabs>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
            {renderWorkoutPlans()}
          </Paper>
          <Paper hidden={true} style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
            {renderExerciseLibrary()}
          </Paper>
          <Paper hidden={true} style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
            {renderCustomizableWorkouts()}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DailyExercise;
