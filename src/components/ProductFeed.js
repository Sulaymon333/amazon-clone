import Product from './Product';

const ProductFeed = ({ products }) => {
    return (
        <div>
            <h1>Product feed</h1>
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductFeed;
