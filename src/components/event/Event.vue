<template lang="pug">
  .poster-card-super-container
    .poster-card
      .poster-card-top-half
        .price-sticker {{ priceStickerText }}
        img(:src="event.imageUrl")
      .poster-card-details
        .event-date 
          .event-month {{ event.date | moment("MMM") }}
          .event-day {{ event.date | moment("D") }}
        .event-info
          button.bookmark-button(:class="{ 'active-bookmark': hasActiveBookmark }")
            i(title="Bookmark")
              svg#eds-icon--user-chunky_svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
                path#eds-icon--heart-chunky_base(v-if="hasActiveBookmark" fill-rule="evenodd" clip-rule="evenodd" d="M16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.5-1.6 1.5-4.2 0-5.8C18.1 5.4 17 5 16 5")
                path#eds-icon--heart-chunky_base(v-else fill-rule="evenodd" clip-rule="evenodd" d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z")
          .event-title {{ event.title }}
          .event-location {{ event.location }} 
          .event-price-preview {{ pricePreviewText }}   
</template>


<script>
export default {
  name: "Event",
  props: ["event"],
  data() {
    return {
      // make this work later
      // add @click to .bookmark-button to create a new bookmark or auth
      hasActiveBookmark: false,
    }
  },
  computed: {
    lowestFare() {
      return this.event.tickets.reduce((min, current) => { 
        return current < min ? current : min 
      }).price;
    },

    pricePreviewText() {
      if (this.lowestFare) {
        return `Tickets from $${ this.lowestFare }`;
      }
      return "Free";
    },

    priceStickerText() {
      return this.lowestFare <= 0 ? "Free" : `$${ this.lowestFare }`;
    }
  }
}
</script>


<style lang="scss" scoped>
  .poster-card-super-container {
    padding: 10px;
    cursor: pointer;
    
    &:hover {
      .poster-card {
        box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
        background-color: $white;
        border-radius: 4px;
        z-index: 3;
      }

      .poster-card-details {
        background: $white;

        .bookmark-button {
          opacity: 1;
        }
      }
      
      img {
        transition: border-radius .24s cubic-bezier(.4,0,.3,1);
        border-radius: 4px 4px 0 0;
        overflow: hidden;
      }
    }
  }

  .poster-card {
    max-width: 400px;
    background: transparent;
    transition: box-shadow .24s cubic-bezier(.4,0,.3,1),background-color .24s cubic-bezier(.4,0,.3,1);
  }

  .poster-card-top-half {
    max-height: 200px;
    max-width: 400px;
    position: relative;

    .price-sticker {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $light-charcoal;
      width: 87px;
      height: 36px;
      font-size: 14px;
      line-height: 1.4;
      border-radius: 4px;
      background-color: #fff;
      position: absolute;
      top: 12px;
      right: -12px;
      box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
      z-index: 3;
    }
  }

  .poster-card-details {
    display: flex;  
    padding: 24px;
    border-radius: 0 0 6px 6px;
    max-width: 400px;
    box-sizing: border-box;
    position: relative;
  }

  .event-date {
    padding-right: 16px;

    .event-month {
      text-transform: uppercase;
      color: $brite-orange;
      font-size: 12px;
      line-height: 1.4;
    }

    .event-day {
      font-size: 1.333rem;
      color: $light-charcoal;
      line-height: 1.3;
    }
  }

  .event-info {
    text-align: left;
    flex: 1;

    .bookmark-button {
      opacity: 0;
      height: 40px;
      width: 40px;
      padding: 7px;
      cursor: pointer;
      border: none;
      fill: $light-charcoal;
      border-radius: 50%;
      border: 1px solid $light-grey;
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      position: absolute;
      top: -22px;
      right: 17px;
      background: $white;
      transition: opacity .24s cubic-bezier(0,0,.35,1);
      transition-delay: 80ms;
      outline: none;

      &:hover {
        fill: $dark-charcoal;
      }

      &.active-bookmark {
        fill: $brite-orange;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  
    .event-title {
      color: $dark-charcoal;
      font-size: 1.333rem;
      line-height: 1.3;
      position: relative;
      bottom: 2px;
    }
    
    .event-location,
    .event-price-preview {
      color: $light-charcoal;
      font-size: 12px;
      line-height: 1.4;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .event-price-preview {
      display: flex;
      align-items: center;
      height: 22px;
    }
  }

  img {
    max-width: 100%;
    max-height: 200px;
    object-fit: scale-down;
    border-radius: 6px;
  }
</style>
