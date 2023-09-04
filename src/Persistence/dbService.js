const jsonServer = require('json-server');
const { Request, Response } = require('express'); // Change import statement

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Update to jsonServer.router
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes
server.post('/missions/create', (req, res) => { // Removed type annotations
  const mission = req.body;
  mission.state = 1;
  router.db.get('missions').push(mission).write();
  res.json({ message: 'Mission added successfully', mission });
});

server.get('/missions', (req, res) => { // Removed type annotations
  // Custom logic for fetching active missions
  const missions = router.db.get('missions').filter({ state: '1' }).value();
  res.json(missions);
});

server.put('/missions/:id', (req, res) => { // Removed type annotations
  // Custom logic for updating a mission
  const missionId = req.params.id;
  const updatedMission = req.body;
  router.db.get('missions').find({ id: missionId }).assign(updatedMission).write();
  res.json({ message: 'Mission updated successfully', missionId });
});

server.patch('/missions/:id/delete', (req, res) => { // Removed type annotations
  // Custom logic for soft deleting a mission
  const missionId = req.params.id;
  router.db.get('missions').find({ id: missionId }).assign({ state: '0' }).write();
  res.json({ message: 'Mission soft deleted successfully', missionId });
});

server.listen(3032, () => {
  console.log('JSON Server is running on port 3032');
});
