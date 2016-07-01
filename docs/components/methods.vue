<template>
    <section class="row">
        <h4 class="col s12">Methods</h4>
        <div class="col s12">
            <table>
                <thead>
                    <tr>
                        <th v-for="header in headers">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="method in methods">
                        <td v-for="property in method">{{ property }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['headers', 'methods']
    }
</script>