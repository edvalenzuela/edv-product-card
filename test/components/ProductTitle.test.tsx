import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from "../data/products";

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Producto" />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})
