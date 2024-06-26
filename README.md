# EDV-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Eduardo Valenzuela

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card'
```

```
<ProductCard 
  product={products[0]} 
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
```