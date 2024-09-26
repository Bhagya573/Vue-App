<template>
    <div>
            <slot name="header"></slot>
            <slot name="content"></slot>
            <slot></slot>
    </div>
</template>
<script>
export default{
    props:['name']
}
</script>