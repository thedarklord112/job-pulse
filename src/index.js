const { fetchJobsFromLinkedIn } = require('./scrapers/linkedin');
const { filterJobs } = require('./filters');
const { sendNotification } = require('./notifier');
const config = require('../config.json');

async function runJobTracker() {
  console.log('🔄 Starting daily job scraping process...');
  
  try {
    // 1. Fetch raw job data
    const rawJobs = await fetchJobsFromLinkedIn(config.keywords);
    console.log(`Fetched ${rawJobs.length} potential jobs.`);

    // 2. Filter jobs based on user preferences
    const matchedJobs = filterJobs(rawJobs, config);
    console.log(`Found ${matchedJobs.length} matching jobs after filtering.`);

    // 3. Send alerts if new jobs are found
    if (matchedJobs.length > 0) {
      await sendNotification(matchedJobs);
      console.log('🚀 Daily alerts sent successfully!');
    } else {
      console.log('✨ No new matching jobs found today.');
    }

  } catch (error) {
    console.error('❌ An error occurred during execution:', error.message);
    process.exit(1);
  }
}

runJobTracker();
