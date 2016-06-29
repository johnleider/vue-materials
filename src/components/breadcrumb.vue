<template>
    <nav>
        <div class="nav-wrapper">
            <div class="col s12">
                <a v-for="crumb in crumbs"
                   :href="crumb.href" 
                   class="breadcrumb"
                >
                    {{ crumb.text }}    
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        props: {
            crumbs: {
                type: Array,
                default: () => {},
                required: true
            }
        }
    }
</script>
