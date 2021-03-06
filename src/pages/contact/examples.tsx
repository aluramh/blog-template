import React, { FC } from "react";
import Layout from "../../components/Layout";
import CustomLink from "../../components/CustomLink";

interface Props {}

const Index: FC<Props> = (props) => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Hi people</h1>
            <p>
              This is an example site integrating Netlify’s form handling with
              Gatsby
            </p>
            <ul>
              <li>
                <CustomLink to="/contact">Basic contact form</CustomLink>
              </li>
              <li>
                <CustomLink to="/contact/file-upload/">
                  Form with file upload
                </CustomLink>
              </li>
            </ul>

            <h2>Troubleshooting</h2>
            <h3>Forms stop working after upgrading to Gatsby v2</h3>
            <p>
              This can be caused by the offline-plugin.{" "}
              <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">
                Workaround
              </a>{" "}
              is to use <code>?no-cache=1</code> in the POST url to prevent the
              service worker from handling form submissions
            </p>
            <h3>Adding reCAPTCHA</h3>
            <p>
              If you are planning to add reCAPTCHA please go to{" "}
              <a href="https://github.com/imorente/gatsby-netlify-form-example">
                imorente/gatsby-netlify-form-example
              </a>{" "}
              for a working example.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
