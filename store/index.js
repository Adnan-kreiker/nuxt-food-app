export const state = () => ({
  fooddata: []
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  UPDATE_FOODDATA: (state, data) => {
    state.fooddata = data
  }
}

export const actions = {
  async getFooddata({ commit, state}) {
    if (state.fooddata.length) return
    try {
    await fetch('https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants',
    {headers: {
      'Content-Type': 'aaplication/json',
      'x-api-key': process.env.AWS_API_KEY
    }})
    .then((response) => response.json())
    .then(data => {
    console.log(data)
    commit('UPDATE_FOODDATA', data)})
    } catch (error) {
      console.log(error)
    }
  }
}