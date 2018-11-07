<template>
    <div class="header__con">
        <app-header-banner></app-header-banner>
        <app-navigation></app-navigation>
    </div>
</template>

<script>
import AppHeaderBanner from '@components/common/app-home/AppHeaderBanner';

export default {
     components : {
         AppHeaderBanner,
     }
}
</script>


<style>
    .header__con{
        position: fixed;
    }

</style>




