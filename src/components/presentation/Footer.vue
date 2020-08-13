<template>
  <footer class="footer">
    <ul class="footer-links">
      <li class="footer-copyright">
        <p>
          <span>&copy; Copyrights</span>
          <span>All rights reserved</span>
        </p>
      </li>
      <li>
        <a href="#">Imprint</a>
      </li>
      <li>
        <a href="#">Terms of use</a>
      </li>
      <li>
        <a href="#">Privacy policy</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import ../../assets/sass/colors
.footer
    position: absolute
    bottom: 0
    left: 0
    right: 0
    display: flex
    align-items: center
    justify-content: center
    height: 40px
    text-align: center
    color: white
    background-color: $header-bg
    @media(max-width: 768px)
        height: auto
        padding: 20px 40px
    &-links
        list-style: none
        & > li
            display: inline-block
            @media(max-width: 768px)
                margin-bottom: 10px
                &:last-of-type
                    margin-bottom: 0
            & > a
                display: block
                color: white
                text-align: center
                padding: 0 12px
                border-left: 1px solid white
    &-copyright
        margin-right: 12px
        & > p
            & > span
                display: inline-block
                &:first-of-type
                    margin-right: 12px
                &:last-of-type
                    padding-left: 12px
                    border-left: 1px solid white
</style>