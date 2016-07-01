<template>
    <div>
        <elements :elements="elements"></elements>
        <properties :headers="headers" 
                    :properties="properties" 
                    v-if="properties.length > 0"
        ></properties>
        <methods :headers="mheaders" 
                 :methods="mproperties"  
                 v-if="mproperties.length > 0"
        ></methods>
    </div>
</template>

<script>
    export default {
        props: ['elements', 'headers', 'properties', 'mheaders', 'mproperties']
    }
</script>