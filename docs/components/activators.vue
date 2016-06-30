<template>
    <div class="container">
        <section class="row">
            <h4 class="col s12">Examples</h4>
            <div class="col s4">
                <activator activates="dropdown"
                           target="dropdown1"
                           class="blue lighten-3"
                >
                    Dropdown
                </activator>
                <dropdown id="dropdown1">
                    <li>
                        <a href="#!">Option 1</a>
                    </li>
                    <li>
                        <a href="#!">Option 2</a>
                    </li>
                    <li>
                        <a href="#!">Option 3</a>
                    </li>
                </dropdown>
            </div>
            <div class="col s4">
                <activator activates="modal"
                           target="#modal"
                           class="btn blue lighten-3"
                >
                    Modal
                </activator>
                <modal id="modal" bottom-sheet>
                    <div slot="content">
                        <h4>Modal Header</h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                    <div slot="footer">
                        <btn-link modal-link>Agree</btn-link>
                        <btn-link modal-link>Disagree</btn-link>
                    </div>
                </modal>
            </div>
            <div class="col s4">
                <activator activates="side-nav"
                           target="slide-out"
                           class="btn blue lighten-3"
                >
                    Side Nav
                </activator>
            </div>
        </section>
        <section class="row">
            <h4 class="col s12">Element</h4>
            <div class="col s12">
                <blockquote>
                    <code>
                        &lt;activator&gt;&lt;/activator&gt;
                    </code>
                </blockquote>
            </div>
        </section>
        <section class="row">
            <h4 class="col s12">Properties</h4>
            <div class="col s12">
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
                        <tr v-for="property in properties">
                            <td v-for="row in property">{{ row }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section class="row">
            <h4 class="col s12">Methods</h4>
            <div class="col s12">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>click</td>
                            <td>Emits an event @click when clicked.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                properties: [
                    [
                        'activates', 'String', 'Yes', 'Specified component to activate. [dropdown, modal, side-nav]'
                    ],
                    [
                        'target', 'String', 'Yes', 'The id of the activating component.  For modals must be prefixed with #'
                    ]
                ]
            }
        }
    }
</script>