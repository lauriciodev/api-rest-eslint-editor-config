import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log("servidor iniciado");
  console.log(`http://localhost:${port}`);
});
