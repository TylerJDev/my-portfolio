import { StaticQuery, graphql } from "gatsby"
import React from "react"
import projectStyles from "./project.module.scss"

export default function Projects(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allProjectsJson {
            nodes {
              description
              name
              builtWith
              id
              linkTo
            }
          }
        }
      `}
      render={data => (
        data.allProjectsJson.nodes.map((currentData, index) => {
          if (props.show || index < 3) {
            return (
            <div className={projectStyles.project + ' projects__outer'} key={currentData.id}>
              <a href={currentData.linkTo} className={projectStyles.project_link + ' projects__link'}>
                <div className={projectStyles.project_inner + ' projects__inner'}>
                  <div className={projectStyles.project_title}>
                  <h3>{currentData.name.replace(/[-]/g, ' ')}</h3>
                  </div>
                  <div className={projectStyles.project_bio}>
                    <p>{currentData.description.substring(0, 64)}{currentData.description.length > 64 ? '...' : ''}</p>
                  </div>

                  <div className={projectStyles.project_skills}>
                    <ul>
                      {currentData.builtWith.map((skill) => 
                        <li key={currentData.id + '__' + skill}>{skill}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </a>
            </div>
            )
          }
        })
      )}
    />
  )
}