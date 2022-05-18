<template>
    <div>
    <h5 class="font-weight-bold mb-8">Icons</h5>
        <div class="row">
        <div class="col" v-for="(ic, index) in icons" :key="index">
        <button class="btn btn-outline-primary p-5">
            <i :class="ic.icon"></i>
        </button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                {
                    icon: 'fa-solid fa-0',
                },
                {
                    icon: 'fa-solid fa-1',
                },
                {
                    icon: 'fa-solid fa-2',
                },
                {
                    icon: 'fa-solid fa-3',
                },
                {
                    icon: 'fa-solid fa-4',
                },
                {
                    icon: 'fa-solid fa-5',
                },
                {
                    icon: 'fa-solid fa-6',
                },
                {
                    icon: 'fa-solid fa-7',
                },
                {
                    icon: 'fa-solid fa-8',
                },
                {
                    icon: 'fa-solid fa-9',
                },
                {
                    icon: 'fa-solid fa-angles-up'
                }
            ]
        }
    },
}
</script>