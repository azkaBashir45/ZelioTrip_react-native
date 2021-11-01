import { responsive } from "./responsive";

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius1: 30,
    radiusCard:70,
    radius2: 10,
    padding: 24,

    // font sizes
    largeTitle: 45,
    h1: 35,
    h2: 28,
    h3: 22,
    h4: 18,
    h5:14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1,  },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2,  },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3,  },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4,  },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5,  },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1,  },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2,  },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3,  },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4,  },
};

const appTheme = {  SIZES, FONTS };

export default appTheme;

