import Header from "@/components/ui/Header";
import { homeConfig } from "@/config/Home";

type Props = {};

const page = (props: Props) => {
    return (
        <>
            <Header items={homeConfig.mainNav} />
        </>
    );
};

export default page;
