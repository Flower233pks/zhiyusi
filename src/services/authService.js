export const sLogin = (credentials) => {
  return new Promise((resolve) => {
    // 不考虑 credentials，直接解决 Promise
    // 你可以根据需要自定义这里的用户对象
    const mockUser = {
      id: '123',
      name: 'Mock User',
      email: credentials.email // 可以使用提供的电子邮件
      // 其他你需要的用户信息
    };
    resolve(mockUser);
  });
};

export const sLogout = () => {
  // 登出逻辑（如果有的话）
  return new Promise((resolve) => {
    resolve();
  });
};
