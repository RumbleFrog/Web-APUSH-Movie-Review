<template>
    <div class="columns">
        <div id="cm" class="column is-4 animated fadeInLeft">
            <SPRCharacter
                img="/static/img/spr/miller.jpeg"
                name="Captain Miller">
            Captain Miller is undoubtedly the most crucial character in the film.
            His decision making and clear thinking overturned all the stressful
            situations that they faced along the way. He started off as a drafted
            citizen that wants to go home to his family, didn't want to talk
            to anyone on the team about his personal life because he felt that
            life is too short to be creating bonds like this. Later down in the
            road, his decision making was challenged by characters like
            Richard Reiben, creating heat between the Sarge and Richard; he
            resolved the situation by opening up his personal life to people
            to show that he is no way more privilege or different from them.
            Towards the end, he sacrificed his life for the betterment of the
            team to prevent the enemy from cross the bridge.
            </SPRCharacter>
        </div>
        <div id="jfr" class="column is-4 animated fadeInLeft">
            <SPRCharacter
                img="/static/img/spr/ryan.jpg"
                name="James Francis Ryan"
                jfr>
            Private Ryan or James Francis Ryan was the sole focus of this film.
            The journey that begins with the team attempting to locate and
            recover Ryan due to his brother's death, the officers believed
            It is best for him to go home. However,
            his unwillingness to leave his only family left made the entire
            team stay. Throughout the story, Ryan developed from a selfish
            being from first interaction with Captain Miller to a liability
            on the battlefield and a wannabe hero, and finally to someone
            that is viewed as the team's trophy and privilege of going home.
            Despite personality not changing much throughout, the perspective
            of the people that viewed him changed throughout the film.
            </SPRCharacter>
        </div>
        <div id="rr" class="column is-4 animated fadeInLeft">
            <SPRCharacter
                img="/static/img/spr/richard.jpg"
                name="Richard Reiben">
            Richard Reiben is just like any other fellows on the team;
            he was randomly drafted to on this search and rescue mission
            for Ryan. In the film, he questioned and challenged Captain Miller's
            way of thinking, saying that it's a suicide and he's not doing it and
            disobeying commander's order. But, with the speech from Captain Miller,
            he quickly converted to someone that wants to remain and complete
            the mission. We see his anguish rereleased when Ryan refuses to
            leave his post, leaving Richard furious with him but he managed to maintain
            his temper after the first time.
            </SPRCharacter>
        </div>
    </div>
</template>

<script>
import SPRCharacter from './SPRCharacter';

export default {
    name: 'SavingPrivateRyan',
    components: {
        SPRCharacter,
    },
};
</script>

<style scoped>
#cm {
    animation-delay: 100ms;
}
#jfr {
    animation-delay: 600ms;
}
#rr {
    animation-delay: 1100ms;
}
</style>
