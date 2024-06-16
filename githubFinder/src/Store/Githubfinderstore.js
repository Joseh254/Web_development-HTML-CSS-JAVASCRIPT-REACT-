import { create } from "zustand";

const Gitfinder = (set) => ({
    username: null,
    repo: null,
    followers: null,
    following:null,
    loading: false,
    error: null,

    fetchUserData: async (username) => {
        set({ loading: true, error: null });

        try {
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userResponse.json();

            if (userResponse.ok) {
                const repoResponse = await fetch(userData.repos_url);
                const repoData = await repoResponse.json();

                const followersResponse = await fetch(userData.followers_url);
                const followersData = await followersResponse.json();

                

                set({
                    username: userData,
                    repo: repoData,
                    followers: followersData,
                    
                    loading: false,
                });
            } else {
                set({ error: userData.message, loading: false });
            }
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
});

const useGithubFinderStore = create(Gitfinder);

export default useGithubFinderStore;
