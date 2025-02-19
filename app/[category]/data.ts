import { ROUTES } from "../utils/RouteConfig";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export type ProductCategory = Record<string, Product[]>;

const { ALL_PRODUCTS, ALL_SOFA, CONTINENTAL_BEDS } = ROUTES;

export const productsData: ProductCategory = {
  [ALL_PRODUCTS]: [
    {
      id: 1,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/105438_150x200cm_lysgra_000_0012.jpg?id=OdpN8n&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 2,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/105585_25oehbropoklyn9armfhvitoljetben1_000_001.jpg?id=kyrTHz&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },

    {
      id: 4,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/112295_oev2sjhneve85sorteben_000_001.jpg?id=i2bke8&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 3,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/108075_sleepiitekstil394antrasitt150x200cmmmmst_000_001.jpg?id=s8Gai%2F&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 10,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/113840_oev3bhnivuslincremearm16duofir16naturskum_000_001.jpg?id=G7Q84y&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 5,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/109112_160x200poppy25nmnmpremiumhyperflexrund13sort_000_001.jpg?id=Q0maV%20&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 900,
    },

    {
      id: 7,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/113247_150x200storm09nmnmxov60sorteben_000_001.jpg?id=V2orLH&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 6,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/112754_2oehbjorn34sorteben_000_001.jpg?id=giGdxt&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 8,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/113952_portlandhjornesofavenstreherby35greymedsorteben_000_001.jpg?id=QOP8kx&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },

    {
      id: 9,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/114140_tekstil272muldvarpmm150x200cmhvitvasketben_000_001.jpg?id=XgxpRT&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 900,
    },

    {
      id: 11,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/105438_150x200cm_lysgra_000_0012.jpg?id=OdpN8n&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 12,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/112295_oev2sjhneve85sorteben_000_001.jpg?id=i2bke8&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
  ],
  [ALL_SOFA]: [
    {
      id: 1,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/105585_25oehbropoklyn9armfhvitoljetben1_000_001.jpg?id=kyrTHz&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 2,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/112295_oev2sjhneve85sorteben_000_001.jpg?id=i2bke8&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 3,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/112754_2oehbjorn34sorteben_000_001.jpg?id=giGdxt&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 4,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/113840_oev3bhnivuslincremearm16duofir16naturskum_000_001.jpg?id=G7Q84y&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 5,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/113952_portlandhjornesofavenstreherby35greymedsorteben_000_001.jpg?id=QOP8kx&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 6,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/105585_25oehbropoklyn9armfhvitoljetben1_000_001.jpg?id=kyrTHz&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 7,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/112295_oev2sjhneve85sorteben_000_001.jpg?id=i2bke8&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 8,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/112754_2oehbjorn34sorteben_000_001.jpg?id=giGdxt&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 9,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/113840_oev3bhnivuslincremearm16duofir16naturskum_000_001.jpg?id=G7Q84y&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
    {
      id: 10,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/113952_portlandhjornesofavenstreherby35greymedsorteben_000_001.jpg?id=QOP8kx&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: 1200,
    },
  ],
  [CONTINENTAL_BEDS]: [
    {
      id: 1,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106198_75x200181nmutenovermadrassutenben_100_001.jpg?id=IczldL&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 2,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106346_120x200cm_beige_100_001.jpg?id=iGrsLp&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 3,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106347_120x200cm_gra_100_001.jpg?id=KJajcG&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 5,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106346_120x200cm_beige_100_001.jpg?id=iGrsLp&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 5,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106347_120x200cm_gra_100_001.jpg?id=KJajcG&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 6,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106389_120x200cm_gra_100_001.jpg?id=rdGp59&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 7,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/109716_75x200pine54nmpremiumhyperflexrund23sort_100_001.jpg?id=1%2FPj%2FO&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    {
      id: 8,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/113890_120x200cm_gra_100_001.jpg?id=GsQ5%2Ff&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 900,
    },
    // {
    //   id: 1,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/105438_150x200cm_lysgra_000_0012.jpg?id=OdpN8n&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },
    // {
    //   id: 2,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/108075_sleepiitekstil394antrasitt150x200cmmmmst_000_001.jpg?id=s8Gai%2F&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },
    // {
    //   id: 3,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/109112_160x200poppy25nmnmpremiumhyperflexrund13sort_000_001.jpg?id=Q0maV%20&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },

    // {
    //   id: 4,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/113247_150x200storm09nmnmxov60sorteben_000_001.jpg?id=V2orLH&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },

    // {
    //   id: 5,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/114140_tekstil272muldvarpmm150x200cmhvitvasketben_000_001.jpg?id=XgxpRT&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },

    // {
    //   id: 6,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/105438_150x200cm_lysgra_000_0012.jpg?id=OdpN8n&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },

    // {
    //   id: 7,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/109112_160x200poppy25nmnmpremiumhyperflexrund13sort_000_001.jpg?id=Q0maV%20&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },
    // {
    //   id: 8,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/113247_150x200storm09nmnmxov60sorteben_000_001.jpg?id=V2orLH&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },
    // {
    //   id: 9,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/114140_tekstil272muldvarpmm150x200cmhvitvasketben_000_001.jpg?id=XgxpRT&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },
    // {
    //   id: 10,
    //   name: "Kontinentalsenger",
    //   image:
    //     "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/109112_160x200poppy25nmnmpremiumhyperflexrund13sort_000_001.jpg?id=Q0maV%20&width=393&height=294&rmode=min&quality=75&format=jpg",
    //   price: 900,
    // },
  ],
};
