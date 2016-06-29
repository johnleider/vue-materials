<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <breadcrumb :crumbs="items"></breadcrumb>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        href: '#!',
                        text: 'First'
                    },
                    {
                        href: '#!',
                        text: 'Second'
                    },
                    {
                        href: '#!',
                        text: 'Third'
                    }
                ]
            }
        }
    }
</script>