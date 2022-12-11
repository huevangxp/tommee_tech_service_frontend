export const state = () => ({
    rule: [],
    video:[]
})

export const mutations = {
    setRule(state, rule) {
        state.rule = rule
    },
    setVideo(state, video) {
        state.video = video
    }
}

export const actions = {
    async getRule({ commit }) {
        await this.$axios.get(this.$config.apiUrl + '/rule')
            .then((data) => {
                commit('setRule', data.data)
        })
    },
    async getVideo({ commit }) {
        await this.$axios.get(this.$config.apiUrl + '/video')
            .then((data) => {
            // console.log(data);
                commit('setVideo', data.data)
        })

    }
}