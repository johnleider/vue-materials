<template>
    <div>
        <elements :elements="e"></elements>
        <properties :headers="ph" 
                    :properties="pd" 
                    v-if="pd.length > 0"
        ></properties>
        <methods :headers="mh" 
                 :methods="md"  
                 v-if="md.length > 0"
        ></methods>
    </div>
</template>

<script>
    export default {
        props: ['e', 'ph', 'pd', 'mh', 'md']
    }
</script>