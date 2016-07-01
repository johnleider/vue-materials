<template>
    <section class="row">
        <h4 class="col s12">Properties</h4>
        <div class="col s12">
            <table>
                <thead>
                    <tr>
                        <th v-for="header in headers">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="property in properties">
                        <td v-for="row in property">{{ row }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['headers', 'properties']
    }
</script>