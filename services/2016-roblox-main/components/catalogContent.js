import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import AdBanner from "./ad/adBanner";
import CatalogFilters from "./catalogFilters";
import CatalogLegend from "./catalogLegend";
import CatalogPageInput from "./catalogPageInput";
import CatalogPageNavigation from "./catalogPageNavigation";
import CatalogPageResults from "./catalogPageResults";
import CatalogPageStore from "../stores/catalogPage";

const useStyles = createUseStyles({
  title: {
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '12px',
    color: '#343434',
  },
  catalogContainer: {
    backgroundColor: '#fff',
    padding: '2px 4px',
  },
});

export default function CatalogContent() {
  const [isMounted, setIsMounted] = useState(false);
  const s = useStyles();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <CatalogPageStore.Provider>
      <div className='container mt-4'>
        <AdBanner />
        <div className={s.catalogContainer}>
          <div className='row mt-2'>
            <div className='col-12 col-md-4 col-lg-2'>
              <h1 className={s.title}>Catalog</h1>
            </div>
            <div className='col-12 col-md-8 col-lg-10'>
              <CatalogPageInput />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-4 col-lg-2'>
              <div className='divider-right'>
                <div className='pe-2'>
                  <CatalogPageNavigation />
                  <CatalogFilters />
                  <CatalogLegend />
                </div>
              </div>
            </div>
            <div className='col-12 col-md-8 col-lg-10'>
              <CatalogPageResults />
            </div>
          </div>
        </div>
      </div>
    </CatalogPageStore.Provider>
  );
}
