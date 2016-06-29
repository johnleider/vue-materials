<template>
    <div class="container">
        <div class="row">
            <h4 class="col s12">Examples</h4>
            <div class="col s4">
                <activator activates="dropdown"
                           target="dropdown"
                >
                    Dropdown
                </activator>
                <dropdown id="dropdown">
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
                           class="btn"
                >
                    Modal
                </activator>
                <modal id="modal">
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
                           class="btn"
                >
                    Side Nav
                </activator>
            </div>
            <h4 class="col s12">Properties</h4>
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
                            <td>activates</td>
                            <td>Specified component to activate. <strong>[dropdown, modal, side-nav]</strong></td>
                        </tr>
                        <tr>
                            <td>target</td>
                            <td>The id of the activating component.  For modals <em>must</em> be prefixed with <strong>#</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
        </div>
    </div>
</template>