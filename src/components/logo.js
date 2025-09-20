import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Logo = ({ width, height, className }) => {
  const imgProps = {
    ...(width && { width }),
    ...(height && { height }),
    ...(className && { className }),
  };

  const data = useStaticQuery(graphql`
        query TopQuery {
            site {
                siteMetadata {
                    titolo
                }
            }
            logoQuery: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        formats: [AUTO, WEBP]
                        placeholder: BLURRED
                        width: 170
                        height: 170
                        quality: 80
                        layout: CONSTRAINED
                    )
                }
            }
        }
    `);

  // console.log("data", data);

  const logoTopData = data?.logoQuery?.childImageSharp?.gatsbyImageData;
  imgProps.className = className ? `${className} logo` : 'logo';

  return (
    <Link to="/" aria-label="Vo.Ci. nei castelli" className="logo">
      <GatsbyImage
        {...imgProps}
        image={logoTopData}
        alt={`Logo ${data?.site?.siteMetadata?.titolo || ''}`}
        className='logoImg'
      />
    </Link>
  );
};

export default Logo;
