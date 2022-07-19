import React from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components'

export default function Launches() {

  const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_utc
            launch_success
        }
    }
  `;

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {
            ({ loading, error, data }) => {
                if(error) return console.error(`See ERROR  - ${error}`);
                loading ? <h2>Loading....</h2> : <h2>Data Should show see console.log</h2>
                console.log(`data should be shown in this console.log ${data}`);
            }
        }
      </Query>
    </div>
  )
}
