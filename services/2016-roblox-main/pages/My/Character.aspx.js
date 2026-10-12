import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { createUseStyles } from "react-jss";

// Bileşenleri SSR'ı kapatarak dinamik olarak yüklüyoruz
const CharacterPage = dynamic(() => import("../../components/characterCustomizerPage"), { ssr: false });
const AdBanner = dynamic(() => import("../../components/ad/adBanner"), { ssr: false });

const useCharacterPageStyles = createUseStyles({
  header: {
    fontWeight: 700,
    marginBottom: 0,
    marginTop: 0,
    fontSize: '30px',
  },
  characterContainer: {
    background: '#fff',
    padding: '4px 8px',
    overflow: 'hidden',
  },
});

const MyCharacterPage = props => {
  const [mounted, setMounted] = useState(false);
  const s = useCharacterPageStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sunucu tarafında (build sırasında) hata oluşmaması için ilk başta boş döndürüyoruz
  if (!mounted) {
    return null;
  }

  // Store'u sadece istemci tarafında çağırıyoruz
  const CharacterCustomizationStore = require("../../stores/characterPage").default;

  return (
    <div className='container'>
      <AdBanner context='MyCharacterPage'/>
      <div className={s.characterContainer}>
        <div className='row mt-2'>
          <div className='col-12 ps-4 pe-4'>
            <h1 className={s.header}>Character Customizer</h1>
          </div>
        </div>
        <CharacterCustomizationStore.Provider>
          <CharacterPage/>
        </CharacterCustomizationStore.Provider>
      </div>
    </div>
  );
}

export default MyCharacterPage;

export async function getServerSideProps() {
  try {
    return {
      props: {
        title: 'Character Customizer - Eggs21',
      },
    };
  } catch (err) {
    return {
      props: {
        title: 'Character Customizer - Eggs21',
      },
    };
  }
}
