import { createStore } from 'vuex';
import { sLogin, sLogout } from '@/services/authService';

export default createStore({
  state: {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    user: JSON.parse(localStorage.getItem('user')) || {
      icon: 'avatar/0.png' 
    }
  },
  mutations: {
    SET_LOGIN_STATE(state, status) {
      state.isLoggedIn = status;
      if (status) {
        const randomAvatar = Math.floor(Math.random() * 12) + 1;
        const val = 'avatar/' + randomAvatar.toString() + '.png'
        state.user.icon = val ;
      } else {
        state.user.icon = 'avatar/0.png';
      }
    },
    // 设置用户信息
    SET_USER(state, user) {
      state.user = { ...user, icon: state.user.icon };
    }
  },
  actions: {
    // 处理用户登录
    login({ commit, state }, credentials) {
      return new Promise((resolve, reject) => {
        sLogin(credentials)
          .then(user => {
            commit('SET_LOGIN_STATE', true);
            const updatedUser = { ...user, icon: state.user.icon };
            commit('SET_USER', updatedUser);
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            resolve(updatedUser);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // 处理用户登出
    logout ({ commit }) {
      return new Promise((resolve) => {
        sLogout()
          .then(() => {
            commit('SET_LOGIN_STATE', false);
            commit('SET_USER', { icon: 'assets/avatar/0.png' });
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            resolve();
          });
      });
    }
  },
  getters: {
    // 获取用户登录状态
    isLoggedIn: state => state.isLoggedIn,
    // 获取用户信息
    user: state => state.user
  }
});