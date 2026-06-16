const axios = require('axios');
require('dotenv').config();

const GITHUB_API = 'https://api.github.com';

const headers = process.env.GITHUB_TOKEN
  ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
  : {};

const getGithubProfile = async (username) => {
  const { data: user } = await axios.get(`${GITHUB_API}/users/${username}`, { headers });

  const { data: repos } = await axios.get(
    `${GITHUB_API}/users/${username}/repos?per_page=100`,
    { headers }
  );

  // Total stars calculate karo
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  // Most used language nikalo
  const languageCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });
  const mostUsedLanguage = Object.keys(languageCount).sort(
    (a, b) => languageCount[b] - languageCount[a]
  )[0] || null;

  return {
    username: user.login,
    name: user.name,
    bio: user.bio,
    avatar_url: user.avatar_url,
    location: user.location,
    company: user.company,
    blog: user.blog,
    email: user.email,
    public_repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    total_stars: totalStars,
    most_used_language: mostUsedLanguage,
    account_created_at: new Date(user.created_at).toISOString().slice(0, 19).replace('T', ' '),
    github_url: user.html_url,
  };
};

module.exports = { getGithubProfile };