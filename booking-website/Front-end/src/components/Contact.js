export function Contact() {
    return (
         <div>
     <div class="page-title-area bg-19">
        <div class="container">
          <div class="page-title-content">
            <h2>Contact</h2>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li class="active">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="contact-wrap">
                <div class="contact-form">
                  <div class="section-title">
                    <h2>Drop Us A Message For Any Query</h2>
                  </div>
                  <form id="contactForm">
                    <div class="row">
                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            required=""
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control"
                            required=""
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            required=""
                            class="form-control"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            id="msg_subject"
                            class="form-control"
                            required=""
                            placeholder="Your Subject"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <textarea
                            name="message"
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="5"
                            required=""
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <button type="submit" class="default-btn page-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="quick-contact">
                <h3>Quick Contact</h3>
                <ul>
                  <li>
                    <i class="bx bx-location-plus"></i>Location:<span
                      >123, Western Road, Melbourne Australia</span
                    >
                  </li>
                  <li>
                    <i class="bx bx-phone-call"></i>Call Us:<a
                      href="tel:+61-821-456"
                      >+61-821-456</a
                    ><a href="tel:+61-987-786">+61-987-786</a>
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i>Email Us:<a
                      href="cdn-cgi/l/email-protection.html#5139343d3d3e1122253e3f7f323e3c"
                      ><span
                        class="__cf_email__"
                        data-cfemail="3058555c5c5f7043445f5e1e535f5d"
                        >[email&#160;protected]</span
                      ></a
                    ><a
                      href="cdn-cgi/l/email-protection.html#d7beb9b1b897a4a3b8b9f9b4b8ba"
                      ><span
                        class="__cf_email__"
                        data-cfemail="aac3c4ccc5ead9dec5c484c9c5c7"
                        >[email&#160;protected]</span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="single-contact-map pb-100">
        <div class="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60998820.06503915!2d95.33864521600859!3d-21.06976582721498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sbd!4v1589611558925!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
      </div>
    )
   } 