"use client";
import { useEffect } from "react";
import styles from "../styles/ShopifyBuyButton.module.css";

let isScriptLoaded = false;
let isInitialized = false;

export default function ShopifyBuyButton() {
  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function ShopifyBuyInit() {
      // Prevent double initialization
      if (isInitialized) return;
      if (!window.ShopifyBuy) return;

      isInitialized = true;
      const client = window.ShopifyBuy.buildClient({
        domain: "3mmge0-5i.myshopify.com",
        storefrontAccessToken: "534f6dafcb0b972f9466a5b6db578908",
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("product", {
          id: "8055338434660",
          node: document.getElementById("product-component-1746366617053"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                  },
                },
                "carousel-button": {
                  display: "none",
                },
                button: {
                  color: "#000000",
                  ":hover": {
                    color: "#000000",
                    "background-color": "#e6e6e6",
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6",
                  },
                },
              },
              contents: {
                img: false,
                imgWithCarousel: true,
              },
              width: "580px",
              text: {
                button: "Add to cart",
              },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  color: "#000000",
                  ":hover": {
                    color: "#000000",
                    "background-color": "#e6e6e6",
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6",
                  },
                },
              },
              text: {
                button: "Add to cart",
              },
            },
            option: {},
            cart: {
              styles: {
                button: {
                  color: "#000000",
                  ":hover": {
                    color: "#000000",
                    "background-color": "#e6e6e6",
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6",
                  },
                },
              },
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#ffffff",
                  ":hover": {
                    "background-color": "#e6e6e6",
                  },
                  ":focus": {
                    "background-color": "#e6e6e6",
                  },
                },
                count: {
                  color: "#000000",
                  ":hover": {
                    color: "#000000",
                  },
                },
                iconPath: {
                  fill: "#000000",
                },
              },
            },
          },
        });
      });
    }

    // Load SDK or initialize directly
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else if (!isScriptLoaded) {
      isScriptLoaded = true;
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div className={styles.buyButtonContainer}>
      <div id="product-component-1746366617053" />
    </div>
  );
}
