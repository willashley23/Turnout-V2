<template lang="pug">
  .poster-card-super-container
    .poster-card
      .poster-card-top-half
        img(:src="event.imageUrl")
      .poster-card-details
        .event-date 
          .event-month {{ event.date | moment("MMM") }}
          .event-day {{ event.date | moment("D") }}
        .event-info
          .event-title {{ event.title }}
          .event-location {{ event.location }} 
          .event-price-preview {{ pricePreviewText }}   
</template>


<script>
export default {
  name: "Event",
  props: ["event"],
  
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
  }

  .poster-card-details {
    display: flex;  
    padding: 24px;
    border-radius: 0 0 6px 6px;
    max-width: 400px;
    box-sizing: border-box;
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

    .event-title {
      color: $dark-charcoal;
      font-size: 1.333rem;
      line-height: 1.3;
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
