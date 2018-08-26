let app = require("express")();
app.get("/", (req, res) => {
	res.send("ada lovelace.");
});
app.listen(4000);
