import aboutImg from "../assets/NabeelAkram.jpeg";

function About() {
    return (<>
              <div className="top-heading">
        <h1 >About Me</h1>
        <p>My journey, skills, and experience.</p>
      </div>
        <section className="aboutme-section">

            <div className="aboutme-container">

                {/* LEFT SIDE — TEXT */}
                <div className="aboutme-content">
                    <h2>About Me</h2>

                    <h1>More than just code.
                         <br />
                         <span>I build business assets.</span></h1>

                    <p>
                        With over 4 years of experience and 100+ successful stores, I don't just
                        "build websites." I engineer Shopify solutions that solve business
                        problems. Whether you're a brand looking to scale or an agency needing
                        a reliable partner, I deliver production-grade code that scales.
                    </p>

                    <p>
                        As a Top Rated Upwork developer and published Shopify app developer
                        with 2 live apps in the official Shopify App Store (rated 5.0★), I bring
                        deep ecosystem knowledge that most theme developers lack. My apps—
                        <strong> StoreHarvest </strong> and <strong> SureDrip </strong>—are used by real merchants daily.
                    </p>

                    <p>
                        <strong>For agencies:</strong> I offer white-label technical partnership. I handle
                        the complex overflow work that slows your team down—custom apps, API
                        integrations, and headless builds—so you can scale your capacity without
                        the hiring headaches.
                    </p>
                </div>

                {/* RIGHT SIDE — IMAGE */}
                <div className="aboutme-image">
                    <img
                        src={aboutImg}
                        alt="About Me"
                    />
                </div>

            </div>
        </section>


                {/* LEFT SIDE — TEXT */}
         <section className="about-paragraph-section">
      <div className="about-paragraph-box">

        <h2>About Me</h2>

        <p>
          I am a Shopify and Frontend developer with more than 4 years of experience.
          I focus on building business-focused solutions rather than just simple websites.
          My goal is to help brands grow, optimize performance, and scale smoothly.
        </p>

        <p>
          I have worked on 100+ Shopify stores and delivered production-grade solutions.
          I have also built and published Shopify apps used by real merchants daily.
          My work includes theme customization, app development, API integrations and
          performance optimization.
        </p>

        <p>
          I also collaborate with agencies as a white-label partner and handle complex tasks
          like custom apps and headless builds, helping them increase capacity without hiring.
        </p>

      </div>
    </section>

        </>
    );
}

export default About;
