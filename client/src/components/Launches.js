import React from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import LaunchItem from './LaunchItem';

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
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {
            ({ loading, error, data }) => {
                if(loading) return <h2>Loading.....</h2>
                if(error) return console.error(`See ERROR  - ${error}`);
                console.log(data);

                return (
                    <>
                    {
                        data.launches.map( launch => (
                            <LaunchItem key={launch.flight_number} launch={launch} />
                        
                        ))
                    }
                    </>
                )
            }
        }
      </Query>
    </>
  )
}
