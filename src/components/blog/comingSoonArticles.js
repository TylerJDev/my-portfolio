import { StaticQuery, graphql } from "gatsby"
import React from "react"

const properDate = (str_date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    // [2020-09] || [2020-09-10]
    let curr_month = Number(str_date.split('-')[1] - 1);
    let curr_day = str_date.split('-').length > 2 ? 
    ', ' +  Number(str_date.split('-')[2]) 
    : '';
        
    return months[curr_month] + curr_day;
}

export default function ComingSoonArticles(props) {
    return (
      <StaticQuery
        query={graphql`
          query {
            allUpcomingPostsJson {
              nodes {
                description
                name
                expected
                id
              }
            }
          }
        `}
        render={data => (
          data.allUpcomingPostsJson.nodes.map((currentData, index) => {
            if (props.show || index < 3) {
              return (
                <article className="upcoming_post" key={currentData.id}>
                  📅 <time datetime={currentData.expected}>{properDate(currentData.expected)}</time>
                  <header>
                    <h3>{currentData.name}</h3>
                  </header>
  
                  <section>
                    <p>{currentData.description}</p>
                  </section>
                </article>
              )
            }
          })
        )}
      />
    )
  }