<template>
    <section class="row">
        <h4 class="col s12">Element</h4>
        <div class="col s12">
            <blockquote v-for="element in elements">
                <code>
                    &lt;{{ element }}&gt;&lt;/{{ element }}&gt;
                </code>
            </blockquote>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['elements']
    }
</script>