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
      .post(this.$config.apiUrl + '/signIn', data)
      .then((data) => {
        this.$cookies.set('token', data.data.token)
        this.$router.push('/')
        this.$toast.success('Login user successfully')
      })
      .catch((err) => {
        this.$toast.error('Password and Name Wrong...!')
        return err
    })
  },
}
