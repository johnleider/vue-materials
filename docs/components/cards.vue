<template>
    <examples>
        <div class="col s6">
            <card>
                <div class="card-content">
                    <span class="card-title">I'm a Card</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                    <btn-link modal-link>This is a link</btn-link>
                    <btn-link modal-link>This is a link</btn-link>
                </div>
            </card>
        </div>
        <div class="col s6">
            <card class="red white-text">
                <div class="card-content">
                    <span class="card-title">I'm a small Card</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                    <btn-link modal-link class="white-text">This is a link</btn-link>
                    <btn-link modal-link class="white-text">This is a link</btn-link>
                </div>
            </card>
        </div>
        <div class="col s12">
            <card panel class="teal white-text">
                <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
            </card>
        </div>
    </examples>
</template>

<script>
    export default {
    }
</script>