export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        return await app.$axios.$get('/posts.json')
                    .then(data => {
                        const postsFetched = data,
                            posts = [];

                        for(const key in postsFetched) {
                            posts.push({ ...postsFetched[key], id: key });
                        }
                        
                        commit('posts/setPosts', posts);
                    })
    }
}