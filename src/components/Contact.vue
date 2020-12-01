<template>
  <section id="contactContainer">
    <div class="contactInner">
      <h2>Contact Us</h2>
      <div class="contactContent">
        <form id="contact" data-netlify="true" name="contact" method="POST">
          <label for="name">
            Name
            <input type="text" name="name" id="name">
          </label>
          <label for="email">
            Email
            <input type="email" name="email" id="email">
          </label>
          <label for="phone">
            Phone
            <input type="tel" name="phone" id="phone">
          </label>
          <label for="message">
            Message
            <textarea name="message" id="message" rows="10"></textarea>
          </label>
          <input type="submit" value="Send Message" id="sendMessage">
        </form>
        <div class="contactInfo">
          <div class="contactItem">
            <img src="/img/contact/clock.svg" alt="Hours icon">
            <div class="contactItem__detail">
              <p>Monday - Friday, 7:00 am - 4:00 pm</p>
            </div>
          </div>
          <div class="contactItem">
            <img src="/img/contact/phone.svg" alt="Phone icon">
            <div class="contactItem__detail">
              <p>(207) 929-8700</p>
            </div>
          </div>
          <div class="contactItem">
            <img src="/img/contact/fax.svg" alt="Fax icon">
            <div class="contactItem__detail">
              <p>(207) 929-8129</p>
            </div>
          </div>
          <div class="contactItem">
            <img src="/img/contact/email.svg" alt="Email icon">
            <div class="contactItem__detail">
              <p><a href="mailto:info@temmachining.com" style="color:#fff;">info@temmachining.com</a></p>
            </div>
          </div>
        <div class="contactItem">
          <img src="/img/contact/address.svg" alt="Address icon">
          <div class="contactItem__detail">
            <p>TEM INC.</p>
            <p>8 Pierce Drive</p>
            <p>Buxton, ME 04093</p>
            <p><a href="https://goo.gl/maps/SDn5kVUKU7oDKXdB9" target="_blank" style="color:#fff;">Get Directions</a></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #contactContainer {
    padding: 80px 0;
    background: rgb(10, 9, 25);
    background-image: url('/img/map.png'), linear-gradient(331deg, rgb(5, 14, 25) 4%, rgb(6, 7, 35) 50%, rgb(10, 9, 25) 79%);
    background-repeat: no-repeat;
    background-position: right;
    text-align: left;
    background-size: contain;
  }

  .contactInner {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    color: #fff;
    padding: 0 24px;
  }


  .contactInner h2 {
    position: relative;
    margin-bottom: 24px;
  }

  .contactInner h2:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 12px;
    background: rgb(242, 97, 1);
    z-index: 0;
    transform: skewX(-20deg);
    top: 0;
    left: -28px;
    border-radius: 2px;
  }

  #contact label, #contact input, #contact textarea {
    display: block;
    position: relative;
  }

  #contact label {
    margin-bottom: 24px;
  }

  #contact input, #contact textarea {
    margin-top: 6px;
    font-size: 18px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 2px;
    color: #fff;
  }

  #contact input#sendMessage {
    color: rgb(242, 97, 1);
    border: 2px solid rgb(242, 97, 1);
    background: none;
    transition: 200ms ease-out;
    border-radius: 2px;
    margin-top: 28px;
    cursor: pointer;
  }

  #contact input#sendMessage:hover {
    background: rgb(242, 97, 1);
    color: #fff;
  }

  .contactContent {
    display: flex;
  }

  .contactInfo {
    padding-left: 48px;
  }

  .contactItem {
    display: flex;
    margin-bottom: 16px;
    align-items: flex-start;
  }

  .contactItem img {
    margin-right: 12px;
  }

  @media screen and (max-width:1050px) {
    #contactContainer {
      background-size: cover;
    }
  }

  @media screen and (max-width:660px) {
    .contactContent {
      flex-direction: column;
    }

    #contact input, #contact textarea {
      width: 100%;
    }

    #contact {
      margin-bottom: 2rem;
    }

    .contactInfo {
      padding-left: 0;
    }
  }
 
</style>
