const axios = require('axios');

/**
 * Sends a structured list of jobs to a Discord channel via Webhook.
 * @param {Array} jobs - List of filtered job objects.
 */
async function sendNotification(jobs) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('Missing DISCORD_WEBHOOK_URL environment variable.');
  }

  // Grouping jobs into a clean layout
  const embeds = jobs.slice(0, 10).map(job => ({
    title: `💼 ${job.title}`,
    description: `**Company:** ${job.company}\n**Location:** ${job.location}\n**Stack:** ${job.techStack.join(', ')}`,
    url: job.url,
    color: 3447003, // Clean blue color code
    timestamp: new Date().toISOString()
  }));

  const payload = {
    content: `📢 **Daily Job Pulse Report**\nFound **${jobs.length}** new opportunities matching your criteria!`,
    embeds: embeds
  };

  try {
    await axios.post(webhookUrl, payload);
    console.log('✅ Notification payload successfully dispatched to Discord.');
  } catch (error) {
    console.error('❌ Failed to send Discord notification:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { sendNotification };
