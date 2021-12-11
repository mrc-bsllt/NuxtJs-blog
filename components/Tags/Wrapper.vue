<template>
    <div class="tags__wrapper">
        <div class="tags__actions flex flex-row justify-start items-end flex-nowrap">
            <UI-CustomInput type="text" class="tags_input__group" v-model="tagValue">Tags</UI-CustomInput>
            <UI-CustomButton type="button" class="btn-submit w-3/12" @click="sendTags">Add Tag</UI-CustomButton>
        </div>

        <Tags-List :tags_list="tagsList" @onRemoveTag="removeTag" />
    </div>
</template>

<script>
    export default {
        props: {
            tags: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                tagValue: '',
                tagsList: [ ...this.tags ]
            }
        },
        methods: {
            sendTags() {
                this.tagsList.push('#' + this.tagValue);
                this.tagValue = '';
                this.$emit('getTags', this.tagsList);
            },
            removeTag(index) {
                this.tagsList.splice(index, 1);
                this.$emit('getTags', this.tagsList);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags__wrapper {

        .tags_input__group {
            margin-bottom: 0;
        }
    }
</style>