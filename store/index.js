export const actions = {
    async nuxtServerInit({ commit, dispatch }, { app, req }) {
        return await app.$axios.$get('/posts.json')
                    .then(data => {
                        const postsFetched = data,
                            posts = [];

                        for(const key in postsFetched) {
                            posts.push({ ...postsFetched[key], id: key });
                        }
                        
                        let token = null;
                        if(req.headers.cookie) {
                            token = req.headers.cookie.split(';').find(el => el.includes('token=')).split('=')[1];
                        }

                        commit('auth/setToken', token);
                        commit('posts/setPosts', posts);
                    })
    }
}