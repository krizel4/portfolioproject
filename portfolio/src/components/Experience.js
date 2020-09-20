import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='resume-section' id='experience'>
            <h1>Experience</h1>
            <Tabs>
              <TabPanel>
                <div>
                  <h3>
                    Digital Marketing Strategist
                    <span class='date'>August 2019 - Present</span>
                  </h3>
                  <p class='experience-content'>
                    Collaborate with the marketing manager to plan and develop
                    e-mail marketing campaigns for different customer paths.
                    Improved open rate from 2020 Q1 to 2020 Q2 (27% to 33%),
                    while maintaining an open-rate above the industry average
                    (18%) throughout 2019.
                  </p>
                  <p class='experience-content'>
                    Brainstorm new and creative growth strategies and evaluate
                    emerging technologies to maximize campaign effectiveness and
                    prospect behavior visibility. Led a multi-month project to
                    architect a marketing automation system (Pardot) and
                    integration with Salesforce. Launched full-channel marketing
                    program to drive lead generation and SQL conversions.
                  </p>
                  <p class='experience-content'>
                    Develop and oversee web content ideas for various assets,
                    such as the website, and e-mail campaigns. Also, regularly
                    develop surveys for research and product development.
                  </p>
                  <p class='experience-content'>
                    Serve as the go-to Pardot and Salesforce lead and resource
                    to the sales and marketing team.
                  </p>
                </div>
              </TabPanel>

              <TabPanel>
                <div>
                  <h3>
                    Marketing Manager
                    <span class='date'>July 2014 - Nov. 2019</span>
                  </h3>

                  <p class='experience-content'>
                    Developed and executed campaign strategies for multiple
                    assets such as print, website, and social. Also developed
                    relationships with key industry players to establish brand
                    credibility. From 2016 to 2017, inquiries tripled, resulting
                    in a 42% revenue increase.
                  </p>
                  <p class='experience-content'>
                    Tracked and analyzed SEO campaigns and keywords (web and
                    Pinterest) to craft strategies that drive online traffic.
                    Consistently maintained top page rankings for profitable,
                    relevant keywords. Generated over 250K views per month on
                    Pinterest.
                  </p>
                  <p class='experience-content'>
                    Improve the consumer experience by identifying growth
                    trends, researching conditions that affect the wedding
                    industry, and compiling competitor analysis. Earned over 11
                    awards based on consumer experience from The Knot, Wedding
                    Wire, and Expertise.com. Earned Hall of Fame with The Knot
                    in 2020.
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <h3>
                    Digital Marketing Strategist
                    <span class='date'>Feb. 2016 - Jan. 2017</span>
                  </h3>
                  <p class='experience-content'>
                    Reported to and collaborated directly with the president of
                    the company to develop and implement creative development,
                    content creation, and branding for various assets, including
                    the first website launch of its top-performing sister
                    company, Certified Meat Company.
                  </p>
                  <p class='experience-content'>
                    Oversaw SEO campaigns and regularly reviewed web analytics
                    to build website traffic.
                  </p>
                  <p class='experience-content'>
                    Core strategist to direct and execute content development
                    for all JD Food digital real estate (including Twitter,
                    Facebook, Instagram, and websites).
                  </p>
                  <p class='experience-content'>
                    Performed regular research on relevant markets and products,
                    such as audience targeting to perform ongoing optimization
                    for lead generation.
                  </p>
                  <p class='experience-content'>
                    Instrumental lead to the company’s creative, such as the
                    branding for one of its staple meat seasoning products.
                  </p>
                </div>
              </TabPanel>

              <TabPanel>
                <div>
                  <h3>
                    Outreach Lead
                    <span class='date'>June 2010 - July 2015</span>
                  </h3>
                  <p class='experience-content'>
                    Directed and coached student leaders with outreach training.
                    Provided opportunities to reach out to their local community
                    through volunteer services and expand its chapters’ growth.
                  </p>
                  <p class='experience-content'>
                    Developed campus-wide events and initiatives to promote
                    chapter presence; increased growth by 36% within a year
                    (2013 – 2014). Created a campaign that started at a single
                    campus, then became a nationwide company initiative.
                  </p>
                  <p class='experience-content'>
                    Fundraised over $500K (over the course of 5 years) for
                    chapter funds through local networking, fundraising events,
                    e-mail marketing, and social media.
                  </p>
                </div>
              </TabPanel>

              <TabList>
                <Tab>
                  <div>
                    <h3>Granville&nbsp;Homes</h3>
                  </div>
                </Tab>
                <Tab>
                  <div>
                    <h3>Krizel&nbsp;Photography</h3>
                  </div>
                </Tab>
                <Tab>
                  <div>
                    <h3>JD Food</h3>
                  </div>
                </Tab>
                <Tab>
                  <div>
                    <h3>InterVarsity</h3>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
