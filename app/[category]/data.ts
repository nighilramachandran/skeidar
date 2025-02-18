export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

export type ProductCategory = Record<string, Product[]>;

export const productsData: ProductCategory = {
  "all-products": [
    {
      id: 1,
      name: "Sofa",
      image: "https://via.placeholder.com/150",
      price: "$500",
    },
    {
      id: 2,
      name: "Chair",
      image: "https://via.placeholder.com/150",
      price: "$100",
    },
  ],
  "all-beds": [
    {
      id: 1,
      name: "King Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/regulerbare-senger/110758_80x200chia28nmnmpremiumlatexpillar23sort_000_001.jpg?id=nofmzC&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$1200",
    },
    {
      id: 2,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/105438_150x200cm_lysgra_000_0012.jpg?id=OdpN8n&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 3,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/110798_180x200emeraldgreenintegrertsquare19oak_000_001.jpg?id=rvYfpr&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 4,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/108075_sleepiitekstil394antrasitt150x200cmmmmst_000_001.jpg?id=s8Gai%2F&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 5,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/109112_160x200poppy25nmnmpremiumhyperflexrund13sort_000_001.jpg?id=Q0maV%20&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 6,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/110798_180x200emeraldgreenintegrertsquare19oak_000_001.jpg?id=rvYfpr&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 7,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/113247_150x200storm09nmnmxov60sorteben_000_001.jpg?id=V2orLH&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 9,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/113450_150x200mito40nmnmosloomsorteben_000_001.jpg?id=%2FetMb6&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 10,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/114140_tekstil272muldvarpmm150x200cmhvitvasketben_000_001.jpg?id=XgxpRT&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 11,
      name: "King Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/regulerbare-senger/110758_80x200chia28nmnmpremiumlatexpillar23sort_000_001.jpg?id=nofmzC&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$1200",
    },
    {
      id: 12,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/105438_150x200cm_lysgra_000_0012.jpg?id=OdpN8n&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 13,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/110798_180x200emeraldgreenintegrertsquare19oak_000_001.jpg?id=rvYfpr&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 14,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/108075_sleepiitekstil394antrasitt150x200cmmmmst_000_001.jpg?id=s8Gai%2F&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 15,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/109112_160x200poppy25nmnmpremiumhyperflexrund13sort_000_001.jpg?id=Q0maV%20&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 16,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/110798_180x200emeraldgreenintegrertsquare19oak_000_001.jpg?id=rvYfpr&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 17,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/113247_150x200storm09nmnmxov60sorteben_000_001.jpg?id=V2orLH&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 19,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/113450_150x200mito40nmnmosloomsorteben_000_001.jpg?id=%2FetMb6&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
    {
      id: 20,
      name: "Queen Size Bed",
      image:
        "https://www.skeidar.no/globalassets/9999/alle-produkter/alle-senger-og-madrasser/kontinentalsenger/114140_tekstil272muldvarpmm150x200cmhvitvasketben_000_001.jpg?id=XgxpRT&width=393&height=294&rmode=min&quality=75&format=jpg",
      price: "$900",
    },
  ],
  "continental-beds": [
    {
      id: 1,
      name: "Luxury Continental Bed",
      image: "https://via.placeholder.com/150",
      price: "$1500",
    },
  ],
};
