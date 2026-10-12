const UserPage = props => {
  return null;
}

export async function getServerSideProps({ query }) {
  try {
    const userId = query?.['ID'] || '';
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
