import {
  login,
  register,
  processAfterRegister,
  logout,
  getUserDetail,
  updateUserProfile,
} from "@/api/user";
import {
  getToken,
  setToken,
  removeToken,
  setUser,
  clearStoreage,
} from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    user: {},
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { email, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: password })
        .then((response) => {
          commit("SET_TOKEN", response.access_token);
          setToken(response.access_token);
          setUser(response.user);
          commit("SET_USER", response.user);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getInfo({ commit }, id) {
    getUserDetail(id).then((response) => {
      setUser(response);
      commit("SET_USER", response);
    });
  },

  completeSurvey({ commit }) {
    const user = state.user;
    user.is_complete_survey = 1;
    commit("SET_USER", user);
  },

  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      register(user)
        .then((response) => {
          processAfterRegister({
            email: user.get("email"),
            password: user.get("password"),
          })
            .then((res) => {
              commit("SET_TOKEN", res.access_token);
              setToken(res.access_token);
              commit("SET_USER", res.user);
              setUser(res.user);
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  updateUserDetail({ commit }, user) {
    return new Promise((resolve, reject) => {
      updateUserProfile(user)
        .then((response) => {
          commit("SET_USER", response);
          setUser(response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      clearStoreage(); // must remove  token  first
      resetRouter();
      commit("RESET_STATE");
      resolve();
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
