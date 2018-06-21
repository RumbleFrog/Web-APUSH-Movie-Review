<template>
  <section id="app" class="hero is-info is-fullheight">
      <div class="hero-head">
            <nav class="navbar" role="navigation" aria-label="Navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-item">
                            <span class="title">Z</span>
                        </router-link>
                        <button class="button navbar-burger"
                            @click="navMenuActive = !navMenuActive">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
      <div class="hero-body">
          <div class="container">
              <router-view></router-view>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'APUSH-Movie-Review',
    data() {
        return {
            navMenuActive: false,
        };
    },
};
</script>
