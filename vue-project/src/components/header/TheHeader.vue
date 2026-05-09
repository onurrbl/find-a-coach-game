<template>
    
    <!-- <Menubar :model="items" /> -->

    <Menubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
    </template>
</Menubar>
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
    components: {
        Menubar
    },
    data() {
        return {
            items: [
                {
                    label: 'All Coaches',
                    items: [
                        { label: 'New', icon: 'pi pi-fw pi-plus' },
                        { label: 'Open', icon: 'pi pi-fw pi-download' },
                        { label: 'Quit', icon: 'pi pi-fw pi-times' }
                    ]
                },
                {
                    label: 'Requests',
                    items: [
                        { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
                        { label: 'Redo', icon: 'pi pi-fw pi-repeat' }
                    ]
                },
                {
                    label: 'Help',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            items: [
                                {
                                    label: 'Text',
                                    items: [
                                        { label: 'Workspace' },
                                        { label: 'Current File' }
                                    ]
                                },
                                {
                                    label: 'File'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>