/**
 * Filters raw job listings based on user configuration criteria.
 * @param {Array} rawJobs - Complete list of fetched jobs from scrapers.
 * @param {Object} config - Configuration object containing keywords and technology preferences.
 * @returns {Array} Filtered list of matching jobs.
 */
function filterJobs(rawJobs, config) {
  const { technologies, workMode, excludeKeywords } = config;

  return rawJobs.filter(job => {
    const jobTitleLower = job.title.toLowerCase();
    const jobDescriptionLower = (job.description || '').toLowerCase();

    // 1. Strict Exclusion Filter (e.g., skip 'Senior' or 'Lead' if specified)
    const containsExcludedKeyword = excludeKeywords.some(keyword => 
      jobTitleLower.includes(keyword.toLowerCase())
    );
    if (containsExcludedKeyword) return false;

    // 2. Tech Stack Matching (Check if at least one tech matches)
    const matchesTech = technologies.some(tech => 
      jobTitleLower.includes(tech.toLowerCase()) || 
      jobDescriptionLower.includes(tech.toLowerCase())
    );
    if (!matchesTech) return false;

    // 3. Remote/Hybrid Filter (Verify work environment match)
    if (workMode && workMode.toLowerCase() !== 'any') {
      const isRemoteRequested = workMode.toLowerCase() === 'remote';
      const isJobRemote = jobTitleLower.includes('remote') || job.location.toLowerCase().includes('remote');
      
      if (isRemoteRequested && !isJobRemote) return false;
    }

    return true;
  });
}

module.exports = { filterJobs };
