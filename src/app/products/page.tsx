import ProductCard from "@/components/ProductCard";
const data = {
    crops: [
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Wheat",
            quantity: 100,
            rate: 2.5,
            agentId: 123,
            farmerId: 456,
            status: "Received",
            submitDate: "2023-07-01",
            receiveDate: "2023-07-02",
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Corn",
            quantity: 50,
            rate: 3,
            agentId: 234,
            farmerId: 567,
            status: "Pending",
            submitDate: "2023-07-02",
            receiveDate: null,
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Tomato",
            quantity: 150,
            rate: 1,
            agentId: 345,
            farmerId: 678,
            status: "Delivered",
            submitDate: "2023-07-03",
            receiveDate: "2023-07-03",
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Potato",
            quantity: 80,
            rate: 2,
            agentId: 456,
            farmerId: 789,
            status: "Pending",
            submitDate: "2023-07-04",
            receiveDate: null,
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Cucumber",
            quantity: 120,
            rate: 1.5,
            agentId: 567,
            farmerId: 890,
            status: "Received",
            submitDate: "2023-07-05",
            receiveDate: "2023-07-06",
        },
    ],
    vegetables: [
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Carrot",
            quantity: 10,
            rate: 2.5,
            agentId: 123,
            farmerId: 456,
            status: "Received",
            submitDate: "2023-07-01",
            receiveDate: "2023-07-02",
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Broccoli",
            quantity: 5,
            rate: 3,
            agentId: 234,
            farmerId: 567,
            status: "Pending",
            submitDate: "2023-07-02",
            receiveDate: null,
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Spinach",
            quantity: 8,
            rate: 2,
            agentId: 456,
            farmerId: 789,
            status: "Pending",
            submitDate: "2023-07-04",
            receiveDate: null,
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Onion",
            quantity: 15,
            rate: 1.5,
            agentId: 567,
            farmerId: 890,
            status: "Delivered",
            submitDate: "2023-07-05",
            receiveDate: "2023-07-06",
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Cabbage",
            quantity: 20,
            rate: 1,
            agentId: 678,
            farmerId: 901,
            status: "Received",
            submitDate: "2023-07-07",
            receiveDate: "2023-07-08",
        },
    ],
    fruits: [
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Apple",
            quantity: 20,
            rate: 0.5,
            agentId: 678,
            farmerId: 901,
            status: "Delivered",
            submitDate: "2023-07-01",
            receiveDate: "2023-07-02",
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Banana",
            quantity: 30,
            rate: 0.3,
            agentId: 789,
            farmerId: 12,
            status: "Received",
            submitDate: "2023-07-02",
            receiveDate: "2023-07-03",
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Orange",
            quantity: 25,
            rate: 0.4,
            agentId: 890,
            farmerId: 123,
            status: "Pending",
            submitDate: "2023-07-03",
            receiveDate: null,
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Grapes",
            quantity: 18,
            rate: 0.8,
            agentId: 901,
            farmerId: 234,
            status: "Delivered",
            submitDate: "2023-07-04",
            receiveDate: "2023-07-05",
        },
        {
            img: "https://images.pexels.com/photos/3987358/pexels-photo-3987358.jpeg",
            name: "Strawberry",
            quantity: 14,
            rate: 1.2,
            agentId: 12,
            farmerId: 345,
            status: "Received",
            submitDate: "2023-07-05",
            receiveDate: "2023-07-06",
        },
    ],
};

type Props = {};

const page = (props: Props) => {
    console.log(data);
    return (
        <div className="flex flex-wrap justify-around gap-2 my-6 item-center">
            {data.crops.map((i) => (
                <ProductCard
                    key={i.name}
                    title={i.name}
                    rate={i.rate}
                    img={i.img}
                />
            ))}

            {data.vegetables.map((i) => (
                <ProductCard
                    key={i.name}
                    title={i.name}
                    rate={i.rate}
                    img={i.img}
                />
            ))}
            {data.fruits.map((i) => (
                <ProductCard
                    key={i.name}
                    title={i.name}
                    rate={i.rate}
                    img={i.img}
                />
            ))}
        </div>
    );
};

export default page;
