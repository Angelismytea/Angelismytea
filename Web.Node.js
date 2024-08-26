const express = require('express');
const bodyParser = require('body-parser');
const { WebhookEvent } = require('@octokit/webhooks');
 
const app = express();
app.use(bodyParser.json());
 
app.post('/github-webhook', (req, res) => {
  const event = new WebhookEvent(req.body);
 
  if (event.name === 'pull_request') {
    const action = event.payload.action;
    if (action === 'opened' || action === 'synchronize') {
      // 这里可以添加你的自定义逻辑，比如运行CI/CD流程
    }
  }
 
  res.status(200).send('OK');
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
