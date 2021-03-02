module.exports = {
  currentUser: {
    message: "",
    isLoggedIn: localStorage.getItem("token") !== null,
    profile: {},
  },
  register: {
    submitting: false,
    message: "",
    email: "",
    name: "",
    password: "",
    errors: {},
  },
  users: {
    fetching: false,
    chats: [],
    errors: {},
  },
  login: {
    submitting: false,
    credentials: {
      email: "",
      password: "",
    },
  },
};
