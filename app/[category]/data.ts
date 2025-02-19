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
      name: "putekasser",
      image:
        "https://www.skeidar.no/globalassets/113126_natur_100_001.jpg?id=%2F6wdEQ&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 2,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/105585_hjornesofa23tekstilbrego3greymedsorteben9_100_001.jpg?id=lnmFv6&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 3,
      name: "gulvtepper",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-tepper/gulvtepper/103414_160x230cm_hvit_100_001.jpg?id=e6uVAE&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 4,
      name: "stoler",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-stoler/krakker-til-lenestoler/109975_hudbaticklatteclassicsmokeoak_100_001.jpg?id=TqQzHt&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 5,
      name: "kommoder",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/all-oppbevaring-og-skap/kommoder/110658_4_sort_smal_100_001.jpg?id=Xz1W8T&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },

    {
      id: 6,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106389_120x200cm_gra_100_001.jpg?id=rdGp59&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 7,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/105588_14575144277armeglege8_100_001.jpg?id=WlKZQ0&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 8,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/109716_75x200pine54nmpremiumhyperflexrund23sort_100_001.jpg?id=1%2FPj%2FO&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 9,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/106105_4400041_100_001.jpg?id=Li6bqb&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
  ],
  [ALL_SOFA]: [
    {
      id: 1,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/105585_hjornesofa23tekstilbrego3greymedsorteben9_100_001.jpg?id=lnmFv6&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 2,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/105588_14575144277armeglege8_100_001.jpg?id=WlKZQ0&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 3,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/106105_4400041_100_001.jpg?id=Li6bqb&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 4,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/106437_oev2brego34beigesorteben_100_001.jpg?id=c%20OSyH&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 5,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/107205_oppsett3_sort_venstre_100_001.jpg?id=4EgJQc&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
    {
      id: 6,
      name: "Sofa",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-sofaer/sofa/108067_25oehbrego14hvitoljeteikben1armf_100_001.jpg?id=%2FjhJuX&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 1999.34,
    },
  ],
  [CONTINENTAL_BEDS]: [
    {
      id: 1,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106198_75x200181nmutenovermadrassutenben_100_001.jpg?id=IczldL&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 2,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106346_120x200cm_beige_100_001.jpg?id=iGrsLp&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 3,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106347_120x200cm_gra_100_001.jpg?id=KJajcG&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 5,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106346_120x200cm_beige_100_001.jpg?id=iGrsLp&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 5,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106347_120x200cm_gra_100_001.jpg?id=KJajcG&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 6,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/106389_120x200cm_gra_100_001.jpg?id=rdGp59&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 7,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/109716_75x200pine54nmpremiumhyperflexrund23sort_100_001.jpg?id=1%2FPj%2FO&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
    {
      id: 8,
      name: "Kontinentalsenger",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/rammemadrasser/113890_120x200cm_gra_100_001.jpg?id=GsQ5%2Ff&width=393&height=294&rmode=crop&quality=75&format=jpg",
      price: 899.34,
    },
  ],
};
