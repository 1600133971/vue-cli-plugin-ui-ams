<template>
<%_ if (options.type === 'app') { _%>
  <ams-block name="app" />
<%_ } else if (options.type === 'sell') { _%>
  <ams-block name="sell" />
<%_ } else if (options.type === 'government') { _%>
  <ams-block name="government" />
<%_ } else if (options.type === 'customer') { _%>
  <ams-block name="customer" />
<%_ } else if (options.type === 'business') { _%>
  <ams-block name="business" />
<%_ } else if (options.type === 'order') { _%>
  <ams-block name="order" />
<%_ } else if (options.type === 'upload') { _%>
  <ams-block name="upload" />
<%_ } else if (options.type === 'login') { _%>
  <ams-block name="login" />
<%_ } else { _%>
  <ams-block name="base" />
<%_ } _%>
</template>

<script>
export default {
  name: "app"
};
</script>

<style></style>
