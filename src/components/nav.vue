<template>
    <div :class="{ 'navbar-fixed': fixed }">
        <nav :class="[navClass]">
            <div class="nav-wrapper">
                <slot name="logo"></slot>
                <slot></slot>
                <slot name="side-nav"></slot>
            </div>
        </nav>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            navClass: {
                type: String,
                default: ''
            },

            fixed: {
                type: Boolean,
                default: false
            }
        }
    }
</script>