import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.'

const product = {
  id: '1',
  title: 'I need to learn english, solutions passed by here 30/06/2024',
  // img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard 
        product={product} 
        initialValues={{
          count: 4,
          //maxCount: 8
        }}
      >
        {
          ({count, maxCount, reset, increaseBy, isMaxCountReached}) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
