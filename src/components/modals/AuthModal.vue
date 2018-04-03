<template lang="pug">
  modal(name="auth-modal" @before-open="beforeOpen" height="100%" width="100%") 
    .close
      span  
        button(@click="$modal.hide('auth-modal')")
          i(class="eds-vector-image eds-icon--small eds-vector-image--block" title="Close" data-spec="icon")
            svg(id="eds-icon--cross-chunky_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
              path(id="eds-icon--cross-chunky_base" d="M13.4 12l3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5 1.4 1.4 3.5-3.5 3.5 3.5 1.4-1.4z")
    authForm
</template>

<script>
import authForm from '../auth/AuthForm.vue'

export default {
  name: 'AuthModal',
  components: { authForm },
  methods: {
    beforeOpen (event) {
      console.log("helloooo");
    },
  },
  
}
</script>

<style lang="scss">

  form {
    padding-top: 80px;
  }

  .v--modal-overlay[data-modal="auth-modal"] {
    background: transparent;
    animation: pulse cubic-bezier(.4,0,.3,1) .16s;
    animation-fill-mode: forwards;
  }

  .close {
    position: absolute;
    right: 12px;
    top: 12px;

    span {
      fill: #666a73;
      display: inline-block;
      
      button {
        background: rgba(248,248,250,.7);
        border-radius: 40px;
        border: none;
        padding: 6px;
        outline: none;
        cursor: pointer;

        &:hover {
          background: $medium-gray;
          fill: $dark-charcoal;
        }

        i {
          height: 24px;
          width: 24px;
          display: block;
        }
      }
    }
  }
</style>

