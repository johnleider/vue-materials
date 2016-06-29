<template>
    <app-nav class="blue">
        <div slot="logo">
            <activator activates="side-nav" 
                       target="slide-out"
                       class="hide-on-med-and-down"
            >
                <icon>list</icon>
            </activator>
        </div>
        <div slot="items" class="page-title">
            <h2>Index</h2>
        </div>
        <app-side-nav id="slide-out"
                      slot="side-nav"
                      fixed
        >
            <li v-for="item in items">
                <a href="#!"
                   v-text="item"
                   @click="click(item)"
                ></a>
            </li>
        </app-side-nav>
    </app-nav>
</template>

<script>
    export default {
        data () {
            return {
                items: ['Activators','Badges','Breadcrumbs','Buttons','Cards','Carousel','Chips','Collapsible','Collection','Dropdown','FABs','Footer','Icon','Material Box','Modal','Nav','Pagination','Parallax','Progress','Side Nav','Slider','Tabs']
            }
        },

        methods: {
            click (item) {
                this.$emit('click', item.toLowerCase())
            }
        }
    }
</script>

<style scoped>
    nav {
        height: auto;
    }

    h2 {
        margin: 0;
        text-align: center;
    }

    .page-title {
        padding: 2rem 0;
    }
</style>