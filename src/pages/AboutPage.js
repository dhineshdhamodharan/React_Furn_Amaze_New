import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Established in the year 1999 at Chennai (Tamil Nadu, India), “Furn
            World” is renowned as one of the finest Manufacturer, Exporter and
            Supplier of various types of Furniture. In our product range, we
            provide Kids Study Table, Shoe Rack, Study Table, Computer Table and
            TV Stand. In addition to this, we also manufacture, export and
            supply Office Table, Chairs, Cots/Beds, Dining Set and Carving
            Deewan Sofa. In order to meet the need of the customers at home and
            abroad, we have set up a professional website with an English
            version, in which there are varieties of products, different styles,
            preferable price, etc. Taking the advantage of this opportunity, we
            promote a "Hot Summer--Cool Preferential" activity, where clients
            can choose the product they like on the website and then contact us
            by E-mail, Telephone, etc.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
