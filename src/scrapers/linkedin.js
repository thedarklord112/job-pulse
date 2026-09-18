/**
 * Simulates fetching raw job data from LinkedIn.
 * @param {Array<string>} keywords - Search keywords from config.
 * @returns {Promise<Array<Object>>} List of raw job postings.
 */
async function fetchJobsFromLinkedIn(keywords) {
  // Simulating an API delay or network request
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock data representing what a real scraper or API would return
  const mockJobs = [
    {
      title: "Junior Frontend Developer",
      company: "TechNova Solutions",
      location: "Remote, US",
      techStack: ["React", "JavaScript", "CSS"],
      description: "We are looking for a Junior Frontend Developer proficient in React and modern UI development. This is a 100% remote position.",
      url: "https://linkedin.com"
    },
    {
      title: "Senior Fullstack Engineer",
      company: "Enterprise Corp",
      location: "New York, NY",
      techStack: ["Node.js", "TypeScript", "AWS"],
      description: "Looking for a Senior Lead with deep knowledge in TypeScript and cloud infrastructure.",
      url: "https://linkedin.com"
    },
    {
      title: "Software Engineer Intern (Frontend)",
      company: "StartupHub",
      location: "Remote",
      techStack: ["TypeScript", "React"],
      description: "Join our team as an intern! You will learn how to build scalable interfaces using React and TypeScript.",
      url: "https://linkedin.com"
    }
  ];

  // Filters the mock data briefly by checking if title matches any configuration keyword
  return mockJobs.filter(job => 
    keywords.some(keyword => job.title.toLowerCase().includes(keyword.toLowerCase()))
  );
}

module.exports = { fetchJobsFromLinkedIn };
