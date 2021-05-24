import Button from "@material-ui/core/Button";

export default function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <h2> What would you like to do?</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" color="default">
          Check Weather
        </Button>
        <Button variant="contained" color="default">
          Look For Restaurants
        </Button>
      </div>
    </div>
  );
}
