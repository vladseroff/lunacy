<template lang="pug">
.container
    slot
</template>

<style lang="scss" scoped>
.container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1420px) {
        padding: 0 15px;
        max-width: 530px;
    }
}
</style>