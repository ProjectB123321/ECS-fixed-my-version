import dynamic from "next/dynamic";

// Sunucu tarafında hata vermemesi için bileşeni dinamik olarak yüklüyoruz
const UpdatePlace = dynamic(() => import("../../../components/updatePlace"), { ssr: false });

const PlaceUpdatePage = props => {
  const { placeId } = props;

  if (!placeId)
    return null;

  return <UpdatePlace placeId={placeId} />;
}

export default PlaceUpdatePage;

export async function getServerSideProps(context) {
  try {
    const placeId = context.params?.placeId || context.query?.placeId || null;

    // Build aşamasında statik export veya ön derleme sırasında parametre yoksa güvenli çıkış yapıyoruz
    if (!placeId) {
      return {
        props: {
          placeId: null,
          title: 'Update Place - Eggs21',
        },
      };
    }

    return {
      props: {
        placeId,
        title: 'Update Place - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        placeId: null,
        title: 'Update Place - Eggs21',
      },
    };
  }
}
