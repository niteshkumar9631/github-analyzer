const pool = require('../config/db');
const { getGithubProfile } = require('../services/github.service');

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profileData = await getGithubProfile(username);

    const query = `
      INSERT INTO profiles 
        (username, name, bio, avatar_url, location, company, blog, email,
        public_repos, followers, following, total_stars, most_used_language,
        account_created_at, github_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        bio = VALUES(bio),
        avatar_url = VALUES(avatar_url),
        location = VALUES(location),
        company = VALUES(company),
        blog = VALUES(blog),
        email = VALUES(email),
        public_repos = VALUES(public_repos),
        followers = VALUES(followers),
        following = VALUES(following),
        total_stars = VALUES(total_stars),
        most_used_language = VALUES(most_used_language),
        account_created_at = VALUES(account_created_at),
        github_url = VALUES(github_url),
        analyzed_at = CURRENT_TIMESTAMP
    `;

    const values = [
      profileData.username,
      profileData.name,
      profileData.bio,
      profileData.avatar_url,
      profileData.location,
      profileData.company,
      profileData.blog,
      profileData.email,
      profileData.public_repos,
      profileData.followers,
      profileData.following,
      profileData.total_stars,
      profileData.most_used_language,
      profileData.account_created_at,
      profileData.github_url,
    ];

    await pool.execute(query, values);

    res.status(200).json({
      success: true,
      message: `Profile analyzed successfully!`,
      data: profileData,
    });
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({ success: false, message: 'GitHub user not found!' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM profiles ORDER BY analyzed_at DESC'
    );
    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const [rows] = await pool.execute(
      'SELECT * FROM profiles WHERE username = ?',
      [username]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found! Please analyze it first.',
      });
    }

    res.status(200).json({ success: true, data: rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { analyzeProfile, getAllProfiles, getProfile };