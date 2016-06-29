<template>
    <div class="container">
        <div class="row">
            <h4 class="col s12">Examples</h4>
            <div class="col s12">
                <activator activates="dropdown"
                           target="dropdown2"
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
                <app-nav>
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
        </div>
    </div>
</template>
