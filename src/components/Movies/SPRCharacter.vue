<template>
    <div class="card">
        <div class="card-image">
            <figure class="image">
                <img :src="img" :alt="name" width="703" height="931" :class="jfr ? 'jfr' : ''">
            </figure>
        </div>
        <div class="card-content">
            <h1 class="title is-4">{{ name }}</h1>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SPRCharacter',
    props: {
        img: String,
        name: String,
        jfr: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.hero.is-info .title {
    color: inherit;
}
/* .card {
    height: 100%;
}
.jfr {
    height: 488px;
} */
</style>
