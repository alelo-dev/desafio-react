import { useEffect, useReducer } from 'react';

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type State = {
  status: 'idle' | 'pending' | 'error' | string;
  products: Products[] | null;
  error: string | null;
};

type Action =
  | { type: 'start' }
  | { type: 'success'; products: Products[] }
  | { type: 'error' }
  | { type: ErrorConstructor };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'start': {
      return {
        ...state,
        status: 'pending',
      };
    }
    case 'success': {
      return {
        ...state,
        products: action.products,
        status: 'resolved',
      };
    }
    case 'error': {
      return {
        ...state,
        status: 'error',
        error: 'Unable to get the products',
      };
    }
    default:
      throw new Error(`Error on action: ${action.type}`);
  }
}

const useProducts = () => {
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    products: null,
    error: null,
  });

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => dispatch({ type: 'success', products: data }));
    } catch (error) {
      dispatch({ type: 'error' });
    }
  }, []);

  const { status } = state;

  return {
    isLoading: status === 'idle' || status === 'pending',
    isResolved: status === 'resolved',
    ...state,
  };
};

export default useProducts;
