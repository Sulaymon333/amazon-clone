import moment from 'moment';

const Orders = ({ id, amount, amountShipping, items, images, timestamp }) => {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div className="">
                    <p className="font-bold text-xs uppercase ">order placed</p>
                    <p>{moment.unix(timestamp).format('DD.MM.YYYY')}</p>
                </div>
                <div className="">
                    <p className="font-bold text-xs uppercase">amount</p>
                    <p>
                        {new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(amount)} - Prime
                        - Next Day Delivery{' '}
                        {new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(amountShipping)}
                    </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right text-blue-500">
                    {items.length} items
                </p>

                <p className="font-bold absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap uppercase">
                    order # - <span className="font-normal">{id}</span>
                </p>
            </div>
            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {images.map((image, i) => (
                        <img src={image} key={i} className="h-20 object-contain sm:h-32" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
