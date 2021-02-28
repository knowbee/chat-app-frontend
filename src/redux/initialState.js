module.exports = {
  currentUser: {
    message: "",
    isLoggedIn: localStorage.getItem("token") !== null,
    chats: [],
    messages: [],
    profile: {
      id: "",
      email: "",
      name: "",
    },
  },
  register: {
    submitting: false,
    message: "",
    email: "",
    name: "",
    password: "",
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
