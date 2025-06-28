import { createContext, useState, type ReactNode, useEffect } from 'react';
import { type Products } from '../interfaces/appInterface';


export interface AppContextType {
  cart: Products[];
  addToCart: (product: Products) => void;
  removeFromCart: (product: Products) => void;
}

const initialAppState: AppContextType = {
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {}
};

export const AppContext = createContext<AppContextType | null>(null);

// load state from local storage
const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return null;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

const storedState = loadState();

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState<AppContextType>(
    storedState ? storedState : initialAppState
  );

  useEffect(() => {
    // save state to local storage on changes
    sessionStorage.setItem('state', JSON.stringify(appState));
  }, [appState]);

  const updateState = (state: string, value: any) => {
    setAppState({
      ...appState,
      [state]: value,
    });
  };

  const addToCart = (product: Products) => {
      const existingProductIndex = appState.cart.filter((item) => item.id === product.id)
      
      if (existingProductIndex.length > 0) {
          // Product already in cart, update quantity or other properties if needed
          throw new Error('Product already in cart');
      } else {
          // Add new product to cart
        //   appState.cart.push(product);
            setAppState((prevState) => ({ ...prevState, cart: [...prevState.cart, product] }));
      }
  };
  
  const removeFromCart = (product: Products) => {
      const productIndex = appState.cart.findIndex((item) => item.id === product.id);
      
      if (productIndex !== -1) {
          // Remove product from cart
        //   appState.cart.splice(productIndex, 1);
            setAppState((prevState) => ({ ...prevState, cart: prevState.cart.filter((item) => item.id !== product.id) }));
      } else {
          throw new Error('Product not found in cart');
      }
  };

  const providerValues = {
    updateState,
    addToCart,
    removeFromCart,
    cart: appState.cart,
  };

  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
};