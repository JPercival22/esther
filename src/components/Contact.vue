<template>
  <!-- Contact -->
  <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">MESSAGE ME</h2>
          <h3 class="section-subheading-contact text-muted">Please fill in the form below, with your name, your email address and which service you would like and I will contact you as quickly as I can - Thank you! </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form
            id="contact"
            action="https://formspree.io/joseph.m.percival@gmail.com"
            method="POST"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    class="form-control"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p class="help-block text-danger"></p>
                </div>
            <!-- email  -->
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email *"
                name="_replyto"
                required="required"
                data-validation-required-message="Please enter your email address."
              />
                  <p class="help-block text-danger"></p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                <textarea
                  id="message"
                  class="form-control"
                  rows="3"
                  placeholder="Your Message *"
                  name="message"
                  required="required" 
                  data-validation-required-message="Please enter a message."
                ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
            <div class="col-lg-12 text-center">
              <div id="success"></div>
              <button
                id="sendMessageButton"
                class="btn btn-primary btn-xl text-uppercase"
                type="submit"
              >Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>