import React from 'react';
// import { useInfiniteQuery } from 'react-query';

function Projects() {
  const fetchProjects = async (key, cursor = 1) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('response', response.posts);
    return response;
  };

  // const {
  //   status,
  //   data,
  //   error,
  //   isFetching,
  //   isFetchingMore,
  //   fetchMore,
  //   canFetchMore,
  // } = useInfiniteQuery('projects', fetchProjects, {
  //   getFetchMore: (lastGroup, allGroups) => lastGroup.nextCursor,
  // });
  fetchProjects();
  // console.log('[TLOG]: Projects -> res', res);
  return <span>hhhh</span>;
  // return status === 'loading' ? (
  //   <p>Loading...</p>
  // ) : status === 'error' ? (
  //   <p>Error: {error.message}</p>
  // ) : (
  //   <>
  //     {data.map((group, i) => (
  //       <React.Fragment key={i}>
  //         {group.projects.map((project) => (
  //           <p key={project.id}>{project.name}</p>
  //         ))}
  //       </React.Fragment>
  //     ))}
  //     <div>
  //       <button
  //         onClick={() => fetchMore()}
  //         disabled={!canFetchMore || isFetchingMore}
  //       >
  //         {isFetchingMore
  //           ? 'Loading more...'
  //           : canFetchMore
  //           ? 'Load More'
  //           : 'Nothing more to load'}
  //       </button>
  //     </div>
  //     <div>{isFetching && !isFetchingMore ? 'Fetching...' : null}</div>
  //   </>
  // );
}

export default Projects;
