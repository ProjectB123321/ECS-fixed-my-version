const UserPage = props => {
  return null;
}

export async function getServerSideProps(context) {
  try {
    const query = context?.query || {};
    const userId = query['ID'] || query['id'];

    if (!userId) {
      return {
        redirect: {
          destination: '/home',
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: `/users/${userId}/profile`,
        permanent: false,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }
}

export default UserPage;
