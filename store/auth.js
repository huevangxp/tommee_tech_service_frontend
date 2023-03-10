export const state = () => ({})

export const mutations = {}

export const actions = {
  async SignUp({ commit }, data) {
    await this.$axios
      .post(this.$config.apiUrl + '/signUp', data)
      .then((data) => {
        this.$router.push('/signin')
        this.$toast.success('Create user successfully')
      })
  },
  async SignIn({ commit }, data) {
    await this.$axios
      .post("https://reqres.in/api/login", {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
      .then((data) => {
        this.$cookies.set('token', data.data.token)
        this.$router.push('/')
        this.$toast.success('Login user successfully')
      })
      .catch((err) => {
        return this.$toast.error(JSON.stringify(err))
      })
  },
}
