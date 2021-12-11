<template>
    <div class="tags__list flex flex-row justify-start flex-wrap py-3">
        <Tags-Tag
            v-for="(tag, index) in tags_list"
            :key="index"
            :label="tag"
            @click="$emit('onRemoveTag', index)"
        />
    </div>
</template>

<script>
export default {
    props: {
        tags_list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>