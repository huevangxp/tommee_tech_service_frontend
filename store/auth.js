export const state = () => ({})

export const mutations = {}

export const actions = {
  async SignUp({ commit }, data) {
    const formData = new FormData()
    formData.append('name', data.username)
    formData.append('password', data.password)
    formData.append('name', data.position)
    formData.append('username', data.phone)
    formData.append('profile', data.profile)
 await console.log(data);
    await this.$axios.post(this.$config.apiUrl +'/signUp', data)
      .then((data) => {
        console.log(data)
        this.$router.push('/signin')
      })
  },
}
