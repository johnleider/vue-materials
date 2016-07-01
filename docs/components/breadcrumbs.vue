<template>
    <examples>
        <div class="col s12">
            <breadcrumb :crumbs="items"></breadcrumb>
        </div>
    </examples>
</template>

<script>
    export default {
        data () {
            return {
                "items": [
                    {
                        "href": "#!",
                        "text": "First"
                    },
                    {
                        "href": "#!",
                        "text": "Second"
                    },
                    {
                        "href": "#!",
                        "text": "Third"
                    }
                ]
            }
        }
    }
</script>