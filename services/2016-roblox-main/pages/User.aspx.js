import { useRouter } from "next/dist/client/router";

const UserPage = props => {
  return null;
}

export async function getServerSideProps({ query }) {
  const userId = query?.['ID'] || '';
  return {
    redirect: {
      destination: `/users/${userId}/profile`,
      permanent: false,
    },
  };
}

export default UserPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
