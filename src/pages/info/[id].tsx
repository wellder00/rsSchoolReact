import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getPokemon, getPokemons } from '@/lib/services/pokemonApi';
import Head from 'next/head';
import React from 'react';

import { CardInfo } from '@/components/CardInfo';
import { wrapper } from '@/lib/redux';
import { Pokemon } from '@/types/interfaces';
import Layout from '../Layout';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const pokemon = typeof context.query.pokemon === 'string' ? context.query.pokemon : '';
    const limit = typeof context.query.limit === 'string' ? parseInt(context.query.limit) : 4;
    const offset = typeof context.query.offset === 'string' ? parseInt(context.query.offset) : 0;
    const { id } = context.params || {};
    let pokemonData: Pokemon | null = null;

    if (id) {
      pokemonData = await store.dispatch(getPokemon.initiate(+id)).unwrap();
    }

    const data = await store.dispatch(getPokemons.initiate({ pokemon, limit, offset })).unwrap();
    let ids: string[] = [];

    if (data.results) {
      ids = data.results.map((data: { name: string; url: string }) => {
        const matchResult = data.url.match(/\/(\d+)\/$/);
        return matchResult ? matchResult[1] : '';
      });
    }

    const pokemons = ids
      ? await Promise.all(
          ids.map(async (id: string) => {
            const pokemon = await store.dispatch(getPokemon.initiate(id)).unwrap();
            return {
              id: pokemon.id,
              name: pokemon.name,
              weight: pokemon.weight,
              height: pokemon.height,
              sprites: pokemon.sprites.front_shiny,
            };
          })
        )
      : [];

    if (!pokemons || !pokemonData) {
      return { notFound: true };
    }

    const pokemonSearch = data.name
      ? [
          {
            id: data.id,
            name: data.name,
            weight: data.weight,
            height: data.height,
            sprites: data.sprites.front_shiny,
          },
        ]
      : [];

    if (data.count) {
      return {
        props: {
          pokemonData,
          count: data.count,
          pokemons,
        },
      };
    } else
      return {
        props: {
          pokemonData,
          count: 0,
          pokemons: pokemonSearch,
        },
      };
  }
);

const AboutPage: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  pokemonData,
  pokemons,
  count,
}) => {
  return (
    <>
      <Head>
        <title>Info</title>
      </Head>
      <Layout pokemons={pokemons} count={count}>
        <CardInfo pokemonData={pokemonData} />
      </Layout>
    </>
  );
};

export default AboutPage;
