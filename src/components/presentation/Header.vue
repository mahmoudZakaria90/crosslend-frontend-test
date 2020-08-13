<template>
  <header class="header">
    <div class="header-left">
      <img :src="logo" alt="Company-logo" />
    </div>
    <div class="header-right" ref="headerRight">
      <nav class="header-nav">
        <ul>
          <li>
            <a href>Home</a>
          </li>
          <li>
            <a href class="active">Documents</a>
          </li>
          <li>
            <a href>Contact</a>
          </li>
        </ul>
      </nav>
      <div class="header-user">
        <div class="header-user-pic">
          <img :src="avatar" alt="User avatar" />
        </div>
        <div class="header-user-name">
          <p>{{user.firstName}}</p>
          <p>{{user.lastName}}</p>
        </div>
      </div>
    </div>
    <button class="header-bars-btn" @click="openMenu">
      <FontAwesomeIcon :icon="['fas', 'bars']" />
    </button>
    <p class="error" v-if="error">{{error.message}}</p>
  </header>
</template>

<script>
import logo from "../../assets/images/company.svg";
import avatar from "../../assets/images/ava.png";
export default {
  name: "Header",
  data() {
    return {
      user: {
        firstName: null,
        lastName: null,
      },
      avatar,
      logo,
      error: null,
    };
  },
  methods: {
    openMenu() {
      if (this.$refs.headerRight) {
        this.$refs.headerRight.classList.toggle("is-shown-sm");
      }
    },
  },
  async mounted() {
    const { VUE_APP_USER_INFO } = process.env;
    try {
      const request = await fetch(VUE_APP_USER_INFO);
      const response = await request.json();
      const { firstName, lastName } = response.body.User.profile;
      console.log(response.body);
      this.user.firstName = firstName;
      this.user.lastName = lastName;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="sass" scoped>
@import ../../assets/sass/colors
.header
    font-family: 'Verdana'
    position: relative
    display: flex
    align-items: center
    padding: 0px 20px
    background-color: $header-bg
    color: white
    margin-bottom: 30px
    @media(max-width: 768px)
        padding: 6px 20px
    &-right
        margin-left: auto
        display: flex
        align-items: center

        @media(max-width: 768px)
            display: none
            background-color: white
            position: absolute
            top: 60px
            right: 0
            box-shadow: 1px 2px 3px rgba(black, .2)
            z-index: 99999
            &.is-shown-sm
                display: block
    &-nav
        margin-right: 61px
        li
            list-style: none
            display: inline-block
            a
                display: block
                text-decoration: none
                color: white
                padding: 20px 40px
                transition: all 450ms
                &:hover,&.active
                    background-color: white
                    color: $header-bg
        @media(max-width: 768px)
            margin-right: 0
            li
                display: block
                a
                    color: $header-bg
                    padding: 10px 30px
                    &:hover,&.active
                        background-color: $header-bg
                        color: white
    &-user
        display: flex
        align-items: center
        padding-left: 30px
        border-left: 1px solid white
        align-self: stretch
        @media(max-width: 768px)
            border-top: 1px solid $title-color
        &-pic
            margin-right: 20px
            @media(max-width: 768px)
                display: none
        &-name
            @media(max-width: 768px)
                padding: 10px 0
                color: $header-bg
            & > p:first-of-type
                margin-bottom: 6px
                @media(max-width: 768px)
                    margin-bottom: 10px
    &-bars-btn
        display: none
        font-size: 20px
        outline: none
        @media(max-width: 768px)
            display: block
            margin-left: auto
</style>