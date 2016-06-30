<template>
    <div class="container">
        <section class="row">
            <h4 class="col s12">Examples</h4>
            <div class="col s12">
                <activator activates="dropdown"
                           target="dropdown2"
                           class="blue lighten-3"
                >
                    Dropdown
                </activator>
                <dropdown id="dropdown2">
                    <li>
                        <a href="#!">Option 1 <badge new>4</badge></a>
                    </li>
                    <li>
                        <a href="#!">Option 2</a>
                    </li>
                </dropdown>
            </div>
            <div class="col s12">
                <collection>
                    <collection-item>Item 1 <badge new>4</badge></collection-item>
                    <collection-item>Item 2</collection-item>
                    <collection-item>Item 3</collection-item>
                    <collection-item>Item 4</collection-item>
                </collection>
            </div>
            <div class="col s12">
                <app-nav class="blue lighten-3">
                    <a href="#!" slot="logo" class="brand-logo">Logo</a>
                    <ul slot="items" class="right">
                        <li>
                            <a href="#!">sass</a>
                        </li>
                        <li>
                            <a href="#!">sass</a>
                        </li>
                        <li>
                            <a href="#!">sass <badge new>1</badge></a>
                        </li>
                    </ul>
                </app-nav>
            </div>
        </section>
        <section class="row">
            <h4 class="col s12">Markup</h4>
            <div class="col s12">
                <blockquote>
                    <code>&lt;badge&gt;&lt;/badge&gt;</code>
                </blockquote>
            </div>
        </section>
        <section class="row">
            <h4 class="col s12">Properties</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="badge in badges">
                        <td v-for="property in badge">{{ property }}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                badges: [
                    [
                        'new', 'Boolean', 'No', 'Applies "new" class and styling'
                    ]
                ]
            }
        }
    }
</script>