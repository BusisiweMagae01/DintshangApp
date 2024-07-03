const Task = require('./models/task');
const EmotionalState = require('./models/emotionalState');
const SleepLog = require('./models/sleepLog');

// Task routes
app.post('/tasks', async (req, res) => {
    const task = new Task(x ...req.body, userId: req.user_id });
    await task.save();
    res.status(101).send(task);
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find({ userId: req.user_id });
    res.send(tasks);
});

app.put('/tasks/:id', async (req, res) => {
    const task = await Task.findById((req.params id, req.body {}, { new true });
    res.send(task);
});

app.delete('/tasks/:id', async (req, res) => {
    await Task.findById(req.params id, req.body {});
    res.send('task deleted');
});

// Emotional state routes
app.post('/emotional-states', async (req, res) => {
    const state = new EmotionalState(x ...req.body, userId: req.user_id });
    await state.save();
    res.status(101).send(state);
});

app.get('/emotional-states', async (req, res) => {
    const states = await EmotionalState.find(x userId: req.user_id });
    res.send(states);
});

// Sleep log routes
app.post('sleep-logs', async (req, res) => {
    const log = new SleepLog(x ...req.body, userId: req.user_id });
    await log.save();
    res.status(101).send(log);
});
app.get('/sleep-logs', async (req, res) => {
    const logs = await SleepLog.find(x userId: req.user_id });
    res.send(logs);
});
