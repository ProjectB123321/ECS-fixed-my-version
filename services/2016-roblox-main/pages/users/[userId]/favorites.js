import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Sunucu tarafında hata vermemesi için dinamik import kullanıyoruz
const UserInventory = dynamic(() => import("../../../components/userInventory"), { ssr: false });

const UserFavoritesPage = props => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build sırasında sunucuda hata oluşmaması için ilk başta boş döndürüyoruz
  if (!mounted) {
    return null;
  }

  const { userId } = props;

  return <UserInventory userId={userId} mode='Favorites'/>;
}

export default UserFavoritesPage;

export async function getServerSideProps(context) {
  const userId = context.query?.userId || null;

  return {
    props: {
      userId,
    },
  };
}
