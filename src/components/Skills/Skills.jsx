import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

const Skills = () => {
  return (
    <section id="skills">
      <Title title="Skills" />
      <Fade bottom duration={1000} delay={800} distance="100px">
        <div className="skills-wrapper">
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/html.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">HTML</p>
          </div>
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/css.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">CSS</p>
          </div>
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/typescript.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">TypeScript</p>
          </div>
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/react.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">React</p>
          </div>
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/nextjs.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">Next.js</p>
          </div>
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/gatsby.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">Gatsby</p>
          </div>
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/graphql.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">GraphQL</p>
          </div>
          <div className="skills-wrapper__skill">
            <div className="skills-wrapper__image">
              <StaticImage
                alt="skill picture"
                src="../../images/git.png"
                width="200"
                height="200"
              />
            </div>
            <p className="skills-wrapper__text">Git</p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
