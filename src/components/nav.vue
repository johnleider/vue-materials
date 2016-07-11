<template>
    <div :class="{ 'navbar-fixed': fixed }">
        <nav>
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
            fixed: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
