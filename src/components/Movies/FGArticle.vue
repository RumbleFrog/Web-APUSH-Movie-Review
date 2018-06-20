<template>
    <article class="media">
        <figure class="media-left">
            <p class="image">
                <img :src="img">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <h1>{{ title }}</h1>
                <p>
                    <slot></slot>
                </p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'FGArticle',
    props: ['img', 'title'],
};
</script>
