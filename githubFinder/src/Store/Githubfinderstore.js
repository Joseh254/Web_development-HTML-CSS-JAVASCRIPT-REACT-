
import {create} from 'zustand';

const useStore = create((set) => ({
  username: '',
  userData: null,
  reposData: null,
  followersData: null,
  setUsername: (username) => set({ username }),
  setUserData: (userData) => set({ userData }),
  setReposData: (reposData) => set({ reposData }),
  setFollowersData: (followersData) => set({ followersData }),
}));

export default useStore;
