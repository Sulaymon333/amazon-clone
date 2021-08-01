import moment from 'moment';
import db from '../../firebase';
import Header from '../components/Header';
import { useSession, getSession } from 'next-auth/client';
import Order from '../components/Order';

const Orders = ({ orders }) => {
    const [session] = useSession();

    return (
        <div className="bg-gray-100 h-screen">
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <div className="flex flex-col p-10 bg-white">
                    <h1 className="text-3xl border-b border-yellow-400 mb-2 pb-1">Your orders</h1>
                    {session ? (
                        <h2>
                            Total Order(s): <span className="font-bold">{orders.length}</span>
                        </h2>
                    ) : (
                        <h2> Please sign in to see your orders</h2>
                    )}
                    <div className="mt-5 space-y-4">
                        {orders && orders.map((order) => <Order key={order.id} {...order} />)}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Orders;

// getServerSideProps
export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // get the users logged in credential
    // and the context is the user

    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    // firebase db
    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();

    // stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );
    return {
        props: {
            orders,
            session,
        },
    };
}
