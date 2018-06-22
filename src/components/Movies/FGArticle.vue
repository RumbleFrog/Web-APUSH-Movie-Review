<template>
    <div class="box animated fadeIn">
        <article class="media">
            <figure class="media-left">
                <img :src="img" class="image" width="512" height="512">
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>{{ title }} <b-icon :icon="valid ? 'check' : 'times'"></b-icon></h1>
                    <slot></slot><a :href="cite"><small>[Source]</small></a>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'FGArticle',
    props: {
        img: String,
        title: String,
        cite: String,
        valid: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
