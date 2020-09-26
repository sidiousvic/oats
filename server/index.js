require("dotenv").config();
const app = require("./server");
const PORT = 9990;

app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚢💨`));
