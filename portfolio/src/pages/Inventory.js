import DetailedWork from '../components/DetailedWork';
import { inventoryDetails as details } from '../data/InventoryPage';

const Inventory = () => {
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

export default Inventory;