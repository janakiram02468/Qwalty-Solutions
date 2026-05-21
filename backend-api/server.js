import "dotenv/config";
import app from "./app.js";
import { sequelize } from "./src/models/index.js";

const PORT = Number(process.env.PORT) || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connection established.");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Unable to start server:", err);
    process.exit(1);
  }
}

start();
