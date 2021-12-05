export const state = () => (
    {
        loadedPosts: []
    }
)

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts;
    },
    addPost(state, newPost) {
        console.log('fired addPost');
        state.loadedPosts.push(newPost);
    },
    updatePost(state, post) {
        var foundIndex = state.loadedPosts.findIndex(x => x.id == post.id);
        state.loadedPosts[foundIndex] = post;
    },
    deletePost(state, post) {
        var foundIndex = state.loadedPosts.findIndex(x => x.id == post.id);
        state.loadedPosts.splice(foundIndex, 1);
    }
}

export const actions = {
    async addPost({ commit }, newPost) {
        return await this.$axios.$post('/posts.json', newPost)
            .then((data) => {
                console.log('Added: ' + data.name);
                commit('addPost', { ...newPost, id: data.name });
            })
    },
    async updatePost({ commit }, post) {
        post = post.data;
        return await this.$axios.$put(`/posts/${post.id}.json`, post)
            .then(data => {
                console.log('Post Updated!');
                commit('updatePost', post);
            });
    },
    async deletePost({ commit }, post) {
        return await this.$axios.$delete(`/posts/${post.id}.json`, post)
            .then(data => {
                console.log('Post deleted!');
                commit('deletePost', post);
            });
    }
}

export const getters = {
    getLoadedPosts(state) {
        return state.loadedPosts;
    },
    getPostByUniqueString: (state) => (uniqueStr) => {
        return state.loadedPosts.filter(post => post.slug + post.id === uniqueStr)[0];
    }
}