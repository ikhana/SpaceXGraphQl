import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { SingleLaunch } from './SingleLaunch';
import { MissionState } from './MissionState';;


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (

    <div>
      
      <div class="card text-black border-danger  my-3" style={{
        width: "70rem"
         }}>
  <div class="card-body">
  <h1 className='display-3 my-9 ml-10rem'>Launches</h1>
    
  </div>
</div>
      <MissionState />
      {data.launches.map(launch => (
        <SingleLaunch key={launch.flight_number} launch={launch} />))}

    </div>
  );
}


export default Launches;

