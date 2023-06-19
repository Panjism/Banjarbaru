import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [-3.457242, 114.810318];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Peta Banjarbaru</title>
        <meta name="description" content="Peta Banjarbaru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>Banjarbaru</h1>

          <Map className={styles.homeMap} width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, GeoJSON, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <GeoJSON
                  url='leaflet/geojson/Banjarbaru.geojson'
                  style={{ color: '#FF0000', fillColor: '#FF0000', fillOpacity: 0.1, fill: 1 }}
                />
              </>
            )}
          </Map>

          <p className={styles.description}>
            <code className={styles.code}>Peta Banjarbaru oleh Kelompok 1</code>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}
