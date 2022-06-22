const app = require('./app');
const { PORT } = require('./helpers/env');

app.use(require('./routes/auth.route'));
app.use(require('./routes/user.router'));
app.use(require('./routes/experience.route'));
app.use(require('./routes/portofolio.route'));
app.use(require('./routes/skill.route'));

// set port or using default port, listen for requests
const port = PORT;
app.listen(port, () => console.log(`Server running at port ${port}`));
