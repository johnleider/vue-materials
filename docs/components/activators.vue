<template>
    <examples>
        <div class="col s4">
            <activator activates="dropdown"
                       target="dropdown1"
            >
                Dropdown
            </activator>
            <dropdown id="dropdown1">
                <li>
                    <a href="#!">Option 123</a>
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
                       class="btn"
            >
                Side Nav
            </activator>
        </div>
    </examples>
</template>

<script>
    export default {
    }
</script>