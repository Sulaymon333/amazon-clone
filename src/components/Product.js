import Image from 'next/image';
const Product = ({ id, title, price, description, category, image }) => {
    return (
        <div>
            <p>{category}</p>
            <Image width={200} height={200} objectFit="contain" src={image} alt={title} />
            <h4>{title}</h4>
        </div>
    );
};

export default Product;
