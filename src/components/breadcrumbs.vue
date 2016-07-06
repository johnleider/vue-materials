<template>
    <nav>
        <div class="nav-wrapper">
            <div class="col s12">
                <a v-for="crumb in items"
                   :href="crumb.href" 
                   class="breadcrumb"
                >
                    {{ crumb.text }}    
                </a>
                <slot></slot>
            </div>
        </div>
    </nav>
</template>

<script type="text/babel">
    export default {
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }
    }
</script>
