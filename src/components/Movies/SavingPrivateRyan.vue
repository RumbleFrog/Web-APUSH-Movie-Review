<template>
    <div class="columns">
        <div class="column is-4">
            <SPRCharacter
                img="/static/img/spr/miller.jpeg"
                name="Captain Miller">
            God
            </SPRCharacter>
        </div>
        <div class="column is-4 jfr">
            <SPRCharacter
                img="/static/img/spr/ryan.jpg"
                name="James Francis Ryan"
                jfr>
            God
            </SPRCharacter>
        </div>
        <div class="column is-4">
            <SPRCharacter
                img="/static/img/spr/richard.jpg"
                name="Richard Reiben">
            God
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
