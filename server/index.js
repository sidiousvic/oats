require("dotenv").config();
const app = require("./server");
const PORT = 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
