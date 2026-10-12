import SharedAssetPage from "../../../components/sharedAssetPage";

const ItemPage = props => {
  return <SharedAssetPage idParamName='assetId' nameParamName='name' />
}
export default ItemPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
