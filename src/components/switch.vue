<template>
    <div class="switch">
        <label>
            {{ off }}
            <input type="checkbox">
            <span class="lever"></span>
            {{ on }}
        </label>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            off: {
                type: String,
                default: 'Off'
            },

            on: {
                type: String,
                default: 'On'
            }
        }
    }
</script>