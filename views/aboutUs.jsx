var React = require('react');

var Layout = require('./layout');


class AboutUs extends React.Component {
  render() {


    return (
        <Layout loggedInUser = {this.props.username}>

    <div class="first">
       <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 content-wrapper">
                        <h1>
                            <p style={{'font-size':'60px'}}>Centsible Dollars</p>
                        </h1>
                        <h4>
                            <p style={{'font-size':'35px'}}>Your one stop solution to saving money effectively!</p>
                        </h4>
                </div>
            </div>
        </div>
        </section>
    </div>

        <br/>

    <div class="second">
        <div class="container">
            <div class="page-section-headline">
                <h2 class="page-section-title">
                     <p style={{"color":"rgb(38,38,38)"}}>Centsible Dollars has helped billions of people around the way reach their saving goals! When was the last time you had substantial savings in your bank account? Ever wished you had some money to spend on that dream holiday? At Centsible Dollars, we believe there is a better way to save your money and reach your goal, no matter how high you set the bar!
                    </p>
                </h2>
        </div>
    </div>
</div>

<br/><br/>

<div class="third">
        <div class="container">
            <div class="form-section-headline">
                <h2 class="form-section-title">
                     <b style={{"font-weight":"700"}}>Get in touch with us</b>
                </h2>
                <br/>
                <form action="/#">
                <label>Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name"/>

                <label>Email Address</label>
                <input type="text" id="lname" name="emailaddress" placeholder="Your email address"/>

                <label>Message</label>
                <textarea id="subject" name="subject" placeholder="Your message" style={{"min-height":"215px"}}></textarea>

                <input disabled="true" id="sendMsgBtn" type="submit" value="Send message"/>
              </form>
        </div>
    </div>
</div>



    </Layout>
    );
  }
}

module.exports = AboutUs;