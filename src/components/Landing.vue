<template>
    <div class="container">
        <h1 id="title" class="title is-1 has-text-centered animated fadeIn">
            📽️ APUSH Movies 📽️
        </h1><br><br><br>
        <div class="columns">
            <router-link to="ForrestGump" id="fg" class="column is-3 animated fadeInDown">
                <div ckass="box">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="~@/assets/fg.jpg">
                            </figure>
                        </div>
                    </div>
                </div>
            </router-link>
            <div id="tc" class="column is-3 animated fadeInDown">
                <div class="box">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="~@/assets/tc.jpg">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div id="spr" class="column is-3 animated fadeInDown">
                <div class="box">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="~@/assets/spr.jpg">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div id="hf" class="column is-3 animated fadeInDown">
                <div class="box">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="~@/assets/hf.jpg">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
};
</script>

<style scoped>
#title {
    animation-delay: 1s;
}
#fg {
    animation-delay: 100ms;
}
#tc {
    animation-delay: 200ms;
}
#spr {
    animation-delay: 300ms;
}
#hf {
    animation-delay: 400ms;
}
</style>
