import Image from "next/legacy/image";
import React from "react";
import { urlFor } from "../lib/sanity";

import iconGit from "../public/images/iconGit.png";
import iconLink from "../public/images/iconLink.png";

const Featured = ({ featured }: any) => {
  return (
    <>
      {featured.slice(0, 3).map((work: any, index: any) => (
        <article key={index} className="featured" id="Work">
          <div className="featured__container">
            <div className="featured__left">
              <h3 className="featured__name">{work.title}</h3>

              <div className="featured__tags">
                {work.tags.map((tag: any, index: any) => (
                  <div key={index} className="featured__tag">
                    {tag}
                  </div>
                ))}
              </div>

              <p className="featured__desc">{work.description}</p>

              <div className="featured__icons">
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <div className="featured__icon">
                    <Image src={iconGit} alt="" width={20} height={20} />
                  </div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <div className="featured__icon">
                    <Image src={iconLink} alt="" width={20} height={20} />
                  </div>
                </a>
              </div>
            </div>

            <div className="featured__image-container">
              <a href={work.projectLink} target="_blank" rel="noreferrer">
                <div className="featured__image-box">
                  <Image
                    src={urlFor(work.imgUrl).url()!}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="featured__image"
                  />
                </div>
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Featured;
