
export const fetchGitHubUser = async (username) => {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    if (!userResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const userData = await userResponse.json();
  
    const reposResponse = await fetch(userData.repos_url);
    const reposData = await reposResponse.json();
  
    const followersResponse = await fetch(userData.followers_url);
    const followersData = await followersResponse.json();
  
    return { userData, reposData, followersData };
  };
  