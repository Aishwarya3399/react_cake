import React, { useState } from "react";
import "./Career.css"; // Import CSS for styling if needed

const Career = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleVisibility = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="condition">
      <div className="career">
        <h1 className="text-center">Career</h1>
      </div>
      <div className="career1">
        <img src="../images/hiring-desk.jpg" className="w-100" alt="Hiring Desk" />
      </div>
      <div className="career2">
        <p>
          We represent a fast-growing company that is inhabited by a group of highly talented and selective people who determine, design, and drive this very growth. We have worked hard to build our brand that has now become synonymous with our commitment – ‘to create the best possible experience’.
        </p>
        <p>
          At FlowerAura, we're constantly looking for people who want to join us in our pursuit and be part of a team that creates campaigns that deliver on it. You will be an active member of the team from the first day, for we don’t believe in passiveness. You are here to pull off the master piece -Your Life’s Work, something for which you will be remembered for. You can do this kind of work at FlowerAura. A place where we firmly believe – Imagination is above the knowledge!
        </p>
        <p>
          Interested candidates may send your resume to <a href="mailto:career@floweraura.com">career@floweraura.com</a>
        </p>
      </div>

      <div className="container mt-5">
        {/* Assistant Manager - SEO */}
        <div className="row mt-5">
          <div className="col-md-12 career3">
            <h3 className="positionHeading" onClick={() => toggleVisibility(0)}>
              Position: Assistant Manager - SEO
            </h3>
            {activeIndex === 0 && (
              <div className="skillsList">
                <h5>Experience: 3 to 5 years</h5>
                <p>Job Summary:</p>
                <ul>
                  <li>Familiarization with Google Analytics & Webmasters</li>
                  <li>Administering Google Webmaster to diagnose issues on the website.</li>
                  <li>Keeping updated on both white hat and black hat SEO strategies to avoid penalties from search engines.</li>
                  <li>Knowledge of major Google updates like Mobile First Index, Hummingbird, Panda, Penguin, etc.</li>
                  <li>... (other points)</li>
                </ul>
                <p>
                  Interested candidates may send your resume to <a href="mailto:career@floweraura.com">career@floweraura.com</a> with Subjectline: Assistant Manager - SEO
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SEM Executive */}
        <div className="row mt-5">
          <div className="col-md-12 career3">
            <h3 className="positionHeading" onClick={() => toggleVisibility(1)}>
              Position: SEM Executive
            </h3>
            {activeIndex === 1 && (
              <div className="skillsList">
                <h5>Experience: 2 to 3 years</h5>
                <p>Job Summary:</p>
                <ul>
                  <li>Perform daily account management of pay per click accounts on Google Ads, Bing Ads, and Facebook.</li>
                  <li>Monitor SEM (Search Engine Marketing) KPIs, analyze performance, and create reports.</li>
                  <li>Devise strategies to increase Conversions, ROI, and Traffic goals - such as A/B testing, Remarketing, etc.</li>
                  <li>... (other points)</li>
                </ul>
                <p>
                  Interested candidates may send your resume to <a href="mailto:career@floweraura.com">career@floweraura.com</a> with Subjectline: SEM Executive
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Retention Executive */}
        <div className="row mt-5">
          <div className="col-md-12 career3">
            <h3 className="positionHeading" onClick={() => toggleVisibility(2)}>
              Position: Retention Executive
            </h3>
            {activeIndex === 2 && (
              <div className="skillsList">
                <h5>Experience: 2 to 3 years</h5>
                <p>Job Summary:</p>
                <ul>
                  <li>Perform daily account management of pay per click accounts on Google Ads, Bing Ads, and Facebook.</li>
                  <li>Monitor SEM (Search Engine Marketing) KPIs, analyze performance, and create reports.</li>
                  <li>Devise strategies to increase Conversions, ROI, and Traffic goals - such as A/B testing, Remarketing, etc.</li>
                  <li>... (other points)</li>
                </ul>
                <p>
                  Interested candidates may send your resume to <a href="mailto:career@floweraura.com">career@floweraura.com</a> with Subjectline: Retention Executive
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Engineering Manager */}
        <div className="row mt-5">
          <div className="col-md-12 career3">
            <h3 className="positionHeading" onClick={() => toggleVisibility(3)}>
              Position: Engineering Manager
            </h3>
            {activeIndex === 3 && (
              <div className="skillsList">
                <h5>Experience: 2 to 3 years</h5>
                <p>Job Summary:</p>
                <ul>
                  <li>Perform daily account management of pay per click accounts on Google Ads, Bing Ads, and Facebook.</li>
                  <li>Monitor SEM (Search Engine Marketing) KPIs, analyze performance, and create reports.</li>
                  <li>Devise strategies to increase Conversions, ROI, and Traffic goals - such as A/B testing, Remarketing, etc.</li>
                  <li>... (other points)</li>
                </ul>
                <p>
                  Interested candidates may send your resume to <a href="mailto:career@floweraura.com">career@floweraura.com</a> with Subjectline: Engineering Manager
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
