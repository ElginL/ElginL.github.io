import DetailedWork from '../components/DetailedWork';
import { shoppingCartDetails as details } from '../data/ShoppingCartPage';

const ShoppingCart = () => {
    return (
        <DetailedWork
            workTitle={details.workTitle}
            windowImages={details.windowImages}
            siteLink={details.siteLink}
            codeLink={details.codeLink}
            description={details.description}
            learningPoints={details.learningPoints}
            isLargeDisplay={true}
        />
    );
};

export default ShoppingCart;