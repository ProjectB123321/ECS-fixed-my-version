import SharedAssetPage from "../../../components/sharedAssetPage";

const GamePage = props => {
  return <SharedAssetPage idParamName='assetId' nameParamName='name' />
}

export default GamePage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
