<template>
  <div class="qrcode">
    <b-container fluid class="pt-4 px-3">
      <h3 id="ptitle"><b>QR Code Scanner</b></h3>
      <hr style="border: 1px dashed gray;"/>
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </b-container>
  </div>
</template>

<script>
export default {
  name:"QRcode",
  components:{
  },
}
</script>

<style>
#ptitle {
  color: white;
  text-shadow : 2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black;
}
</style>
